import platform
import urllib2
import re

import utils

MAC_BUILDBOT_REPOSITORIES = ('mozilla-beta', 'mozilla-release', 'mozilla-esr52')


class UrlCreator(object):
    def __init__(self, config, repo, other_platform=None):
        self.repo = repo

        self.arch = config[0:2]
        self.platform = other_platform if other_platform is not None else platform.system()

    def find(self, cset = 'latest', **kwargs):
        if cset == 'latest':
            urls = self.latest(**kwargs)[0:5]
        else:
            urls = self.url_for_revision(cset, **kwargs)
        return urls

class ChromeUrlCreator(UrlCreator):

    def _url_base(self):
        platform = self._platform()
        return "http://commondatastorage.googleapis.com/chromium-browser-snapshots/" + platform + "/"

    def _platform(self):
        if self.platform == "Linux":
            if self.arch == '64':
                return "Linux_x64"
            if self.arch == '32':
                return "Linux"
        if self.platform == "Darwin":
            return "Mac"
        if self.platform == "Windows" or self.platform.startswith("CYGWIN"):
            if self.arch == '32':
                return "Win"
            if self.arch == '64':
                return "Win_x64"
        raise Exception("Unknown platform: " + self.platform)

    def latest(self, **kwargs):
        response = urllib2.urlopen(self._url_base() + "LAST_CHANGE")
        chromium_rev = response.read()

        response = urllib2.urlopen(self._url_base() + chromium_rev + "/REVISIONS")
        cset = re.findall('"v8_revision_git": "([a-z0-9]*)",', response.read())[0]

        return [self._url_base() + chromium_rev + "/"]

class WebKitUrlCreator(UrlCreator):

    def latest(self, **kwargs):
        response = urllib2.urlopen("https://webkit.org/downloads/")
        html = response.read()

        url = re.findall("https://builds-nightly.webkit.org/files/trunk/mac/WebKit-SVN-r[0-9]*.dmg", html)
        return url


class TaskClusterIndexHelper(object):
    _index_url = 'https://index.taskcluster.net/v1/task/gecko.v2'
    _artifacts = 'https://public-artifacts.taskcluster.net'

    @classmethod
    def _latest_unsigned_nightly_task_id(cls, repo_name, product, platform):
        '''Return taskId for the latest nightly task.'''
        assert product in ('firefox', 'mobile')
        # Even though it says 'opt' these are PGO nightly builds
        platform = platform + '-opt'
        assert platform in ('linux-opt', 'linux64-opt', 'macosx64-opt',
                            'win32-opt', 'win64-opt')

        url = '{}.{}.nightly.latest.{}.{}'.format(
            cls._index_url,
            repo_name,
            product,
            platform)
        return utils.fetch_json(url)['taskId']

    @classmethod
    def _artifact_to_filename(cls, platform):
        platform_to_file = {
            'linux': 'target.tar.bz2',
            'linux64': 'target.tar.bz2',
            'macosx64': 'target.dmg',
            'win32': 'target.zip',
            'win64': 'target.zip',
        }
        return platform_to_file[platform]

    @classmethod
    def _artifact_url(cls, task_id, artifact_path, run_id=0):
        '''Return Buildbot properties for a known Buildbot generated task.'''
        return '{}/{}/{}/{}'.format(
            cls._artifacts,
            task_id,
            run_id,
            artifact_path)

    @classmethod
    def latest_nightly_url(cls, repo_name, product, platform):
        '''Return URL to latest nightly build.'''
        task_id = cls._latest_unsigned_nightly_task_id(repo_name, product, platform)
        return cls._artifact_url(
            task_id,
            artifact_path='public/build/{}'.format(cls._artifact_to_filename(platform)))


