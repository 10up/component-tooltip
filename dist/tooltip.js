!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=40)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(18)("wks"),o=e(8),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(4),o=e(16);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(14),o=e(29),i=e(19),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(32),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),o=e(2),i=e(3),u=e(8)("src"),c=Function.toString,f=(""+c).split("toString");e(12).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,e){var r=e(31),o=e(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=!1},function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(0),o=e(12),i=e(2),u=e(10),c=e(43),f=function(t,n,e){var a,s,l,p,y=t&f.F,v=t&f.G,d=t&f.S,b=t&f.P,h=t&f.B,g=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),S=m.prototype||(m.prototype={});for(a in v&&(e=n),e)l=((s=!y&&g&&void 0!==g[a])?g:e)[a],p=h&&s?c(l,r):b&&"function"==typeof l?c(Function.call,l):l,g&&u(g,a,l,t&f.U),m[a]!=l&&i(m,a,p),b&&S[a]!=l&&(S[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(12),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(13)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(18)("keys"),o=e(8);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){t.exports={}},function(t,n,e){(function(n){var e="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,p=s||l||Function("return this")(),y=Object.prototype.toString,v=Math.max,d=Math.min,b=function(){return p.Date.now()};function h(t,n,r){var o,i,u,c,f,a,s=0,l=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError(e);function h(n){var e=o,r=i;return o=i=void 0,s=n,c=t.apply(r,e)}function S(t){var e=t-a;return void 0===a||e>=n||e<0||p&&t-s>=u}function x(){var t=b();if(S(t))return O(t);f=setTimeout(x,function(t){var e=n-(t-a);return p?d(e,u-(t-s)):e}(t))}function O(t){return f=void 0,y&&o?h(t):(o=i=void 0,c)}function j(){var t=b(),e=S(t);if(o=arguments,i=this,a=t,e){if(void 0===f)return function(t){return s=t,f=setTimeout(x,n),l?h(t):c}(a);if(p)return f=setTimeout(x,n),h(a)}return void 0===f&&(f=setTimeout(x,n)),c}return n=m(n)||0,g(r)&&(l=!!r.leading,u=(p="maxWait"in r)?v(m(r.maxWait)||0,n):u,y="trailing"in r?!!r.trailing:y),j.cancel=function(){void 0!==f&&clearTimeout(f),s=0,o=a=i=f=void 0},j.flush=function(){return void 0===f?c:O(b())},j}function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&y.call(t)==o}(t))return r;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=c.test(t);return e||f.test(t)?a(t.slice(2),e?2:8):u.test(t)?r:+t}t.exports=function(t,n,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(e);return g(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),h(t,n,{leading:o,maxWait:n,trailing:i})}}).call(this,e(65))},function(t,n,e){var r=e(0),o=e(12),i=e(13),u=e(28),c=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(1)},function(t,n,e){t.exports=!e(5)&&!e(6)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(9),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(3),o=e(7),i=e(34)(!1),u=e(22)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(7),o=e(47),i=e(48);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(14),o=e(50),i=e(23),u=e(22)("IE_PROTO"),c=function(){},f=function(){var t,n=e(30)("iframe"),r=i.length;for(n.style.display="none",e(51).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(31),o=e(23).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(1)("unscopables"),o=Array.prototype;void 0==o[r]&&e(2)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(68),t.exports=e(66)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){"use strict";var r=e(0),o=e(3),i=e(5),u=e(15),c=e(10),f=e(45).KEY,a=e(6),s=e(18),l=e(20),p=e(8),y=e(1),v=e(28),d=e(27),b=e(46),h=e(49),g=e(14),m=e(9),S=e(7),x=e(19),O=e(16),j=e(36),w=e(52),T=e(53),_=e(4),E=e(11),L=T.f,P=_.f,A=w.f,k=r.Symbol,M=r.JSON,C=M&&M.stringify,F=y("_hidden"),N=y("toPrimitive"),I={}.propertyIsEnumerable,D=s("symbol-registry"),G=s("symbols"),R=s("op-symbols"),q=Object.prototype,W="function"==typeof k,$=r.QObject,V=!$||!$.prototype||!$.prototype.findChild,B=i&&a(function(){return 7!=j(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=L(q,n);r&&delete q[n],P(t,n,e),r&&t!==q&&P(q,n,r)}:P,H=function(t){var n=G[t]=j(k.prototype);return n._k=t,n},U=W&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},J=function(t,n,e){return t===q&&J(R,n,e),g(t),n=x(n,!0),g(e),o(G,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=j(e,{enumerable:O(0,!1)})):(o(t,F)||P(t,F,O(1,{})),t[F][n]=!0),B(t,n,e)):P(t,n,e)},z=function(t,n){g(t);for(var e,r=b(n=S(n)),o=0,i=r.length;i>o;)J(t,e=r[o++],n[e]);return t},K=function(t){var n=I.call(this,t=x(t,!0));return!(this===q&&o(G,t)&&!o(R,t))&&(!(n||!o(this,t)||!o(G,t)||o(this,F)&&this[F][t])||n)},Y=function(t,n){if(t=S(t),n=x(n,!0),t!==q||!o(G,n)||o(R,n)){var e=L(t,n);return!e||!o(G,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=A(S(t)),r=[],i=0;e.length>i;)o(G,n=e[i++])||n==F||n==f||r.push(n);return r},X=function(t){for(var n,e=t===q,r=A(e?R:S(t)),i=[],u=0;r.length>u;)!o(G,n=r[u++])||e&&!o(q,n)||i.push(G[n]);return i};W||(c((k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(R,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),B(this,t,O(1,e))};return i&&V&&B(q,t,{configurable:!0,set:n}),H(t)}).prototype,"toString",function(){return this._k}),T.f=Y,_.f=J,e(37).f=w.f=Q,e(17).f=K,e(24).f=X,i&&!e(13)&&c(q,"propertyIsEnumerable",K,!0),v.f=function(t){return H(y(t))}),u(u.G+u.W+u.F*!W,{Symbol:k});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)y(Z[tt++]);for(var nt=E(y.store),et=0;nt.length>et;)d(nt[et++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=k(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?j(t):z(j(t),n)},defineProperty:J,defineProperties:z,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),M&&u(u.S+u.F*(!W||a(function(){var t=k();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!U(t))return h(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!U(n))return n}),r[1]=n,C.apply(M,r)}}),k.prototype[N]||e(2)(k.prototype,N,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(8)("meta"),o=e(9),i=e(3),u=e(4).f,c=0,f=Object.isExtensible||function(){return!0},a=!e(6)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,r)&&s(t),t}}},function(t,n,e){var r=e(11),o=e(24),i=e(17);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,e){var r=e(35),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(35),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(33);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(4),o=e(14),i=e(11);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),o=e(37).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(17),o=e(16),i=e(7),u=e(19),c=e(3),f=e(29),a=Object.getOwnPropertyDescriptor;n.f=e(5)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){e(55)("replace",2,function(t,n,e){return[function(r,o){"use strict";var i=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)},e]})},function(t,n,e){"use strict";var r=e(2),o=e(10),i=e(6),u=e(21),c=e(1);t.exports=function(t,n,e){var f=c(t),a=e(u,f,""[t]),s=a[0],l=a[1];i(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,s),r(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,e){"use strict";var r=e(15),o=e(34)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(38)("includes")},function(t,n,e){for(var r=e(58),o=e(11),i=e(10),u=e(0),c=e(2),f=e(25),a=e(1),s=a("iterator"),l=a("toStringTag"),p=f.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(y),d=0;d<v.length;d++){var b,h=v[d],g=y[h],m=u[h],S=m&&m.prototype;if(S&&(S[s]||c(S,s,p),S[l]||c(S,l,h),f[h]=p,g))for(b in r)S[b]||i(S,b,r[b],!0)}},function(t,n,e){"use strict";var r=e(38),o=e(59),i=e(25),u=e(7);t.exports=e(60)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(13),o=e(15),i=e(10),u=e(2),c=e(25),f=e(61),a=e(20),s=e(62),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,e,v,d,b,h){f(e,n,v);var g,m,S,x=function(t){if(!p&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",j="values"==d,w=!1,T=t.prototype,_=T[l]||T["@@iterator"]||d&&T[d],E=_||x(d),L=d?j?x("entries"):E:void 0,P="Array"==n&&T.entries||_;if(P&&(S=s(P.call(new t)))!==Object.prototype&&S.next&&(a(S,O,!0),r||"function"==typeof S[l]||u(S,l,y)),j&&_&&"values"!==_.name&&(w=!0,E=function(){return _.call(this)}),r&&!h||!p&&!w&&T[l]||u(T,l,E),c[n]=E,c[O]=y,d)if(g={values:j?E:x("values"),keys:b?E:x("keys"),entries:L},h)for(m in g)m in T||i(T,m,g[m]);else o(o.P+o.F*(p||w),n,g);return g}},function(t,n,e){"use strict";var r=e(36),o=e(16),i=e(20),u={};e(2)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(3),o=e(39),i=e(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(15);r(r.S+r.F,"Object",{assign:e(64)})},function(t,n,e){"use strict";var r=e(11),o=e(24),i=e(17),u=e(39),c=e(32),f=Object.assign;t.exports=!f||e(6)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=u(t),f=arguments.length,a=1,s=o.f,l=i.f;f>a;)for(var p,y=c(arguments[a++]),v=s?r(y).concat(s(y)):r(y),d=v.length,b=0;d>b;)l.call(y,p=v[b++])&&(e[p]=y[p]);return e}:f},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){},,function(t,n,e){"use strict";e.r(n);e(41),e(42),e(54),e(56),e(57),e(63);var r=e(26),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var o={onCreate:null,onOpen:null,onClose:null};this.$tooltips=document.querySelectorAll(n),n||0!==this.$tooltips.length?(document.documentElement.classList.add("js"),this.settings=Object.assign({},o,r),this.boundCloseTT=function(t){return e.closeTooltip(t)},this.boundOpenTT=function(t){return e.openTooltip(t)},this.manageBoundTrigger=function(t){return e.manageTrigger(t)},this.$tooltips.forEach(function(t){e.setupTooltip(t)}),this.settings=Object.assign({},o,r),this.settings.onCreate&&"function"==typeof this.settings.onCreate&&this.settings.onCreate.call()):console.error("10up Tooltip: Target not found. A valid target (tooltip container) must be used.")}return function(t,n,e){n&&i(t.prototype,n),e&&i(t,e)}(t,[{key:"setupTooltip",value:function(t){var n,e,r,i=".a11y-tip__trigger",u=t,c=u.querySelector(i),f=u.querySelector(".a11y-tip__help");["a","button","input","textarea","select"].includes(c.nodeName.toLowerCase())||c.setAttribute("tabindex","0"),f.getAttribute("id")||f.setAttribute("id","tool_tip_1"),c.getAttribute("aria-describedby")||c.setAttribute("aria-describedby",f.getAttribute("id")),f.getAttribute("role")||f.setAttribute("role","tooltip"),u.classList.contains("a11y-tip--toggle")&&(e=(e=u.querySelector(i).innerHTML).replace(/^\s+|\s+$/g,""),r=u.querySelector(".a11y-tip__help").getAttribute("id"),(n=document.createElement("button")).setAttribute("type","button"),n.classList.add("a11y-tip__trigger"),n.classList.add("a11y-tip__trigger--toggle"),n.setAttribute("aria-describedby",r),n.setAttribute("aria-expanded","false"),n.textContent=e,u.removeChild(u.querySelector(i)),u.insertBefore(n,u.firstChild),n.addEventListener("click",this.manageBoundTrigger)),!1===u.classList.contains("a11y-tip--toggle")&&(t.addEventListener("mouseover",o()(this.boundOpenTT,2e3)),t.addEventListener("mouseleave",o()(this.boundCloseTT,2e3))),c.addEventListener("keyup",this.boundOpenTT)}},{key:"openTooltip",value:function(t){var n=t.target;if(n.classList.contains("a11y-tip--hide")&&n.classList.remove("a11y-tip--hide"),27==t.keyCode)return t.preventDefault(),n.classList.add("a11y-tip--hide"),!1;this.settings.onOpen.call()}},{key:"closeTooltip",value:function(){this.settings.onClose.call()}},{key:"manageTrigger",value:function(t){var n=t.target;"true"===n.getAttribute("aria-expanded")?(n.setAttribute("aria-expanded","false"),this.settings.onClose.call()):"false"===n.getAttribute("aria-expanded")&&(n.setAttribute("aria-expanded","true"),this.settings.onOpen.call())}}]),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"object"!==c(window.TenUp)&&(window.TenUp={}),window.TenUp.tooltip=u}]);
//# sourceMappingURL=tooltip.js.map