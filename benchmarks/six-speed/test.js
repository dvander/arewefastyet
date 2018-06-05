function makeDoRun(source) {
    // jsc shim
    if (typeof runString === 'function') {
        return function() {
            let start = Date.now();
            let globalObjectOfScript = runString(source);
            return Date.now() - start;
        };
    }

    // spidermonkey shim
    if (typeof newGlobal === 'function') {
        return function() {
            let start = Date.now();
            let globalObjectOfScript = newGlobal();
            globalObjectOfScript.eval(source);
            return Date.now() - start;
        }
    }

    // v8 shim
    return function() {
        let start = Date.now();
        const realm = Realm.create();
        Realm.eval(realm, source);
        let timing = Date.now() - start;
        Realm.dispose(realm);
        return timing;
    }
}

var tests = [
    "template_string",
    "defaults",
    "map-set-lookup",
    "spread",
    "object-assign",
    "spread-literal",
    "map-set",
    "destructuring-simple",
    "super",
    "for-of-object",
    "rest",
    "regex-u",
    "arrow",
    "bindings-compound",
    "classes",
    "template_string_tag",
    "map-string",
    "arrow-declare",
    "spread-generator",
    "object-literal-ext",
    "generator",
    "arrow-args",
    "for-of-array",
    "bindings",
    "destructuring",
    "map-set-object"
]
var iteration_for_test = [
    200000000,
    100000000,
    200000,
    1000000,
    600000,
    1000000,
    10000,
    20000000,
    3000000,
    1000000,
    500000,
    1000000,
    20000000,
    20000000,
    10000000,
    2000000,
    30000000,
    30000000,
    1000000,
    1000000,
    3000000,
    20000000,
    5000000,
    20000000,
    20000000,
    5000
]

for (var z = 0; z < tests.length; z++) {
    var timing = 0;
    var testname = tests[z];
    var iterations = iteration_for_test[z];

    // ES5
    var content = read("tests/"+testname+".es5")
    var func = makeDoRun(`
function assertEqual() {}
function test(fn) {
    var its = ${iterations};
    for (var i = 0; i < its; i++) {
        fn();
    }
}
${content}
`);
    print(testname+"-es5:", func());

    // ES6
    var content = read("tests/"+testname+".es6")
    var func = makeDoRun(`
function assertEqual() {}
function test(fn) {
    var its = ${iterations};
    for (var i = 0; i < its; i++) {
        fn();
    }
}
${content}
`);
    print(testname+"-es6:", func());
}
