import{g as t}from"./p-9c90d370.js";function e(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e?e.defaultView:window}return t}function r(t){var e=n(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function o(t){return t instanceof n(t).Element||t instanceof Element}function i(t){return t instanceof n(t).HTMLElement||t instanceof HTMLElement}function a(t){return t?(t.nodeName||"").toLowerCase():null}function u(t){return(o(t)?t.ownerDocument:t.document).documentElement}function f(t){return e(u(t)).left+r(t).scrollLeft}function c(t){return n(t).getComputedStyle(t)}function p(t){var e=c(t);return/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function s(t,o,c){void 0===c&&(c=!1);var s,d,l=u(o),v=e(t),b=i(o),h={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(b||!b&&!c)&&(("body"!==a(o)||p(l))&&(h=(s=o)!==n(s)&&i(s)?{scrollLeft:(d=s).scrollLeft,scrollTop:d.scrollTop}:r(s)),i(o)?((m=e(o)).x+=o.clientLeft,m.y+=o.clientTop):l&&(m.x=f(l))),{x:v.left+h.scrollLeft-m.x,y:v.top+h.scrollTop-m.y,width:v.width,height:v.height}}function d(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function l(t){return"html"===a(t)?t:t.assignedSlot||t.parentNode||t.host||u(t)}function v(t,e){void 0===e&&(e=[]);var r=function t(e){return["html","body","#document"].indexOf(a(e))>=0?e.ownerDocument.body:i(e)&&p(e)?e:t(l(e))}(t),o="body"===a(r),u=n(r),f=o?[u].concat(u.visualViewport||[],p(r)?r:[]):r,c=e.concat(f);return o?c:c.concat(v(l(f)))}function b(t){return["table","td","th"].indexOf(a(t))>=0}function h(t){if(!i(t)||"fixed"===c(t).position)return null;var e=t.offsetParent;if(e){var n=u(e);if("body"===a(e)&&"static"===c(e).position&&"static"!==c(n).position)return n}return e}function m(t){for(var e=n(t),r=h(t);r&&b(r)&&"static"===c(r).position;)r=h(r);return r&&"body"===a(r)&&"static"===c(r).position?e:r||function(t){for(var e=l(t);i(e)&&["html","body"].indexOf(a(e))<0;){var n=c(e);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return e;e=e.parentNode}return null}(t)||e}var y="top",O="bottom",j="right",g="left",w=[y,O,j,g],x=w.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),M=[].concat(w,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),k=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function E(t){return t.split("-")[0]}function B(t,e){var n=Boolean(e.getRootNode&&e.getRootNode().host);if(t.contains(e))return!0;if(n){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function P(t,o){return"viewport"===o?q(function(t){var e=n(t),r=u(t),o=e.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,p=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=o.offsetLeft,p=o.offsetTop)),{width:i,height:a,x:c+f(t),y:p}}(t)):i(o)?function(t){var n=e(t);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(o):q(function(t){var e=u(t),n=r(t),o=t.ownerDocument.body,i=Math.max(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Math.max(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-n.scrollLeft+f(t),s=-n.scrollTop;return"rtl"===c(o||e).direction&&(p+=Math.max(e.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:p,y:s}}(u(t)))}function L(t){return t.split("-")[1]}function I(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function R(t){var e,n=t.reference,r=t.element,o=t.placement,i=o?E(o):null,a=o?L(o):null,u=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case y:e={x:u,y:n.y-r.height};break;case O:e={x:u,y:n.y+n.height};break;case j:e={x:n.x+n.width,y:f};break;case g:e={x:n.x-r.width,y:f};break;default:e={x:n.x,y:n.y}}var c=i?I(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case"start":e[c]=Math.floor(e[c])-Math.floor(n[p]/2-r[p]/2);break;case"end":e[c]=Math.floor(e[c])+Math.ceil(n[p]/2-r[p]/2)}}return e}function S(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function T(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function W(t,n){void 0===n&&(n={});var r=n.placement,f=void 0===r?t.placement:r,p=n.boundary,s=void 0===p?"clippingParents":p,d=n.rootBoundary,b=void 0===d?"viewport":d,h=n.elementContext,g=void 0===h?"popper":h,x=n.altBoundary,M=void 0!==x&&x,k=n.padding,E=void 0===k?0:k,L=S("number"!=typeof E?E:T(E,w)),I=t.elements.reference,W=t.rects.popper,A=t.elements[M?"popper"===g?"reference":"popper":g],z=function(t,e,n){var r="clippingParents"===e?function(t){var e=v(l(t)),n=["absolute","fixed"].indexOf(c(t).position)>=0&&i(t)?m(t):t;return o(n)?e.filter((function(t){return o(t)&&B(t,n)&&"body"!==a(t)})):[]}(t):[].concat(e),u=[].concat(r,[n]),f=u.reduce((function(e,n){var r=P(t,n);return e.top=Math.max(r.top,e.top),e.right=Math.min(r.right,e.right),e.bottom=Math.min(r.bottom,e.bottom),e.left=Math.max(r.left,e.left),e}),P(t,u[0]));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}(o(A)?A:A.contextElement||u(t.elements.popper),s,b),C=e(I),H=R({reference:C,element:W,strategy:"absolute",placement:f}),D=q(Object.assign(Object.assign({},W),H)),U="popper"===g?D:C,V={top:z.top-U.top+L.top,bottom:U.bottom-z.bottom+L.bottom,left:z.left-U.left+L.left,right:U.right-z.right+L.right},_=t.modifiersData.offset;if("popper"===g&&_){var F=_[f];Object.keys(V).forEach((function(t){var e=[j,O].indexOf(t)>=0?1:-1,n=[y,O].indexOf(t)>=0?"y":"x";V[t]+=F[n]*e}))}return V}var A={placement:"bottom",modifiers:[],strategy:"absolute"};function z(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function C(t){void 0===t&&(t={});var e=t.defaultModifiers,n=void 0===e?[]:e,r=t.defaultOptions,i=void 0===r?A:r;return function(t,e,r){void 0===r&&(r=i);var a,u,f={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},A),i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],p=!1,l={state:f,setOptions:function(r){b(),f.options=Object.assign(Object.assign(Object.assign({},i),f.options),r),f.scrollParents={reference:o(t)?v(t):t.contextElement?v(t.contextElement):[],popper:v(e)};var a,u,p=function(t){var e=function(t){var e=new Map,n=new Set,r=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=e.get(r);o&&t(o)}})),r.push(o)}(t)})),r}(t);return k.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((a=[].concat(n,f.options.modifiers),u=a.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign(Object.assign(Object.assign({},n),e),{},{options:Object.assign(Object.assign({},n.options),e.options),data:Object.assign(Object.assign({},n.data),e.data)}):e,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return f.orderedModifiers=p.filter((function(t){return t.enabled})),f.orderedModifiers.forEach((function(t){var e=t.options,n=t.effect;if("function"==typeof n){var r=n({state:f,name:t.name,instance:l,options:void 0===e?{}:e});c.push(r||function(){})}})),l.update()},forceUpdate:function(){if(!p){var t=f.elements,e=t.reference,n=t.popper;if(z(e,n)){f.rects={reference:s(e,m(n),"fixed"===f.options.strategy),popper:d(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(t){return f.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(f=i({state:f,options:void 0===a?{}:a,name:o.name,instance:l})||f)}else f.reset=!1,r=-1}}},update:(a=function(){return new Promise((function(t){l.forceUpdate(),t(f)}))},function(){return u||(u=new Promise((function(t){Promise.resolve().then((function(){u=void 0,t(a())}))}))),u}),destroy:function(){b(),p=!0}};if(!z(t,e))return l;function b(){c.forEach((function(t){return t()})),c=[]}return l.setOptions(r).then((function(t){!p&&r.onFirstUpdate&&r.onFirstUpdate(t)})),l}}var H={passive:!0},D={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(t){var e,r=t.popper,o=t.popperRect,i=t.placement,a=t.offsets,f=t.position,c=t.gpuAcceleration,p=t.adaptive,s=function(t){var e=t.y,n=window.devicePixelRatio||1;return{x:Math.round(t.x*n)/n||0,y:Math.round(e*n)/n||0}}(a),d=s.x,l=s.y,v=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),h=g,w=y,x=window;if(p){var M=m(r);M===n(r)&&(M=u(r)),i===y&&(w=O,l-=M.clientHeight-o.height,l*=c?1:-1),i===g&&(h=j,d-=M.clientWidth-o.width,d*=c?1:-1)}var k,E=Object.assign({position:f},p&&D);return Object.assign(Object.assign({},E),{},c?((k={})[w]=b?"0":"",k[h]=v?"0":"",k.transform=(x.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",k):((e={})[w]=b?l+"px":"",e[h]=v?d+"px":"",e.transform="",e))}var V={left:"right",right:"left",bottom:"top",top:"bottom"};function _(t){return t.replace(/left|right|bottom|top/g,(function(t){return V[t]}))}var F={start:"end",end:"start"};function G(t){return t.replace(/start|end/g,(function(t){return F[t]}))}function J(t,e){void 0===e&&(e={});var n=e.boundary,r=e.rootBoundary,o=e.padding,i=e.flipVariations,a=e.allowedAutoPlacements,u=void 0===a?M:a,f=L(e.placement),c=f?i?x:x.filter((function(t){return L(t)===f})):w,p=c.filter((function(t){return u.indexOf(t)>=0}));0===p.length&&(p=c);var s=p.reduce((function(e,i){return e[i]=W(t,{placement:i,boundary:n,rootBoundary:r,padding:o})[E(i)],e}),{});return Object.keys(s).sort((function(t,e){return s[t]-s[e]}))}function K(t,e,n){return Math.max(t,Math.min(e,n))}function N(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Q(t){return[y,j,O,g].some((function(e){return t[e]>=0}))}var X=C({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,r=t.instance,o=t.options,i=o.scroll,a=void 0===i||i,u=o.resize,f=void 0===u||u,c=n(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&p.forEach((function(t){t.addEventListener("scroll",r.update,H)})),f&&c.addEventListener("resize",r.update,H),function(){a&&p.forEach((function(t){t.removeEventListener("scroll",r.update,H)})),f&&c.removeEventListener("resize",r.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state;e.modifiersData[t.name]=R({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,u={placement:E(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),U(Object.assign(Object.assign({},u),{},{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),U(Object.assign(Object.assign({},u),{},{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];i(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],o=e.attributes[t]||{},u=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});i(r)&&a(r)&&(Object.assign(r.style,u),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.name,r=t.options.offset,o=void 0===r?[0,0]:r,i=M.reduce((function(t,n){return t[n]=function(t,e,n){var r=E(t),o=[g,y].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},e),{},{placement:t})):n,a=i[0],u=i[1];return a=a||0,u=(u||0)*o,[g,j].indexOf(r)>=0?{x:u,y:a}:{x:a,y:u}}(n,e.rects,o),t}),{}),a=i[e.placement],u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=a.x,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,u=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,s=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,v=void 0===l||l,b=n.allowedAutoPlacements,h=e.options.placement,m=E(h),w=f||(m!==h&&v?function(t){if("auto"===E(t))return[];var e=_(t);return[G(t),e,G(e)]}(h):[_(h)]),x=[h].concat(w).reduce((function(t,n){return t.concat("auto"===E(n)?J(e,{placement:n,boundary:p,rootBoundary:s,padding:c,flipVariations:v,allowedAutoPlacements:b}):n)}),[]),M=e.rects.reference,k=e.rects.popper,B=new Map,q=!0,P=x[0],I=0;I<x.length;I++){var R=x[I],S=E(R),T="start"===L(R),A=[y,O].indexOf(S)>=0,z=A?"width":"height",C=W(e,{placement:R,boundary:p,rootBoundary:s,altBoundary:d,padding:c}),H=A?T?j:g:T?O:y;M[z]>k[z]&&(H=_(H));var D=_(H),U=[];if(i&&U.push(C[S]<=0),u&&U.push(C[H]<=0,C[D]<=0),U.every((function(t){return t}))){P=R,q=!1;break}B.set(R,U)}if(q)for(var V=function(t){var e=x.find((function(e){var n=B.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return P=e,"break"},F=v?3:1;F>0&&"break"!==V(F);F--);e.placement!==P&&(e.modifiersData[r]._skip=!0,e.placement=P,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,u=void 0!==a&&a,f=n.tether,c=void 0===f||f,p=n.tetherOffset,s=void 0===p?0:p,l=W(e,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),v=E(e.placement),b=L(e.placement),h=!b,w=I(v),x="x"===w?"y":"x",M=e.modifiersData.popperOffsets,k=e.rects.reference,B=e.rects.popper,q="function"==typeof s?s(Object.assign(Object.assign({},e.rects),{},{placement:e.placement})):s,P={x:0,y:0};if(M){if(i){var R="y"===w?y:g,S="y"===w?O:j,T="y"===w?"height":"width",A=M[w],z=M[w]+l[R],C=M[w]-l[S],H=c?-B[T]/2:0,D="start"===b?k[T]:B[T],U="start"===b?-B[T]:-k[T],V=e.elements.arrow,_=c&&V?d(V):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=F[R],J=F[S],N=K(0,k[T],_[T]),Q=h?k[T]/2-H-N-G-q:D-N-G-q,X=h?-k[T]/2+H+N+J+q:U+N+J+q,Y=e.elements.arrow&&m(e.elements.arrow),Z=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,$=M[w]+X-Z,tt=K(c?Math.min(z,M[w]+Q-Z-(Y?"y"===w?Y.clientTop||0:Y.clientLeft||0:0)):z,A,c?Math.max(C,$):C);M[w]=tt,P[w]=tt-A}if(u){var et=M[x],nt=K(et+l["x"===w?y:g],et,et-l["x"===w?O:j]);M[x]=nt,P[x]=nt-et}e.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,r=t.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=E(n.placement),u=I(a),f=[g,j].indexOf(a)>=0?"height":"width";if(o&&i){var c=n.modifiersData[r+"#persistent"].padding,p=d(o),s="y"===u?y:g,l="y"===u?O:j,v=n.rects.reference[f]+n.rects.reference[u]-i[u]-n.rects.popper[f],b=i[u]-n.rects.reference[u],h=m(o),w=h?"y"===u?h.clientHeight||0:h.clientWidth||0:0,x=w/2-p[f]/2+(v/2-b/2),M=K(c[s],x,w-p[f]-c[l]);n.modifiersData[r]=((e={})[u]=M,e.centerOffset=M-x,e)}},effect:function(t){var e=t.state,n=t.options,r=t.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,u=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&B(e.elements.popper,i)&&(e.elements.arrow=i,e.modifiersData[r+"#persistent"]={padding:S("number"!=typeof u?u:T(u,w))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=W(e,{elementContext:"reference"}),u=W(e,{altBoundary:!0}),f=N(a,r),c=N(u,o,i),p=Q(f),s=Q(c);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:s},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":s})}}]});function Y(e,n){const r=["left","right"];return"rtl"===t(e)&&r.reverse(),n.replace(/leading/gi,r[0]).replace(/trailing/gi,r[1])}function Z({referenceEl:t,el:e,open:n,placement:r,modifiers:o}){return t&&n?X(t,e,{placement:Y(e,r),modifiers:o}):null}function $({el:t,modifiers:e,placement:n,popper:r}){const o=Y(t,n);r.setOptions({modifiers:e,placement:o})}const tt=Math.ceil((4,Math.sqrt(Math.pow(4,2)+Math.pow(4,2))));export{Z as c,tt as d,$ as u}