class MozillaUrlCreator(UrlCreator):

    def __init__(self, config, repo, platform=None):
        if repo == "mozilla-try":
            repo = "try";
        UrlCreator.__init__(self, config, repo, platform)

    def _platform(self):
        if self.platform == "Linux":
            if self.arch == "32":
                return "linux"
            return "linux" + self.arch
        if self.platform == "Darwin":
            return "macosx64"
        if self.platform == "Windows" or self.platform.startswith("CYGWIN"):
            return "win" + self.arch
        raise Exception("Unknown platform: " + self.platform)

    def treeherder_platform(self):
        platform = self._platform()
        if platform == "linux":
            return ["linux32"]
        if platform == "linux64":
            return ["linux64"]
        if platform == "win32":
            return ["windowsxp", "windows2012-32"]
        if platform == "win64":
            return ["windows8-64", "windows2012-64"]  # LATER??
        if platform == "macosx64":
            # The first value is valid for Buildbot
            # while the latter is for TaskCluster
            return ["osx-10-7", "osx-10-10"]

    def latest(self, buildtype):
        url = "https://treeherder.mozilla.org/api/project/" + self.repo + "/resultset/?count=10"
        data = utils.fetch_json(url)

        revisions = [i["revision"] for i in data["results"]]
        for revision in revisions:
            urls = self._url_for_revision(revision, buildtype)
            if len(urls) == 1:
                return [urls[0]]

        return []

    def url_for_revision(self, cset, buildtype):
        urls = self._url_for_revision(cset, buildtype)
        assert len(urls) == 1
        return urls

    def _url_for_revision(self, cset, buildtype):
        def _filter_with_symbols(builds, allowed_symbols):
            return [i for i in builds
                    if i["job_type_symbol"] in allowed_symbols  # builds
                    and i["platform_option"] == buildtype  # opt / debug / pgo
                    and i["platform"] in self.treeherder_platform()]  # platform

        def _query_treeherder_for_builds():
            # here we use a detour using treeherder to find the build_id,
            # corresponding to a revision.
            url = "https://treeherder.mozilla.org/api/project/" + self.repo + "/resultset/?full=false&revision=" + cset
            data = utils.fetch_json(url)

            # No corresponding build found given revision
            if len(data["results"]) != 1:
                return []

            # The revision is not pushed separately. It is not the top commit
            # of a list of pushes that were done at the same time.
            if not data["results"][0]["revision"].startswith(cset):
                return []

            id = str(data["results"][0]["id"])

            url = "https://treeherder.mozilla.org/api/project/" + self.repo + "/jobs/?count=2000&result_set_id=" + str(id)
            data = utils.fetch_json(url)
            fetched_builds = data["results"]

            if self._platform() == "macosx64" and self.repo in MAC_BUILDBOT_REPOSITORIES:
                fetched_builds = [i for i in fetched_builds if i["build_system_type"] == "buildbot"]
            else:
                fetched_builds = [i for i in fetched_builds if i["build_system_type"] == "taskcluster"]

            builds = _filter_with_symbols(fetched_builds, ("B", "Bo"))
            if len(builds) != 1:
                if len(builds) > 1:
                    print "Job symbols B/Bo yielded {} results, retrying with N symbols.".format(len(builds))
                builds = _filter_with_symbols(fetched_builds, ("N"))

                if len(builds) == 0:
                    print "No jobs found at all, aborting."
                    return []
                elif len(builds) > 1:
                    print "Job symbols N yielded too many ({}) results, aborting.".format(len(builds))
                    return []

            return builds

        def _urls_from_treeherder_build(builds):
            if not builds:
                return []

            if self._platform() == "macosx64" and self.repo in MAC_BUILDBOT_REPOSITORIES:
                # Buildbot builds are now triggered via TaskCluster/BuildbotBridge
                # * One task represents a Buildbot job (bbb_task_id)
                # * The Buildbot job uploads artifacts to another task (upload_task_id)
                bbb_task_id = builds[0]['reason'].replace('Created by BBB for task ', '')
                url = "https://public-artifacts.taskcluster.net"
                data = utils.fetch_json("{}/{}/0/public/properties.json".format(url, bbb_task_id))

                # data['packageFilename'] == [u'firefox-55.0.en-US.mac.dmg', u'SetProperty Step']
                # data['upload_to_task_id'] == [u'ZsXNFXZCRfi67CHWeJDGVA', u'bbb']
                filename = data['packageFilename'][0]
                upload_task_id = data['upload_to_task_id'][0]
                return ["{}/{}/0/public/build/{}".format(url, upload_task_id, filename)]

            url = "https://treeherder.mozilla.org/api/jobdetail/?job_guid=" + str(builds[0]["job_guid"])
            data = utils.fetch_json(url)

            urls = [item["url"] for item in data["results"] if item["url"]]

            urls = [url for url in urls
                    if 'target.zip' in url or
                       'target.tar.bz2' in url or
                       'target.dmg' in url or
                       ('firefox-' in url and url.endswith(self._platform() + '.zip'))]

            return urls

        assert buildtype in ('opt', 'pgo', 'nightly'), \
            '{} is not a valid buildtype (opt, pgo, nightly).'.format(
                buildtype
            )

        if buildtype == 'nightly':
            return [TaskClusterIndexHelper().latest_nightly_url(
                self.repo,
                'firefox',
                self._platform())]

        return _urls_from_treeherder_build(_query_treeherder_for_builds())

def get(config, repo, platform=None):
    if "mozilla" in repo:
        return MozillaUrlCreator(config, repo, platform)
    if "chrome" in repo:
        return ChromeUrlCreator(config, repo, platform)
    if "webkit" in repo:
        return WebKitUrlCreator(config, repo, platform)
    raise Exception("Unknown vendor")
