System.register(["./p-ebdd230c.system.js"],(function(t){"use strict";var e,r,n,u,o;return{setters:[function(t){e=t.r;r=t.c;n=t.h;u=t.H;o=t.g}],execute:function(){var i=typeof global=="object"&&global&&global.Object===Object&&global;var a=typeof self=="object"&&self&&self.Object===Object&&self;var c=i||a||Function("return this")();var f=c.Symbol;var l=Object.prototype;var v=l.hasOwnProperty;var b=l.toString;var p=f?f.toStringTag:undefined;function s(t){var e=v.call(t,p),r=t[p];try{t[p]=undefined;var n=true}catch(o){}var u=b.call(t);if(n){if(e){t[p]=r}else{delete t[p]}}return u}var y=Object.prototype;var d=y.toString;function j(t){return d.call(t)}var g="[object Null]",h="[object Undefined]";var m=f?f.toStringTag:undefined;function O(t){if(t==null){return t===undefined?h:g}return m&&m in Object(t)?s(t):j(t)}function A(t){return t!=null&&typeof t=="object"}var T="[object Symbol]";function x(t){return typeof t=="symbol"||A(t)&&O(t)==T}var w=Array.isArray;function S(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var E=0/0;var F=/^\s+|\s+$/g;var P=/^[-+]0x[0-9a-f]+$/i;var I=/^0b[01]+$/i;var C=/^0o[0-7]+$/i;var L=parseInt;function U(t){if(typeof t=="number"){return t}if(x(t)){return E}if(S(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=S(e)?e+"":e}if(typeof t!="string"){return t===0?t:+t}t=t.replace(F,"");var r=I.test(t);return r||C.test(t)?L(t.slice(2),r?2:8):P.test(t)?E:+t}function $(t){return t}var B="[object AsyncFunction]",D="[object Function]",H="[object GeneratorFunction]",M="[object Proxy]";function R(t){if(!S(t)){return false}var e=O(t);return e==D||e==H||e==B||e==M}var W=9007199254740991;var _=/^(?:0|[1-9]\d*)$/;function k(t,e){var r=typeof t;e=e==null?W:e;return!!e&&(r=="number"||r!="symbol"&&_.test(t))&&(t>-1&&t%1==0&&t<e)}var q=9007199254740991;function N(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=q}function G(t){return t!=null&&N(t.length)&&!R(t)}var V=Object.prototype;function X(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||V;return t===r}function Y(t,e){var r=-1,n=Array(t);while(++r<t){n[r]=e(r)}return n}var z="[object Arguments]";function J(t){return A(t)&&O(t)==z}var K=Object.prototype;var Q=K.hasOwnProperty;var Z=K.propertyIsEnumerable;var tt=J(function(){return arguments}())?J:function(t){return A(t)&&Q.call(t,"callee")&&!Z.call(t,"callee")};function et(){return false}var rt=typeof t=="object"&&t&&!t.nodeType&&t;var nt=rt&&typeof module=="object"&&module&&!module.nodeType&&module;var ut=nt&&nt.exports===rt;var ot=ut?c.Buffer:undefined;var it=ot?ot.isBuffer:undefined;var at=it||et;var ct="[object Arguments]",ft="[object Array]",lt="[object Boolean]",vt="[object Date]",bt="[object Error]",pt="[object Function]",st="[object Map]",yt="[object Number]",dt="[object Object]",jt="[object RegExp]",gt="[object Set]",ht="[object String]",mt="[object WeakMap]";var Ot="[object ArrayBuffer]",At="[object DataView]",Tt="[object Float32Array]",xt="[object Float64Array]",wt="[object Int8Array]",St="[object Int16Array]",Et="[object Int32Array]",Ft="[object Uint8Array]",Pt="[object Uint8ClampedArray]",It="[object Uint16Array]",Ct="[object Uint32Array]";var Lt={};Lt[Tt]=Lt[xt]=Lt[wt]=Lt[St]=Lt[Et]=Lt[Ft]=Lt[Pt]=Lt[It]=Lt[Ct]=true;Lt[ct]=Lt[ft]=Lt[Ot]=Lt[lt]=Lt[At]=Lt[vt]=Lt[bt]=Lt[pt]=Lt[st]=Lt[yt]=Lt[dt]=Lt[jt]=Lt[gt]=Lt[ht]=Lt[mt]=false;function Ut(t){return A(t)&&N(t.length)&&!!Lt[O(t)]}function $t(t){return function(e){return t(e)}}var Bt=typeof t=="object"&&t&&!t.nodeType&&t;var Dt=Bt&&typeof module=="object"&&module&&!module.nodeType&&module;var Ht=Dt&&Dt.exports===Bt;var Mt=Ht&&i.process;var Rt=function(){try{var t=Dt&&Dt.require&&Dt.require("util").types;if(t){return t}return Mt&&Mt.binding&&Mt.binding("util")}catch(e){}}();var Wt=Rt&&Rt.isTypedArray;var _t=Wt?$t(Wt):Ut;var kt=Object.prototype;var qt=kt.hasOwnProperty;function Nt(t,e){var r=w(t),n=!r&&tt(t),u=!r&&!n&&at(t),o=!r&&!n&&!u&&_t(t),i=r||n||u||o,a=i?Y(t.length,String):[],c=a.length;for(var f in t){if((e||qt.call(t,f))&&!(i&&(f=="length"||u&&(f=="offset"||f=="parent")||o&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||k(f,c)))){a.push(f)}}return a}function Gt(t){var e=[];if(t!=null){for(var r in Object(t)){e.push(r)}}return e}var Vt=Object.prototype;var Xt=Vt.hasOwnProperty;function Yt(t){if(!S(t)){return Gt(t)}var e=X(t),r=[];for(var n in t){if(!(n=="constructor"&&(e||!Xt.call(t,n)))){r.push(n)}}return r}function zt(t){return G(t)?Nt(t,true):Yt(t)}function Jt(t){return function(e,r,n){var u=-1,o=Object(e),i=n(e),a=i.length;while(a--){var c=i[t?a:++u];if(r(o[c],c,o)===false){break}}return e}}var Kt=Jt();var Qt=function(){return c.Date.now()};var Zt="Expected a function";var te=Math.max,ee=Math.min;function re(t,e,r){var n,u,o,i,a,c,f=0,l=false,v=false,b=true;if(typeof t!="function"){throw new TypeError(Zt)}e=U(e)||0;if(S(r)){l=!!r.leading;v="maxWait"in r;o=v?te(U(r.maxWait)||0,e):o;b="trailing"in r?!!r.trailing:b}function p(e){var r=n,o=u;n=u=undefined;f=e;i=t.apply(o,r);return i}function s(t){f=t;a=setTimeout(j,e);return l?p(t):i}function y(t){var r=t-c,n=t-f,u=e-r;return v?ee(u,o-n):u}function d(t){var r=t-c,n=t-f;return c===undefined||r>=e||r<0||v&&n>=o}function j(){var t=Qt();if(d(t)){return g(t)}a=setTimeout(j,y(t))}function g(t){a=undefined;if(b&&n){return p(t)}n=u=undefined;return i}function h(){if(a!==undefined){clearTimeout(a)}f=0;n=c=u=a=undefined}function m(){return a===undefined?i:g(Qt())}function O(){var t=Qt(),r=d(t);n=arguments;u=this;c=t;if(r){if(a===undefined){return s(c)}if(v){clearTimeout(a);a=setTimeout(j,e);return p(c)}}if(a===undefined){a=setTimeout(j,e)}return i}O.cancel=h;O.flush=m;return O}function ne(t){return typeof t=="function"?t:$}function ue(t,e){return t==null?t:Kt(t,ne(e),zt)}var oe=250;var ie=t("calcite_filter",function(){function t(t){var n=this;e(this,t);this.filter=re((function(t){var e=new RegExp(t,"ig");var r=function(t,e){var n=false;ue(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(r(t,e)){n=true}}else if(e.test(t)){n=true}}));return n};var u=n.data.filter((function(t){return r(t,e)}));n.calciteFilterChange.emit(u)}),oe);this.inputHandler=function(t){var e=t.target;n.filter(e.value)};this.calciteFilterChange=r(this,"calciteFilterChange",7)}t.prototype.render=function(){return n(u,null,n("label",null,this.textLabel,n("input",{type:"text",placeholder:this.textPlaceholder,onInput:this.inputHandler})))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}}));