System.register(["./p-581369cc.system.js","./p-ab241233.system.js"],function(t){"use strict";var e,i,n,s,r,c,o;return{setters:[function(t){e=t.r;i=t.c;n=t.h;s=t.H;r=t.g},function(t){c=t.S;o=t.E}],execute:function(){var u=function(){function t(t){var n=this;e(this,t);this.switched=false;this.name="";this.value="";this.color="blue";this.syncThisToProxyInput=function(){n.switched=n.inputProxy.checked;n.name=n.inputProxy.name;n.value=n.inputProxy.value};this.syncProxyInputToThis=function(){n.inputProxy.checked=n.switched;n.inputProxy.name=n.name;n.inputProxy.value=n.value};this.calciteSwitchChange=i(this,"calciteSwitchChange",7)}t.prototype.onClick=function(t){if(this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el){this.switched=!this.switched}};t.prototype.keyDownHandler=function(t){if(t.keyCode===c||t.keyCode===o){this.switched=!this.switched}};t.prototype.switchWatcher=function(){this.calciteSwitchChange.emit();if(this.switched){this.inputProxy.setAttribute("checked","")}else{this.inputProxy.removeAttribute("checked")}};t.prototype.connectedCallback=function(){this.setupProxyInput()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillRender=function(){this.syncProxyInputToThis()};t.prototype.render=function(){return n(s,{role:"checkbox","aria-checked":this.switched,tabindex:"0"},n("div",{class:"track"},n("div",{class:"handle"})),n("slot",null))};t.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{switched:["switchWatcher"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}::slotted(input){display:none}:host{display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent}.track{position:relative;display:inline-block;vertical-align:top;width:36px;height:20px;background-color:#f8f8f8;border-radius:30px;border:1px solid #eaeaea}.handle,.track{-webkit-transition:all .25s ease;transition:all .25s ease}.handle{position:absolute;display:block;width:18px;height:18px;top:-1px;left:-1px;right:auto;background-color:#fff;border-radius:30px;border:2px solid #757575;-webkit-box-shadow:0 1px 1px 0 rgba(43,43,43,.2);box-shadow:0 1px 1px 0 rgba(43,43,43,.2)}:host([switched]) .handle{right:-1px;left:auto;border-color:#004874;-webkit-box-shadow:0 2px 1px 0 rgba(43,43,43,.2);box-shadow:0 2px 1px 0 rgba(43,43,43,.2)}:host([switched]) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]) .handle{border-color:#7c1d13}:host([switched][color=red]) .track{border-color:#7c1d13;background-color:#a82b1e}:host(:focus),:host([switched]:focus){outline:none}:host(:focus) .track,:host([switched]:focus) .track{-webkit-box-shadow:0 0 4px 2px hsla(0,0%,87.5%,.9);box-shadow:0 0 4px 2px hsla(0,0%,87.5%,.9)}:host(:hover) .track{border-color:#eaeaea;background-color:#f3f3f3}:host(:hover) .handle{border-color:#007ac2;-webkit-box-shadow:0 1px 2px 0 rgba(43,43,43,.2);box-shadow:0 1px 2px 0 rgba(43,43,43,.2)}:host([color=red]:hover) .handle{border-color:#d83020}:host([switched]:hover) .handle{border-color:#004874}:host([switched]:hover) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]:hover) .handle{border-color:#7c1d13}:host([switched][color=red]:hover) .track{border-color:#7c1d13;background-color:#a82b1e}"},enumerable:true,configurable:true});return t}();t("calcite_switch",u)}}});