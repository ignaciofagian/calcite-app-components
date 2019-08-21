var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function o(t){try{l(n.next(t))}catch(t){a(t)}}function c(t){try{l(n["throw"](t))}catch(t){a(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,c)}l((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(o[0]===6&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}if(a[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];r=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-c2917d38.system.js","./p-9391ba3d.system.js","./p-ea33384c.system.js"],function(t){"use strict";var e,i,n,r,a,o,c;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;a=t.g},function(t){o=t.n},function(t){c=t.g}],execute:function(){var l=t("calcite_tab",function(){function t(t){e(this,t);this.isActive=false;this.guid="calcite-tab-title-"+c();this.calciteTabRegister=i(this,"calciteTabRegister",7);this.calciteTabUnregister=i(this,"calciteTabUnregister",7)}t.prototype.render=function(){var t=this.el.id||this.guid;return n(r,{id:t,"aria-labeledby":this.labeledBy,"aria-expanded":this.isActive?"true":"false",role:"tabpanel"},n("section",null,n("slot",null)))};t.prototype.componentDidLoad=function(){this.calciteTabRegister.emit()};t.prototype.componentDidUnload=function(){this.calciteTabUnregister.emit()};t.prototype.tabChangeHandler=function(t){var e=this;if(t.target.closest("calcite-tabs")!==this.el.closest("calcite-tabs")){return}if(this.tab){this.isActive=this.tab===t.detail.tab}else{this.getTabIndex().then(function(i){e.isActive=i===t.detail.tab})}};t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(Array.prototype.indexOf.call(o(this.el.parentElement.children).filter(function(t){return t.matches("calcite-tab")}),this.el))]})})};t.prototype.updateAriaInfo=function(t,e){if(t===void 0){t=[]}if(e===void 0){e=[]}this.labeledBy=e[t.indexOf(this.el.id)]||null};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host([is-active]) section,calcite-tabs{display:block}section{display:none}"},enumerable:true,configurable:true});return t}())}}});