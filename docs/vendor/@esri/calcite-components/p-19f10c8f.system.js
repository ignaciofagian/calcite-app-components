System.register(["./p-4af00110.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.g}],execute:function(){e({c:et,u:tt});function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function n(e){if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView:window}return e}function a(e){var t=n(e);var r=t.pageXOffset;var a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function o(e){var t=n(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=n(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function f(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function s(e){if(e===n(e)||!i(e)){return a(e)}else{return f(e)}}function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return(o(e)?e.ownerDocument:e.document).documentElement}function p(e){return r(u(e)).left+a(e).scrollLeft}function v(e,t,n){if(n===void 0){n=false}var a;var o=r(e);var f={scrollLeft:0,scrollTop:0};var v={x:0,y:0};if(!n){if(c(t)!=="body"){f=s(t)}if(i(t)){v=r(t);v.x+=t.clientLeft;v.y+=t.clientTop}else if(a=u(t)){v.x=p(a)}}return{x:o.left+f.scrollLeft-v.x,y:o.top+f.scrollTop-v.y,width:o.width,height:o.height}}function l(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function d(e){if(c(e)==="html"){return e}return(e.assignedSlot||e.parentNode||e.host||u(e))}function m(e){return n(e).getComputedStyle(e)}function h(e){if(["html","body","#document"].indexOf(c(e))>=0){return e.ownerDocument.body}if(i(e)){var t=m(e),r=t.overflow,n=t.overflowX,a=t.overflowY;if(/auto|scroll|overlay|hidden/.test(r+a+n)){return e}}return h(d(e))}function g(e,t){if(t===void 0){t=[]}var r=h(e);var a=c(r)==="body";var o=n(r);var i=a?[o].concat(o.visualViewport||[]):r;var f=t.concat(i);return a?f:f.concat(g(d(i)))}function b(e){return["table","td","th"].indexOf(c(e))>=0}function y(e){if(!i(e)||m(e).position==="fixed"){return null}return e.offsetParent}function w(e){var t=n(e);var r=y(e);while(r&&b(r)){r=y(r)}if(r&&c(r)==="body"&&m(r).position==="static"){return t}return r||t}var x="top";var O="bottom";var j="right";var M="left";var E="auto";var D=[x,O,j,M];var k="start";var P="end";var L="clippingParents";var B="viewport";var W="popper";var H="reference";var T=D.reduce((function(e,t){return e.concat([t+"-"+k,t+"-"+P])}),[]);var A=[].concat(D,[E]).reduce((function(e,t){return e.concat([t,t+"-"+k,t+"-"+P])}),[]);var R="beforeRead";var q="read";var S="afterRead";var C="beforeMain";var N="main";var V="afterMain";var I="beforeWrite";var U="write";var z="afterWrite";var F=[R,q,S,C,N,V,I,U,z];function _(e){var t=new Map;var r=new Set;var n=[];e.forEach((function(e){t.set(e.name,e)}));function a(e){r.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!r.has(e)){var n=t.get(e);if(n){a(n)}}}));n.push(e)}e.forEach((function(e){if(!r.has(e.name)){a(e)}}));return n}function X(e){var t=_(e);return F.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}function Y(e){var t;return function(){if(!t){t=new Promise((function(r){Promise.resolve().then((function(){t=undefined;r(e())}))}))}return t}}function G(e){return e.split("-")[0]}function J(e){var t=e.reduce((function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,{},t,{options:Object.assign({},r.options,{},t.options),data:Object.assign({},r.data,{},t.data)}):t;return e}),{});return Object.keys(t).map((function(e){return t[e]}))}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some((function(e){return!(e&&typeof e.getBoundingClientRect==="function")}))}function Z(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,i=a===void 0?K:a;return function e(t,r,a){if(a===void 0){a=i}var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,{},i),modifiersData:{},elements:{reference:t,popper:r},attributes:{},styles:{}};var s=[];var c=false;var u={state:f,setOptions:function e(a){d();f.options=Object.assign({},i,{},f.options,{},a);f.scrollParents={reference:o(t)?g(t):t.contextElement?g(t.contextElement):[],popper:g(r)};var s=X(J([].concat(n,f.options.modifiers)));f.orderedModifiers=s.filter((function(e){return e.enabled}));p();return u.update()},forceUpdate:function e(){if(c){return}var t=f.elements,r=t.reference,n=t.popper;if(!Q(r,n)){return}f.rects={reference:v(r,w(n),f.options.strategy==="fixed"),popper:l(n)};f.reset=false;f.placement=f.options.placement;f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var a=0;a<f.orderedModifiers.length;a++){if(f.reset===true){f.reset=false;a=-1;continue}var o=f.orderedModifiers[a],i=o.fn,s=o.options,p=s===void 0?{}:s,d=o.name;if(typeof i==="function"){f=i({state:f,options:p,name:d,instance:u})||f}}},update:Y((function(){return new Promise((function(e){u.forceUpdate();e(f)}))})),destroy:function e(){d();c=true}};if(!Q(t,r)){return u}u.setOptions(a).then((function(e){if(!c&&a.onFirstUpdate){a.onFirstUpdate(e)}}));function p(){f.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,a=e.effect;if(typeof a==="function"){var o=a({state:f,name:t,instance:u,options:n});var i=function e(){};s.push(o||i)}}))}function d(){s.forEach((function(e){return e()}));s=[]}return u}}var $={passive:true};function ee(e){var t=e.state,r=e.instance,a=e.options;var o=a.scroll,i=o===void 0?true:o,f=a.resize,s=f===void 0?true:f;var c=n(t.elements.popper);var u=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(i){u.forEach((function(e){e.addEventListener("scroll",r.update,$)}))}if(s){c.addEventListener("resize",r.update,$)}return function(){if(i){u.forEach((function(e){e.removeEventListener("scroll",r.update,$)}))}if(s){c.removeEventListener("resize",r.update,$)}}}var te={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:ee,data:{}};function re(e){return e.split("-")[1]}function ne(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e){var t=e.reference,r=e.element,n=e.placement;var a=n?G(n):null;var o=n?re(n):null;var i=t.x+t.width/2-r.width/2;var f=t.y+t.height/2-r.height/2;var s;switch(a){case x:s={x:i,y:t.y-r.height};break;case O:s={x:i,y:t.y+t.height};break;case j:s={x:t.x+t.width,y:f};break;case M:s={x:t.x-r.width,y:f};break;default:s={x:t.x,y:t.y}}var c=a?ne(a):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case k:s[c]=Math.floor(s[c])-Math.floor(t[u]/2-r[u]/2);break;case P:s[c]=Math.floor(s[c])+Math.ceil(t[u]/2-r[u]/2);break}}return s}function oe(e){var t=e.state,r=e.name;t.modifiersData[r]=ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ie={name:"popperOffsets",enabled:true,phase:"read",fn:oe,data:{}};var fe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function se(e){var t=e.x,r=e.y;var n=window;var a=n.devicePixelRatio||1;return{x:Math.round(t*a)/a||0,y:Math.round(r*a)/a||0}}function ce(e){var t;var r=e.popper,a=e.popperRect,o=e.placement,i=e.offsets,f=e.position,s=e.gpuAcceleration,c=e.adaptive;var p=se(i),v=p.x,l=p.y;var d=i.hasOwnProperty("x");var m=i.hasOwnProperty("y");var h=M;var g=x;var b=window;if(c){var y=w(r);if(y===n(r)){y=u(r)}if(o===x){g=O;l-=y.clientHeight-a.height;l*=s?1:-1}if(o===M){h=j;v-=y.clientWidth-a.width;v*=s?1:-1}}var E=Object.assign({position:f},c&&fe);if(s){var D;return Object.assign({},E,(D={},D[g]=m?"0":"",D[h]=d?"0":"",D.transform=(b.devicePixelRatio||1)<2?"translate("+v+"px, "+l+"px)":"translate3d("+v+"px, "+l+"px, 0)",D))}return Object.assign({},E,(t={},t[g]=m?l+"px":"",t[h]=d?v+"px":"",t.transform="",t))}function ue(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,a=n===void 0?true:n,o=r.adaptive,i=o===void 0?true:o;var f={placement:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,{},ce(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,{},ce(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var pe={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:ue,data:{}};function ve(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var a=t.elements[e];if(!i(a)||!c(a)){return}Object.assign(a.style,r);Object.keys(n).forEach((function(e){var t=n[e];if(t===false){a.removeAttribute(e)}else{a.setAttribute(e,t===true?"":t)}}))}))}function le(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e];var a=t.attributes[e]||{};var o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);var f=o.reduce((function(e,t){e[t]="";return e}),{});if(!i(n)||!c(n)){return}Object.assign(n.style,f);Object.keys(a).forEach((function(e){n.removeAttribute(e)}))}))}}var de={name:"applyStyles",enabled:true,phase:"write",fn:ve,effect:le,requires:["computeStyles"]};function me(e,t,r){var n=G(e);var a=[M,x].indexOf(n)>=0?-1:1;var o=typeof r==="function"?r(Object.assign({},t,{placement:e})):r,i=o[0],f=o[1];i=i||0;f=(f||0)*a;return[M,j].indexOf(n)>=0?{x:f,y:i}:{x:i,y:f}}function he(e){var t=e.state,r=e.options,n=e.name;var a=r.offset,o=a===void 0?[0,0]:a;var i=A.reduce((function(e,r){e[r]=me(r,t.rects,o);return e}),{});var f=i[t.placement],s=f.x,c=f.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=s;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=i}var ge={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:he};var be={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,(function(e){return be[e]}))}var we={start:"end",end:"start"};function xe(e){return e.replace(/start|end/g,(function(e){return we[e]}))}function Oe(e){var t=n(e);var r=t.visualViewport;var a=t.innerWidth;var o=t.innerHeight;if(r&&/iPhone|iPod|iPad/.test(navigator.platform)){a=r.width;o=r.height}return{width:a,height:o,x:0,y:0}}function je(e){var t=n(e);var r=a(e);var o=v(u(e),t);o.height=Math.max(o.height,t.innerHeight);o.width=Math.max(o.width,t.innerWidth);o.x=-r.scrollLeft;o.y=-r.scrollTop;return o}function Me(e){return parseFloat(e)||0}function Ee(e){var t=i(e)?m(e):{};return{top:Me(t.borderTopWidth),right:Me(t.borderRightWidth),bottom:Me(t.borderBottomWidth),left:Me(t.borderLeftWidth)}}function De(e){var t=n(e);var r=Ee(e);var a=c(e)==="html";var o=p(e);var i=e.clientWidth+r.right;var f=e.clientHeight+r.bottom;if(a&&t.innerHeight-e.clientHeight>50){f=t.innerHeight-r.bottom}return{top:a?0:e.clientTop,right:e.clientLeft>r.left?r.right:a?t.innerWidth-i-o:e.offsetWidth-i,bottom:a?t.innerHeight-f:e.offsetHeight-f,left:a?o:e.clientLeft}}function ke(e,t){var r=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t)){return true}else if(r){var n=t;do{if(n&&e.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function Pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Le(e,t){return t===B?Pe(Oe(e)):i(t)?r(t):Pe(je(u(e)))}function Be(e){var t=g(e);var r=["absolute","fixed"].indexOf(m(e).position)>=0;var n=r&&i(e)?w(e):e;if(!o(n)){return[]}return t.filter((function(e){return o(e)&&ke(e,n)}))}function We(e,t,r){var n=t==="clippingParents"?Be(e):[].concat(t);var a=[].concat(n,[r]);var o=a[0];var f=a.reduce((function(t,r){var n=Le(e,r);var a=De(i(r)?r:u(e));t.top=Math.max(n.top+a.top,t.top);t.right=Math.min(n.right-a.right,t.right);t.bottom=Math.min(n.bottom-a.bottom,t.bottom);t.left=Math.max(n.left+a.left,t.left);return t}),Le(e,o));f.width=f.right-f.left;f.height=f.bottom-f.top;f.x=f.left;f.y=f.top;return f}function He(){return{top:0,right:0,bottom:0,left:0}}function Te(e){return Object.assign({},He(),{},e)}function Ae(e,t){return t.reduce((function(t,r){t[r]=e;return t}),{})}function Re(e,t){if(t===void 0){t={}}var n=t,a=n.placement,i=a===void 0?e.placement:a,f=n.boundary,s=f===void 0?L:f,c=n.rootBoundary,p=c===void 0?B:c,v=n.elementContext,l=v===void 0?W:v,d=n.altBoundary,m=d===void 0?false:d,h=n.padding,g=h===void 0?0:h;var b=Te(typeof g!=="number"?g:Ae(g,D));var y=l===W?H:W;var w=e.elements.reference;var M=e.rects.popper;var E=e.elements[m?y:l];var k=We(o(E)?E:E.contextElement||u(e.elements.popper),s,p);var P=r(w);var T=ae({reference:P,element:M,strategy:"absolute",placement:i});var A=Pe(Object.assign({},M,{},T));var R=l===W?A:P;var q={top:k.top-R.top+b.top,bottom:R.bottom-k.bottom+b.bottom,left:k.left-R.left+b.left,right:R.right-k.right+b.right};var S=e.modifiersData.offset;if(l===W&&S){var C=S[i];Object.keys(q).forEach((function(e){var t=[j,O].indexOf(e)>=0?1:-1;var r=[x,O].indexOf(e)>=0?"y":"x";q[e]+=C[r]*t}))}return q}function qe(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,f=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?A:s;var u=re(n);var p=(u?f?T:T.filter((function(e){return re(e)===u})):D).filter((function(e){return c.indexOf(e)>=0}));var v=p.reduce((function(t,r){t[r]=Re(e,{placement:r,boundary:a,rootBoundary:o,padding:i})[G(r)];return t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}function Se(e){if(G(e)===E){return[]}var t=ye(e);return[xe(e),t,xe(t)]}function Ce(e){var t=e.state,r=e.options,n=e.name;if(t.modifiersData[n]._skip){return}var a=r.fallbackPlacements,o=r.padding,i=r.boundary,f=r.rootBoundary,s=r.altBoundary,c=r.flipVariations,u=c===void 0?true:c,p=r.allowedAutoPlacements;var v=t.options.placement;var l=G(v);var d=l===v;var m=a||(d||!u?[ye(v)]:Se(v));var h=[v].concat(m).reduce((function(e,r){return e.concat(G(r)===E?qe(t,{placement:r,boundary:i,rootBoundary:f,padding:o,flipVariations:u,allowedAutoPlacements:p}):r)}),[]);var g=t.rects.reference;var b=t.rects.popper;var y=new Map;var w=true;var D=h[0];for(var P=0;P<h.length;P++){var L=h[P];var B=G(L);var W=re(L)===k;var H=[x,O].indexOf(B)>=0;var T=H?"width":"height";var A=Re(t,{placement:L,boundary:i,rootBoundary:f,altBoundary:s,padding:o});var R=H?W?j:M:W?O:x;if(g[T]>b[T]){R=ye(R)}var q=ye(R);var S=[A[B]<=0,A[R]<=0,A[q]<=0];if(S.every((function(e){return e}))){D=L;w=false;break}y.set(L,S)}if(w){var C=u?3:1;var N=function e(t){var r=h.find((function(e){var r=y.get(e);if(r){return r.slice(0,t).every((function(e){return e}))}}));if(r){D=r;return"break"}};for(var V=C;V>0;V--){var I=N(V);if(I==="break")break}}if(t.placement!==D){t.modifiersData[n]._skip=true;t.placement=D;t.reset=true}}var Ne={name:"flip",enabled:true,phase:"main",fn:Ce,requiresIfExists:["offset"],data:{_skip:false}};function Ve(e){return e==="x"?"y":"x"}function Ie(e,t,r){return Math.max(e,Math.min(t,r))}function Ue(e){var t=e.state,r=e.options,n=e.name;var a=r.mainAxis,o=a===void 0?true:a,i=r.altAxis,f=i===void 0?false:i,s=r.boundary,c=r.rootBoundary,u=r.altBoundary,p=r.padding,v=r.tether,d=v===void 0?true:v,m=r.tetherOffset,h=m===void 0?0:m;var g=Re(t,{boundary:s,rootBoundary:c,padding:p,altBoundary:u});var b=G(t.placement);var y=re(t.placement);var E=!y;var D=ne(b);var P=Ve(D);var L=t.modifiersData.popperOffsets;var B=t.rects.reference;var W=t.rects.popper;var H=typeof h==="function"?h(Object.assign({},t.rects,{placement:t.placement})):h;var T={x:0,y:0};if(!L){return}if(o){var A=D==="y"?x:M;var R=D==="y"?O:j;var q=D==="y"?"height":"width";var S=L[D];var C=L[D]+g[A];var N=L[D]-g[R];var V=d?-W[q]/2:0;var I=y===k?B[q]:W[q];var U=y===k?-W[q]:-B[q];var z=t.elements.arrow;var F=d&&z?l(z):{width:0,height:0};var _=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:He();var X=_[A];var Y=_[R];var J=Ie(0,B[q],F[q]);var K=E?B[q]/2-V-J-X-H:I-J-X-H;var Q=E?-B[q]/2+V+J+Y+H:U+J+Y+H;var Z=t.elements.arrow&&w(t.elements.arrow);var $=Z?D==="y"?Z.clientTop||0:Z.clientLeft||0:0;var ee=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0;var te=L[D]+K-ee-$;var ae=L[D]+Q-ee;var oe=Ie(d?Math.min(C,te):C,S,d?Math.max(N,ae):N);L[D]=oe;T[D]=oe-S}if(f){var ie=D==="x"?x:M;var fe=D==="x"?O:j;var se=L[P];var ce=se+g[ie];var ue=se-g[fe];var pe=Ie(ce,se,ue);L[P]=pe;T[P]=pe-se}t.modifiersData[n]=T}var ze={name:"preventOverflow",enabled:true,phase:"main",fn:Ue,requiresIfExists:["offset"]};function Fe(e){var t;var r=e.state,n=e.name;var a=r.elements.arrow;var o=r.modifiersData.popperOffsets;var i=G(r.placement);var f=ne(i);var s=[M,j].indexOf(i)>=0;var c=s?"height":"width";if(!a||!o){return}var u=r.modifiersData[n+"#persistent"].padding;var p=l(a);var v=f==="y"?x:M;var d=f==="y"?O:j;var m=r.rects.reference[c]+r.rects.reference[f]-o[f]-r.rects.popper[c];var h=o[f]-r.rects.reference[f];var g=r.elements.arrow&&w(r.elements.arrow);var b=g?f==="y"?g.clientHeight||0:g.clientWidth||0:0;var y=m/2-h/2;var E=u[v];var D=b-p[c]-u[d];var k=b/2-p[c]/2+y;var P=Ie(E,k,D);var L=f;r.modifiersData[n]=(t={},t[L]=P,t.centerOffset=P-k,t)}function _e(e){var t=e.state,r=e.options,n=e.name;var a=r.element,o=a===void 0?"[data-popper-arrow]":a,i=r.padding,f=i===void 0?0:i;if(o==null){return}if(typeof o==="string"){o=t.elements.popper.querySelector(o);if(!o){return}}if(!ke(t.elements.popper,o)){return}t.elements.arrow=o;t.modifiersData[n+"#persistent"]={padding:Te(typeof f!=="number"?f:Ae(f,D))}}var Xe={name:"arrow",enabled:true,phase:"main",fn:Fe,effect:_e,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ye(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ge(e){return[x,j,O,M].some((function(t){return e[t]>=0}))}function Je(e){var t=e.state,r=e.name;var n=t.rects.reference;var a=t.rects.popper;var o=t.modifiersData.preventOverflow;var i=Re(t,{elementContext:"reference"});var f=Re(t,{altBoundary:true});var s=Ye(i,n);var c=Ye(f,a,o);var u=Ge(s);var p=Ge(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}var Ke={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Je};var Qe=[te,ie,pe,de,ge,Ne,ze,Xe,Ke];var Ze=Z({defaultModifiers:Qe});function $e(e,r){var n=["left","right"];if(t(e)==="rtl"){n.reverse()}return r.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function et(e){var t=e.referenceEl,r=e.el,n=e.open,a=e.placement,o=e.modifiers;if(!t||!n){return null}return Ze(t,r,{placement:$e(r,a),modifiers:o})}function tt(e){var t=e.el,r=e.modifiers,n=e.placement,a=e.popper;var o=$e(t,n);a.setOptions({modifiers:r,placement:o})}function rt(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}var nt=4;var at=e("d",Math.ceil(rt(nt,nt)))}}}));