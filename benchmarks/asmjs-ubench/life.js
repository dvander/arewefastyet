function j(a){throw a;}var k=void 0,n=!0,q=null,s=!1;function u(){return function(){}}try{this.Module=Module,Module.test}catch(aa){this.Module=Module={}}var ba="object"===typeof process&&"function"===typeof require,ca="object"===typeof window,v="function"===typeof importScripts,da=!ca&&!ba&&!v;"object"===typeof module&&(module.R=Module);
if(ba){Module.print=function(a){process.stdout.write(a+"\n")};Module.printErr=function(a){process.stderr.write(a+"\n")};var ea=require("fs"),fa=require("path");Module.read=function(a,b){var a=fa.normalize(a),c=ea.readFileSync(a);!c&&a!=fa.resolve(a)&&(a=path.join(__dirname,"..","src",a),c=ea.readFileSync(a));c&&!b&&(c=c.toString());return c};Module.readBinary=function(a){return Module.read(a,n)};Module.load=function(a){ga(read(a))};Module.arguments||(Module.arguments=process.argv.slice(2))}
da&&(Module.print=print,"undefined"!=typeof printErr&&(Module.printErr=printErr),Module.read=read,Module.readBinary=function(a){return read(a,"binary")},Module.arguments||("undefined"!=typeof scriptArgs?Module.arguments=scriptArgs:"undefined"!=typeof arguments&&(Module.arguments=arguments)));ca&&!v&&(Module.print||(Module.print=function(a){console.log(a)}),Module.printErr||(Module.printErr=function(a){console.log(a)}));
if(ca||v)Module.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,s);b.send(q);return b.responseText},Module.arguments||"undefined"!=typeof arguments&&(Module.arguments=arguments);v&&(Module.print||(Module.print=u()),Module.load=importScripts);!v&&(!ca&&!ba&&!da)&&j("Unknown runtime environment. Where are we?");function ga(a){eval.call(q,a)}"undefined"==!Module.load&&Module.read&&(Module.load=function(a){ga(Module.read(a))});Module.print||(Module.print=u());
Module.printErr||(Module.printErr=Module.print);Module.arguments||(Module.arguments=[]);Module.print=Module.print;Module.g=Module.printErr;Module.preRun||(Module.preRun=[]);Module.postRun||(Module.postRun=[]);function ha(){return x}function ia(a){x=a}function ja(a){if(1==z)return 1;var b={"%i1":1,"%i8":1,"%i16":2,"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+a];b||("*"==a.charAt(a.length-1)?b=z:"i"==a[0]&&(a=parseInt(a.substr(1)),A(0==a%8),b=a/8));return b}
function ka(a,b,c){c&&c.length?(c.splice||(c=Array.prototype.slice.call(c)),c.splice(0,0,b),Module["dynCall_"+a].apply(q,c)):Module["dynCall_"+a].call(q,b)}var la;
function ma(){var a=[],b=0;this.B=function(c){c&=255;b&&(a.push(c),b--);if(0==a.length){if(128>c)return String.fromCharCode(c);a.push(c);b=191<c&&224>c?1:2;return""}if(0<b)return"";var c=a[0],d=a[1],e=a[2],c=191<c&&224>c?String.fromCharCode((c&31)<<6|d&63):String.fromCharCode((c&15)<<12|(d&63)<<6|e&63);a.length=0;return c};this.M=function(a){for(var a=unescape(encodeURIComponent(a)),b=[],e=0;e<a.length;e++)b.push(a.charCodeAt(e));return b}}function na(a){var b=x;x=x+a|0;x=x+7>>3<<3;return b}
function oa(a){var b=C;C=C+a|0;C=C+7>>3<<3;return b}function pa(a){var b=E;E=E+a|0;E=E+7>>3<<3;E>=qa&&F("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, or (2) set Module.TOTAL_MEMORY before the program runs.");return b}function ra(a,b){return Math.ceil(a/(b?b:8))*(b?b:8)}var z=4,sa={},ta=s,ua;function F(a){Module.print(a+":\n"+Error().stack);ta=n;j("Assertion: "+a)}function A(a,b){a||F("Assertion failed: "+b)}var va=this;
Module.ccall=function(a,b,c,d){return wa(xa(a),b,c,d)};function xa(a){try{var b=va.Module["_"+a];b||(b=eval("_"+a))}catch(c){}A(b,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)");return b}
function wa(a,b,c,d){function e(a,b){if("string"==b){if(a===q||a===k||0===a)return 0;f||(f=ha());var c=na(a.length+1);ya(a,c);return c}return"array"==b?(f||(f=ha()),c=na(a.length),za(a,c),c):a}var f=0,g=0,d=d?d.map(function(a){return e(a,c[g++])}):[];a=a.apply(q,d);"string"==b?b=Aa(a):(A("array"!=b),b=a);f&&ia(f);return b}Module.cwrap=function(a,b,c){var d=xa(a);return function(){return wa(d,b,c,Array.prototype.slice.call(arguments))}};
function Ba(a,b,c){c=c||"i8";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":G[a]=b;break;case "i8":G[a]=b;break;case "i16":Ca[a>>1]=b;break;case "i32":I[a>>2]=b;break;case "i64":ua=[b>>>0,(Math.min(+Math.floor(b/4294967296),4294967295)|0)>>>0];I[a>>2]=ua[0];I[a+4>>2]=ua[1];break;case "float":Da[a>>2]=b;break;case "double":J[a>>3]=b;break;default:F("invalid type for setValue: "+c)}}Module.setValue=Ba;
Module.getValue=function(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return G[a];case "i8":return G[a];case "i16":return Ca[a>>1];case "i32":return I[a>>2];case "i64":return I[a>>2];case "float":return Da[a>>2];case "double":return J[a>>3];default:F("invalid type for setValue: "+b)}return q};var Ea=1,L=2,Fa=4;Module.ALLOC_NORMAL=0;Module.ALLOC_STACK=Ea;Module.ALLOC_STATIC=L;Module.ALLOC_DYNAMIC=3;Module.ALLOC_NONE=Fa;
function M(a,b,c,d){var e,f;"number"===typeof a?(e=n,f=a):(e=s,f=a.length);var g="string"===typeof b?b:q,c=c==Fa?d:[Ga,na,oa,pa][c===k?L:c](Math.max(f,g?1:b.length));if(e){d=c;A(0==(c&3));for(a=c+(f&-4);d<a;d+=4)I[d>>2]=0;for(a=c+f;d<a;)G[d++|0]=0;return c}if("i8"===g)return a.subarray||a.slice?O.set(a,c):O.set(new Uint8Array(a),c),c;for(var d=0,i,l;d<f;){var w=a[d];"function"===typeof w&&(w=sa.S(w));e=g||b[d];0===e?d++:("i64"==e&&(e="i32"),Ba(c+d,w,e),l!==e&&(i=ja(e),l=e),d+=i)}return c}
Module.allocate=M;function Aa(a,b){for(var c=s,d,e=0;;){d=O[a+e|0];if(128<=d)c=n;else if(0==d&&!b)break;e++;if(b&&e==b)break}b||(b=e);var f="";if(!c){for(;0<b;)d=String.fromCharCode.apply(String,O.subarray(a,a+Math.min(b,1024))),f=f?f+d:d,a+=1024,b-=1024;return f}c=new ma;for(e=0;e<b;e++)d=O[a+e|0],f+=c.B(d);return f}Module.Pointer_stringify=Aa;var G,O,Ca,Ha,I,Ia,Da,J,Ja=0,C=0,Ka=0,x=0,La=0,Ma=0,E=0,qa=Module.TOTAL_MEMORY||134217728;
A(!!Int32Array&&!!Float64Array&&!!(new Int32Array(1)).subarray&&!!(new Int32Array(1)).set,"Cannot fallback to non-typed array case: Code is too specialized");var P=new ArrayBuffer(qa);G=new Int8Array(P);Ca=new Int16Array(P);I=new Int32Array(P);O=new Uint8Array(P);Ha=new Uint16Array(P);Ia=new Uint32Array(P);Da=new Float32Array(P);J=new Float64Array(P);I[0]=255;A(255===O[0]&&0===O[3],"Typed arrays 2 must be run on a little-endian system");Module.HEAP=k;Module.HEAP8=G;Module.HEAP16=Ca;
Module.HEAP32=I;Module.HEAPU8=O;Module.HEAPU16=Ha;Module.HEAPU32=Ia;Module.HEAPF32=Da;Module.HEAPF64=J;function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.l;"number"===typeof c?b.i===k?ka("v",c):ka("vi",c,[b.i]):c(b.i===k?q:b.i)}}}var Oa=[],Pa=[],Qa=[],Ra=s;function Q(a,b,c){a=(new ma).M(a);c&&(a.length=c);b||a.push(0);return a}Module.intArrayFromString=Q;Module.intArrayToString=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];255<d&&(d&=255);b.push(String.fromCharCode(d))}return b.join("")};
function ya(a,b,c){a=Q(a,c);for(c=0;c<a.length;)G[b+c|0]=a[c],c+=1}Module.writeStringToMemory=ya;function za(a,b){for(var c=0;c<a.length;c++)G[b+c|0]=a[c]}Module.writeArrayToMemory=za;function Sa(a,b){return 0<=a?a:32>=b?2*Math.abs(1<<b-1)+a:Math.pow(2,b)+a}function Ta(a,b){if(0>=a)return a;var c=32>=b?Math.abs(1<<b-1):Math.pow(2,b-1);if(a>=c&&(32>=b||a>c))a=-2*c+a;return a}Math.imul||(Math.imul=function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16)*d+c*(b>>>16)<<16)|0});
var R=0,Ua={},Va=s,Wa=q;function Xa(a){R++;Module.monitorRunDependencies&&Module.monitorRunDependencies(R);a?(A(!Ua[a]),Ua[a]=1):Module.g("warning: run dependency added without ID")}Module.addRunDependency=Xa;function Ya(a){R--;Module.monitorRunDependencies&&Module.monitorRunDependencies(R);a?(A(Ua[a]),delete Ua[a]):Module.g("warning: run dependency removed without ID");0==R&&(Wa!==q&&(clearInterval(Wa),Wa=q),!Va&&Za&&$a([].concat(Module.arguments)))}Module.removeRunDependency=Ya;
Module.preloadedImages={};Module.preloadedAudios={};var Ja=8,C=Ja+56,S;S=S=M([0,0,0,0,0,0,0,0],"i8",L);M([108,105,102,101,58,32,37,100,44,37,100,44,37,100,44,37,100,10,0,0,0,0,0,0,101,114,114,111,114,58,32,37,100,92,110,0,0,0,0,0,32,32,0,0,0,0,0,0,91,93,0,0,0,0,0,0],"i8",Fa,8);var ab=ra(M(12,"i8",L),8);A(0==ab%8);var bb=5,cb=6,db=9,T=13,eb=21,fb=22,gb=0;function U(a){return I[gb>>2]=a}var hb=M(1,"i32*",L);S=M(1,"i32*",L);var ib=M(1,"i32*",L),jb=M(1,"i32*",L),kb=2,V=[q],lb=n;
function mb(a,b){if("string"!==typeof a)return q;b===k&&(b="/");a&&"/"==a[0]&&(b="");for(var c=(b+"/"+a).split("/").reverse(),d=[""];c.length;){var e=c.pop();""==e||"."==e||(".."==e?1<d.length&&d.pop():d.push(e))}return 1==d.length?"/":d.join("/")}
function nb(a,b,c){var d={L:s,k:s,error:0,name:q,path:q,object:q,w:s,A:q,z:q},a=mb(a);if("/"==a)d.L=n,d.k=d.w=n,d.name="/",d.path=d.A="/",d.object=d.z=ob;else if(a!==q)for(var c=c||0,a=a.slice(1).split("/"),e=ob,f=[""];a.length;){1==a.length&&e.d&&(d.w=n,d.A=1==f.length?"/":f.join("/"),d.z=e,d.name=a[0]);var g=a.shift();if(e.d)if(e.C){if(!e.a.hasOwnProperty(g)){d.error=2;break}}else{d.error=T;break}else{d.error=20;break}e=e.a[g];if(e.link&&!(b&&0==a.length)){if(40<c){d.error=92;break}d=mb(e.link,
f.join("/"));d=nb([d].concat(a).join("/"),b,c+1);break}f.push(g);0==a.length&&(d.k=n,d.path=f.join("/"),d.object=e)}return d}function pb(a){qb();a=nb(a,k);if(a.k)return a.object;U(a.error);return q}
function rb(a,b,c,d,e){a||(a="/");"string"===typeof a&&(a=pb(a));a||(U(T),j(Error("Parent path must exist.")));a.d||(U(20),j(Error("Parent must be a folder.")));!a.write&&!lb&&(U(T),j(Error("Parent folder must be writeable.")));if(!b||"."==b||".."==b)U(2),j(Error("Name must not be empty."));a.a.hasOwnProperty(b)&&(U(17),j(Error("Can't overwrite object.")));a.a[b]={C:d===k?n:d,write:e===k?s:e,timestamp:Date.now(),K:kb++};for(var f in c)c.hasOwnProperty(f)&&(a.a[b][f]=c[f]);return a.a[b]}
function sb(a,b,c,d){return rb(a,b,{d:n,b:s,a:{}},c,d)}function tb(a,b,c,d){a=pb(a);a===q&&j(Error("Invalid parent."));for(b=b.split("/").reverse();b.length;){var e=b.pop();e&&(a.a.hasOwnProperty(e)||sb(a,e,c,d),a=a.a[e])}return a}function ub(a,b,c,d,e){c.d=s;return rb(a,b,c,d,e)}function vb(a,b,c,d,e){if("string"===typeof c){for(var f=Array(c.length),g=0,i=c.length;g<i;++g)f[g]=c.charCodeAt(g);c=f}c={b:s,a:c.subarray?c.subarray(0):c};return ub(a,b,c,d,e)}
function W(a,b,c,d){!c&&!d&&j(Error("A device must have at least one callback defined."));return ub(a,b,{b:n,input:c,c:d},Boolean(c),Boolean(d))}function qb(){ob||(ob={C:n,write:n,d:n,b:s,timestamp:Date.now(),K:1,a:{}})}var wb,ob;function xb(a,b,c){a=V[a];if(!a)return-1;a.sender(O.subarray(b,b+c));return c}
function yb(a,b,c,d){a=V[a];if(!a||a.object.b)return U(db),-1;if(a.f){if(a.object.d)return U(eb),-1;if(0>c||0>d)return U(fb),-1;for(var e=a.object.a;e.length<d;)e.push(0);for(var f=0;f<c;f++)e[d+f]=O[b+f|0];a.object.timestamp=Date.now();return f}U(T);return-1}
function zb(a,b,c){var d=V[a];if(d&&"socket"in d)return xb(a,b,c);if(d){if(d.f){if(0>c)return U(fb),-1;if(d.object.b){if(d.object.c){for(a=0;a<c;a++)try{d.object.c(G[b+a|0])}catch(e){return U(bb),-1}d.object.timestamp=Date.now();return a}U(cb);return-1}b=yb(a,b,c,d.position);-1!=b&&(d.position+=b);return b}U(T);return-1}U(db);return-1}function Ab(a,b,c,d){c*=b;if(0==c)return 0;a=zb(d,a,c);return-1==a?(V[d]&&(V[d].error=n),0):Math.floor(a/b)}Module._strlen=Bb;
function Cb(a){return 0>a||0===a&&-Infinity===1/a}
function Db(a,b){function c(a){var c;"double"===a?c=J[b+e>>3]:"i64"==a?(c=[I[b+e>>2],I[b+(e+8)>>2]],e+=8):(a="i32",c=I[b+e>>2]);e+=Math.max(Math.max(ja(a),z),8);return c}for(var d=a,e=0,f=[],g,i;;){var l=d;g=G[d];if(0===g)break;i=G[d+1|0];if(37==g){var w=s,D=s,y=s,r=s;a:for(;;){switch(i){case 43:w=n;break;case 45:D=n;break;case 35:y=n;break;case 48:if(r)break a;else{r=n;break}default:break a}d++;i=G[d+1|0]}var B=0;if(42==i)B=c("i32"),d++,i=G[d+1|0];else for(;48<=i&&57>=i;)B=10*B+(i-48),d++,i=G[d+
1|0];var K=s;if(46==i){var m=0,K=n;d++;i=G[d+1|0];if(42==i)m=c("i32"),d++;else for(;;){i=G[d+1|0];if(48>i||57<i)break;m=10*m+(i-48);d++}i=G[d+1|0]}else m=6;var p;switch(String.fromCharCode(i)){case "h":i=G[d+2|0];104==i?(d++,p=1):p=2;break;case "l":i=G[d+2|0];108==i?(d++,p=8):p=4;break;case "L":case "q":case "j":p=8;break;case "z":case "t":case "I":p=4;break;default:p=q}p&&d++;i=G[d+1|0];switch(String.fromCharCode(i)){case "d":case "i":case "u":case "o":case "x":case "X":case "p":l=100==i||105==i;
p=p||4;g=c("i"+8*p);var h;8==p&&(g=117==i?+(g[0]>>>0)+4294967296*+(g[1]>>>0):+(g[0]>>>0)+4294967296*+(g[1]|0));4>=p&&(g=(l?Ta:Sa)(g&Math.pow(256,p)-1,8*p));var H=Math.abs(g),l="";if(100==i||105==i)h=Ta(g,8*p).toString(10);else if(117==i)h=Sa(g,8*p).toString(10),g=Math.abs(g);else if(111==i)h=(y?"0":"")+H.toString(8);else if(120==i||88==i){l=y&&0!=g?"0x":"";if(0>g){g=-g;h=(H-1).toString(16);H=[];for(y=0;y<h.length;y++)H.push((15-parseInt(h[y],16)).toString(16));for(h=H.join("");h.length<2*p;)h="f"+
h}else h=H.toString(16);88==i&&(l=l.toUpperCase(),h=h.toUpperCase())}else 112==i&&(0===H?h="(nil)":(l="0x",h=H.toString(16)));if(K)for(;h.length<m;)h="0"+h;for(w&&(l=0>g?"-"+l:"+"+l);l.length+h.length<B;)D?h+=" ":r?h="0"+h:l=" "+l;h=l+h;h.split("").forEach(function(a){f.push(a.charCodeAt(0))});break;case "f":case "F":case "e":case "E":case "g":case "G":g=c("double");if(isNaN(g))h="nan",r=s;else if(isFinite(g)){K=s;p=Math.min(m,20);if(103==i||71==i)K=n,m=m||1,p=parseInt(g.toExponential(p).split("e")[1],
10),m>p&&-4<=p?(i=(103==i?"f":"F").charCodeAt(0),m-=p+1):(i=(103==i?"e":"E").charCodeAt(0),m--),p=Math.min(m,20);if(101==i||69==i)h=g.toExponential(p),/[eE][-+]\d$/.test(h)&&(h=h.slice(0,-1)+"0"+h.slice(-1));else if(102==i||70==i)h=g.toFixed(p),0===g&&Cb(g)&&(h="-"+h);l=h.split("e");if(K&&!y)for(;1<l[0].length&&-1!=l[0].indexOf(".")&&("0"==l[0].slice(-1)||"."==l[0].slice(-1));)l[0]=l[0].slice(0,-1);else for(y&&-1==h.indexOf(".")&&(l[0]+=".");m>p++;)l[0]+="0";h=l[0]+(1<l.length?"e"+l[1]:"");69==i&&
(h=h.toUpperCase());w&&0<=g&&(h="+"+h)}else h=(0>g?"-":"")+"inf",r=s;for(;h.length<B;)h=D?h+" ":r&&("-"==h[0]||"+"==h[0])?h[0]+"0"+h.slice(1):(r?"0":" ")+h;97>i&&(h=h.toUpperCase());h.split("").forEach(function(a){f.push(a.charCodeAt(0))});break;case "s":r=(w=c("i8*"))?Bb(w):6;K&&(r=Math.min(r,m));if(!D)for(;r<B--;)f.push(32);if(w)for(y=0;y<r;y++)f.push(O[w++|0]);else f=f.concat(Q("(null)".substr(0,r),n));if(D)for(;r<B--;)f.push(32);break;case "c":for(D&&f.push(c("i8"));0<--B;)f.push(32);D||f.push(c("i8"));
break;case "n":D=c("i32*");I[D>>2]=f.length;break;case "%":f.push(g);break;default:for(y=l;y<d+2;y++)f.push(G[y])}d+=2}else f.push(g),d+=1}return f}function Eb(a,b,c){c=Db(b,c);b=ha();a=Ab(M(c,"i8",Ea),1,c.length,a);ia(b);return a}function X(a,b){var c=Sa(a&255);G[X.D|0]=c;return-1==zb(b,X.D,1)?(V[b]&&(V[b].error=n),-1):c}Module._memcpy=Fb;Module._memset=Gb;function Ga(a){return pa(a+8)+8&4294967288}Module._malloc=Ga;var Hb=s,Ib=s,Jb=s,Kb=s,Lb=k,Y=k,Mb=[];
function Nb(){var a=Module.canvas;Mb.forEach(function(b){b(a.width,a.height)})}function Ob(){var a=Module.canvas;this.Q=a.width;this.P=a.height;a.width=screen.width;a.height=screen.height;a=Ia[SDL.screen+0*z>>2];I[SDL.screen+0*z>>2]=a|8388608;Nb()}function Pb(){var a=Module.canvas;a.width=this.Q;a.height=this.P;a=Ia[SDL.screen+0*z>>2];I[SDL.screen+0*z>>2]=a&-8388609;Nb()}var Qb,Z,Rb,Sb;
Oa.unshift({l:function(){if(!Module.noFSInit&&!wb){var a,b,c,d=function(a){a===q||10===a?(b.h(b.buffer.join("")),b.buffer=[]):b.buffer.push(i.B(a))};A(!wb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");wb=n;qb();a=a||Module.stdin;b=b||Module.stdout;c=c||Module.stderr;var e=n,f=n,g=n;a||(e=s,a=function(){if(!a.j||!a.j.length){var b;"undefined"!=typeof window&&"function"==
typeof window.prompt?(b=window.prompt("Input: "),b===q&&(b=String.fromCharCode(0))):"function"==typeof readline&&(b=readline());b||(b="");a.j=Q(b+"\n",n)}return a.j.shift()});var i=new ma;b||(f=s,b=d);b.h||(b.h=Module.print);b.buffer||(b.buffer=[]);c||(g=s,c=d);c.h||(c.h=Module.print);c.buffer||(c.buffer=[]);try{sb("/","tmp",n,n)}catch(l){}var d=sb("/","dev",n,n),w=W(d,"stdin",a),D=W(d,"stdout",q,b);c=W(d,"stderr",q,c);W(d,"tty",a,b);W(d,"null",u(),u());V[1]={path:"/dev/stdin",object:w,position:0,
v:n,f:s,u:s,m:!e,error:s,r:s,F:[]};V[2]={path:"/dev/stdout",object:D,position:0,v:s,f:n,u:s,m:!f,error:s,r:s,F:[]};V[3]={path:"/dev/stderr",object:c,position:0,v:s,f:n,u:s,m:!g,error:s,r:s,F:[]};I[hb>>2]=1;I[S>>2]=2;I[ib>>2]=3;tb("/","dev/shm/tmp",n,n);for(e=V.length;e<Math.max(hb,S,ib)+4;e++)V[e]=q;V[hb]=V[1];V[S]=V[2];V[ib]=V[3];M([M([0,0,0,0,hb,0,0,0,S,0,0,0,ib,0,0,0],"void*",0)],"void*",Fa,jb)}}});Pa.push({l:function(){lb=s}});
Qa.push({l:function(){wb&&(V[2]&&0<V[2].object.c.buffer.length&&V[2].object.c(10),V[3]&&0<V[3].object.c.buffer.length&&V[3].object.c(10))}});Module.FS_createFolder=sb;Module.FS_createPath=tb;Module.FS_createDataFile=vb;
Module.FS_createPreloadedFile=function(a,b,c,d,e,f,g,i){function l(){Jb=document.pointerLockElement===r||document.mozPointerLockElement===r||document.webkitPointerLockElement===r}function w(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}function D(c){function h(c){i||vb(a,b,c,d,e);f&&f();Ya("cp "+B)}var l=s;Module.preloadPlugins.forEach(function(a){!l&&a.canHandle(B)&&(a.handle(c,B,h,function(){g&&
g();Ya("cp "+B)}),l=n)});l||h(c)}Module.preloadPlugins||(Module.preloadPlugins=[]);if(!Qb&&!v){Qb=n;try{new Blob,Z=n}catch(y){Z=s,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Rb="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:!Z?console.log("warning: no BlobBuilder"):q;Sb="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:console.log("warning: cannot create object URLs");Module.preloadPlugins.push({canHandle:function(a){return!Module.U&&
/\.(jpg|jpeg|png|bmp)$/.exec(a)},handle:function(a,b,c,d){var e=q;if(Z)try{e=new Blob([a],{type:w(b)})}catch(f){var g="Blob constructor present but fails: "+f+"; falling back to blob builder";la||(la={});la[g]||(la[g]=1,Module.g(g))}e||(e=new Rb,e.append((new Uint8Array(a)).buffer),e=e.getBlob());var i=Sb.createObjectURL(e),h=new Image;h.onload=function(){A(h.complete,"Image "+b+" could not be decoded");var d=document.createElement("canvas");d.width=h.width;d.height=h.height;d.getContext("2d").drawImage(h,
0,0);Module.preloadedImages[b]=d;Sb.revokeObjectURL(i);c&&c(a)};h.onerror=function(){console.log("Image "+i+" could not be decoded");d&&d()};h.src=i}});Module.preloadPlugins.push({canHandle:function(a){return!Module.T&&a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,c,d){function e(d){f||(f=n,Module.preloadedAudios[b]=d,c&&c(a))}function g(){f||(f=n,Module.preloadedAudios[b]=new Audio,d&&d())}var f=s;if(Z){try{var i=new Blob([a],{type:w(b)})}catch(h){return g()}var i=Sb.createObjectURL(i),
l=new Audio;l.addEventListener("canplaythrough",function(){e(l)},s);l.onerror=function(){if(!f){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var c="",d=0,g=0,i=0;i<a.length;i++){d=d<<8|a[i];for(g+=8;6<=g;)var h=d>>g-6&63,g=g-6,c=c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h]}2==g?(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&3)<<4],c+="=="):4==g&&(c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d&
15)<<2],c+="=");l.src="data:audio/x-"+b.substr(-3)+";base64,"+c;e(l)}};l.src=i;setTimeout(function(){ta||e(l)},1E4)}else return g()}});var r=Module.canvas;r.o=r.requestPointerLock||r.mozRequestPointerLock||r.webkitRequestPointerLock;r.s=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||u();r.s=r.s.bind(document);document.addEventListener("pointerlockchange",l,s);document.addEventListener("mozpointerlockchange",l,s);document.addEventListener("webkitpointerlockchange",
l,s);Module.elementPointerLock&&r.addEventListener("click",function(a){!Jb&&r.o&&(r.o(),a.preventDefault())},s)}for(var B,K=[a,b],m=K[0],p=1;p<K.length;p++)"/"!=m[m.length-1]&&(m+="/"),m+=K[p];"/"==m[0]&&(m=m.substr(1));B=m;Xa("cp "+B);if("string"==typeof c){var h=g,H=function(){h?h():j('Loading data file "'+c+'" failed.')},N=new XMLHttpRequest;N.open("GET",c,n);N.responseType="arraybuffer";N.onload=function(){if(200==N.status||0==N.status&&N.response){var a=N.response;A(a,'Loading data file "'+c+
'" failed (no arrayBuffer).');a=new Uint8Array(a);D(a);Ya("al "+c)}else H()};N.onerror=H;N.send(q);Xa("al "+c)}else D(c)};
Module.FS_createLazyFile=function(a,b,c,d,e){if("undefined"!==typeof XMLHttpRequest){v||j("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var f=function(){this.n=s;this.e=[]};f.prototype.get=function(a){if(!(a>this.length-1||0>a)){var c=a%this.I;return this.J(Math.floor(a/this.I))[c]}};f.prototype.O=function(a){this.J=a};f.prototype.p=function(){var a=new XMLHttpRequest;a.open("HEAD",c,s);a.send(q);200<=a.status&&300>a.status||
304===a.status||j(Error("Couldn't load "+c+". Status: "+a.status));var b=Number(a.getResponseHeader("Content-length")),d,e=1048576;if(!((d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===d))e=b;var f=this;f.O(function(a){var d=a*e,g=(a+1)*e-1,g=Math.min(g,b-1);if("undefined"===typeof f.e[a]){var l=f.e;d>g&&j(Error("invalid range ("+d+", "+g+") or no bytes requested!"));g>b-1&&j(Error("only "+b+" bytes available! programmer error!"));var m=new XMLHttpRequest;m.open("GET",c,s);b!==e&&m.setRequestHeader("Range",
"bytes="+d+"-"+g);"undefined"!=typeof Uint8Array&&(m.responseType="arraybuffer");m.overrideMimeType&&m.overrideMimeType("text/plain; charset=x-user-defined");m.send(q);200<=m.status&&300>m.status||304===m.status||j(Error("Couldn't load "+c+". Status: "+m.status));d=m.response!==k?new Uint8Array(m.response||[]):Q(m.responseText||"",n);l[a]=d}"undefined"===typeof f.e[a]&&j(Error("doXHR failed!"));return f.e[a]});this.H=b;this.G=e;this.n=n};f=new f;Object.defineProperty(f,"length",{get:function(){this.n||
this.p();return this.H}});Object.defineProperty(f,"chunkSize",{get:function(){this.n||this.p();return this.G}});f={b:s,a:f}}else f={b:s,url:c};return ub(a,b,f,d,e)};Module.FS_createLink=function(a,b,c,d,e){return ub(a,b,{b:s,link:c},d,e)};Module.FS_createDevice=W;gb=oa(4);I[gb>>2]=0;X.D=M([0],"i8",L);
Module.requestFullScreen=function(a,b){function c(){Ib=s;(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===d?(d.q=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,d.q=d.q.bind(document),Lb&&d.o(),Ib=n,Y&&Ob()):Y&&Pb();if(Module.onFullScreen)Module.onFullScreen(Ib)}Lb=a;Y=b;"undefined"===typeof Lb&&(Lb=n);"undefined"===typeof Y&&
(Y=s);var d=Module.canvas;Kb||(Kb=n,document.addEventListener("fullscreenchange",c,s),document.addEventListener("mozfullscreenchange",c,s),document.addEventListener("webkitfullscreenchange",c,s));d.N=d.requestFullScreen||d.mozRequestFullScreen||(d.webkitRequestFullScreen?function(){d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:q);d.N()};
Module.requestAnimationFrame=function(a){window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout);window.requestAnimationFrame(a)};Module.pauseMainLoop=u();Module.resumeMainLoop=function(){Hb&&(Hb=s,q())};Module.getUserMedia=function(){window.t||(window.t=navigator.getUserMedia||navigator.mozGetUserMedia);window.t(k)};
Ka=x=ra(C);La=Ka+5242880;Ma=E=ra(La);A(Ma<qa);var Tb=Math.min;
var $=(function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env._stdout|0;var n=+env.NaN;var o=+env.Infinity;var p=0;var q=0;var r=0;var s=0;var t=0,u=0,v=0,w=0,x=0.0,y=0,z=0,A=0,B=0.0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=global.Math.floor;var N=global.Math.abs;var O=global.Math.sqrt;var P=global.Math.pow;var Q=global.Math.cos;var R=global.Math.sin;var S=global.Math.tan;var T=global.Math.acos;var U=global.Math.asin;var V=global.Math.atan;var W=global.Math.atan2;var X=global.Math.exp;var Y=global.Math.log;var Z=global.Math.ceil;var _=global.Math.imul;var $=env.abort;var aa=env.assert;var ab=env.asmPrintInt;var ac=env.asmPrintFloat;var ad=env.min;var ae=env.invoke_ii;var af=env.invoke_v;var ag=env.invoke_iii;var ah=env.invoke_vi;var ai=env._usleep;var aj=env._fputc;var ak=env._malloc;var al=env._pwrite;var am=env._putchar;var an=env.___setErrNo;var ao=env._fwrite;var ap=env.__reallyNegative;var aq=env.__formatString;var ar=env._send;var as=env._write;var at=env._llvm_lifetime_start;var au=env._fprintf;var av=env._free;var aw=env._llvm_lifetime_end;var ax=env._printf;var ay=env._fflush;
// EMSCRIPTEN_START_FUNCS
function aD(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7>>3<<3;return b|0}function aE(){return i|0}function aF(a){a=a|0;i=a}function aG(a,b){a=a|0;b=b|0;if((p|0)==0){p=a;q=b}}function aH(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function aI(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function aJ(a){a=a|0;C=a}function aK(a){a=a|0;D=a}function aL(a){a=a|0;E=a}function aM(a){a=a|0;F=a}function aN(a){a=a|0;G=a}function aO(a){a=a|0;H=a}function aP(a){a=a|0;I=a}function aQ(a){a=a|0;J=a}function aR(a){a=a|0;K=a}function aS(a){a=a|0;L=a}function aT(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;do{am(45)|0;a=a+1|0;}while((a|0)<32);am(10)|0;a=0;while(1){e=a<<5;f=0;do{ax(((c[d+(f+e<<2)>>2]|0)!=0?56:48)|0,(t=i,i=i+1|0,i=i+7>>3<<3,c[t>>2]=0,t)|0)|0;f=f+1|0;}while((f|0)<32);am(10)|0;f=a+1|0;if((f|0)<32){a=f}else{g=0;break}}do{am(45)|0;g=g+1|0;}while((g|0)<32);am(10)|0;ay(c[m>>2]|0)|0;i=b;return}function aU(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;b=i;d=a;e=i;i=i+4096|0;f=0;while(1){g=f-1|0;h=f+1|0;j=f<<5;k=0;while(1){l=k-1|0;m=k+1|0;n=0;o=g;while(1){p=((o+32|0)%32&-1)<<5;q=n;r=l;do{q=((c[d+(p+((r+32|0)%32&-1)<<2)>>2]|0)!=0&1)+q|0;r=r+1|0;}while((r|0)<=(m|0));r=o+1|0;if((r|0)>(h|0)){break}else{n=q;o=r}}o=k+j|0;n=(c[d+(o<<2)>>2]|0)!=0;l=(n<<31>>31)+q|0;if((l|0)==3){s=1}else{s=(l|0)==2?n&1:0}c[e+(o<<2)>>2]=s;if((m|0)<32){k=m}else{break}}if((h|0)<32){f=h}else{t=0;break}}do{f=e+(t<<5<<2)|0;s=a+(t<<7)|0;aX(s|0,f|0,128)|0;t=t+1|0;}while((t|0)<32);i=b;return}function aV(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=i;i=i+4096|0;f=e|0;do{if((b|0)>1){g=a[c[d+4>>2]|0]|0;h=g-48|0;if((g|0)==50){j=13e3;k=h;break}else if((g|0)==51){l=24;break}else if((g|0)==52){j=12e4;k=h;break}else if((g|0)==53){j=24e4;k=h;break}else if((g|0)==49){j=2500;k=1;break}else if((g|0)==48){m=0;i=e;return m|0}else{ax(32,(t=i,i=i+8|0,c[t>>2]=h,t)|0)|0;m=-1;i=e;return m|0}}else{l=24}}while(0);if((l|0)==24){j=24e3;k=3}ax(8,(t=i,i=i+32|0,c[t>>2]=k,c[t+8>>2]=32,c[t+16>>2]=32,c[t+24>>2]=j,t)|0)|0;k=f;d=0;b=0;while(1){h=b*17&-1;g=d;n=0;do{g=((h|0)%((n*3&-1)+1|0)&-1)+g|0;c[f+((n<<5)+b<<2)>>2]=g&1;n=n+1|0;}while((n|0)<32);n=b+1|0;if((n|0)<32){d=g;b=n}else{o=j;break}}do{if((o|0)<=0){l=40;break}aU(k);o=o-1|0;j=0;b=0;while(1){d=0;p=b;do{p=(c[f+((d<<5)+j<<2)>>2]|0)+p|0;d=d+1|0;}while((d|0)<32);d=j+1|0;if((d|0)<32){j=d;b=p}else{break}}if((p|0)<128){b=p;do{c[f+(((_(b,b)|0)<<5&992|b&31)<<2)>>2]=1;b=b+1|0;}while((b|0)<128)}}while((o|0)!=0);if((l|0)==40){while(1){l=0;aU(k);ai(2e4)|0;aT(k);l=40}}aT(k);m=0;i=e;return m|0}function aW(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function aX(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function aY(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=b+e|0;if((e|0)>=20){d=d&255;e=b&3;g=d|d<<8|d<<16|d<<24;h=f&~3;if(e){e=b+4-e|0;while((b|0)<(e|0)){a[b]=d;b=b+1|0}}while((b|0)<(h|0)){c[b>>2]=g;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}}function aZ(a,b){a=a|0;b=b|0;return az[a&1](b|0)|0}function a_(a){a=a|0;aA[a&1]()}function a$(a,b,c){a=a|0;b=b|0;c=c|0;return aB[a&1](b|0,c|0)|0}function a0(a,b){a=a|0;b=b|0;aC[a&1](b|0)}function a1(a){a=a|0;$(0);return 0}function a2(){$(1)}function a3(a,b){a=a|0;b=b|0;$(2);return 0}function a4(a){a=a|0;$(3)}
// EMSCRIPTEN_END_FUNCS
var az=[a1,a1];var aA=[a2,a2];var aB=[a3,a3];var aC=[a4,a4];return{_strlen:aW,_memcpy:aX,_main:aV,_memset:aY,stackAlloc:aD,stackSave:aE,stackRestore:aF,setThrew:aG,setTempRet0:aJ,setTempRet1:aK,setTempRet2:aL,setTempRet3:aM,setTempRet4:aN,setTempRet5:aO,setTempRet6:aP,setTempRet7:aQ,setTempRet8:aR,setTempRet9:aS,dynCall_ii:aZ,dynCall_v:a_,dynCall_iii:a$,dynCall_vi:a0}
// EMSCRIPTEN_END_ASM
})({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:F,assert:A,asmPrintInt:function(a,b){Module.print("int "+a+","+b)},asmPrintFloat:function(a,b){Module.print("float "+a+","+b)},min:Tb,invoke_ii:function(a,b){try{return Module.dynCall_ii(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&j(c),$.setThrew(1,0)}},
invoke_v:function(a){try{Module.dynCall_v(a)}catch(b){"number"!==typeof b&&"longjmp"!==b&&j(b),$.setThrew(1,0)}},invoke_iii:function(a,b,c){try{return Module.dynCall_iii(a,b,c)}catch(d){"number"!==typeof d&&"longjmp"!==d&&j(d),$.setThrew(1,0)}},invoke_vi:function(a,b){try{Module.dynCall_vi(a,b)}catch(c){"number"!==typeof c&&"longjmp"!==c&&j(c),$.setThrew(1,0)}},_usleep:function(a){for(var a=a/1E3,b=Date.now();Date.now()-b<a;);return 0},_fputc:X,_malloc:Ga,_pwrite:yb,_putchar:function(a){return X(a,
I[S>>2])},___setErrNo:U,_fwrite:Ab,__reallyNegative:Cb,__formatString:Db,_send:xb,_write:zb,_llvm_lifetime_start:u(),_fprintf:Eb,_free:u(),_llvm_lifetime_end:u(),_printf:function(a,b){return Eb(I[S>>2],a,b)},_fflush:function(a){function b(a){V[a]&&V[a].object.c&&(V[a].m||V[a].object.c(q))}try{if(0===a)for(a=0;a<V.length;a++)V[a]&&b(a);else b(a);return 0}catch(c){return U(bb),-1}},STACKTOP:x,STACK_MAX:La,tempDoublePtr:ab,ABORT:ta,NaN:NaN,Infinity:Infinity,_stdout:S},P),Bb=Module._strlen=$._strlen,
Fb=Module._memcpy=$._memcpy;Module._main=$._main;var Gb=Module._memset=$._memset;Module.dynCall_ii=$.dynCall_ii;Module.dynCall_v=$.dynCall_v;Module.dynCall_iii=$.dynCall_iii;Module.dynCall_vi=$.dynCall_vi;na=function(a){return $.stackAlloc(a)};ha=function(){return $.stackSave()};ia=function(a){$.stackRestore(a)};
Module.callMain=function(a){function b(){for(var a=0;3>a;a++)d.push(0)}A(0==R,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");A(!Module.preRun||0==Module.preRun.length,"cannot call main when preRun functions remain to be called");a=a||[];Ra||(Ra=n,Na(Oa));var c=a.length+1,d=[M(Q("/bin/this.program"),"i8",0)];b();for(var e=0;e<c-1;e+=1)d.push(M(Q(a[e]),"i8",0)),b();d.push(0);var d=M(d,"i32",0),f,a=x;try{f=Module._main(c,d,0)}catch(g){if("ExitStatus"==g.name)return g.status;
"SimulateInfiniteLoop"==g?Module.noExitRuntime=n:j(g)}finally{x=a}return f};
function $a(a){function b(){Ra||(Ra=n,Na(Oa));Na(Pa);var b=0;Va=n;Module._main&&Za&&(b=Module.callMain(a),Module.noExitRuntime||Na(Qa));if(Module.postRun)for("function"==typeof Module.postRun&&(Module.postRun=[Module.postRun]);0<Module.postRun.length;)Module.postRun.pop()();return b}a=a||Module.arguments;if(0<R)return Module.g("run() called, but dependencies remain, so not running"),0;if(Module.preRun){"function"==typeof Module.preRun&&(Module.preRun=[Module.preRun]);var c=Module.preRun;Module.preRun=
[];for(var d=c.length-1;0<=d;d--)c[d]();if(0<R)return 0}return Module.setStatus?(Module.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Module.setStatus("")},1);ta||b()},1),0):b()}Module.run=Module.V=$a;if(Module.preInit)for("function"==typeof Module.preInit&&(Module.preInit=[Module.preInit]);0<Module.preInit.length;)Module.preInit.pop()();var Za=n;Module.noInitialRun&&(Za=s);$a([].concat(Module.arguments));
