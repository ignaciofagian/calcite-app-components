import{r as t,c as e,h as i,H as o,g as a}from"./p-b0b0104a.js";import{E as s,S as l}from"./p-eb6a0c18.js";import{g as r}from"./p-13cfbb21.js";const n=class{constructor(i){t(this,i),this.loading=!1,this.selected=!1,this.selectable=!1,this.calciteCardSelected=e(this,"calciteCardSelected",7)}render(){const t=r(this.el);return i(o,{dir:t},i("div",{class:"calcite-card-container"},this.loading?i("div",{class:"calcite-card-loader-container"},i("calcite-loader",{"is-active":!0})):null,i("section",{class:{container:!0},"aria-busy":this.loading},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),i("div",{class:"card-content"},i("slot",null)),this.renderFooter())))}cardSelectClick(){this.selectCard()}cardSelectKeyDown(t){switch(t.keyCode){case l:case s:this.selectCard(),t.preventDefault()}}selectCard(){this.selected=!this.selected,this.calciteCardSelected.emit({element:this.el,selected:this.selected})}renderThumbnail(){return this.el.querySelector("[slot=thumbnail]")?i("div",{class:"thumbnail-wrapper"},i("slot",{name:"thumbnail"})):null}renderCheckbox(){return i("div",{class:"checkbox-wrapper",onClick:()=>this.cardSelectClick(),onKeyDown:t=>this.cardSelectKeyDown(t)},i("calcite-checkbox",{checked:this.selected}))}renderHeader(){const t=this.el.querySelector("[slot=title]"),e=this.el.querySelector("[slot=subtitle]");return t||e?i("header",{class:"header"},i("slot",{name:"title"}),i("slot",{name:"subtitle"})):null}renderFooter(){const t=this.el.querySelector("[slot=footer-leading]"),e=this.el.querySelector("[slot=footer-trailing]");return t||e?i("footer",{class:"footer"},i("slot",{name:"footer-leading"}),i("slot",{name:"footer-trailing"})):null}get el(){return a(this)}};n.style=":host([hidden]){display:none}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 rgba(0, 0, 0, 0);box-shadow:0 0 0 rgba(0, 0, 0, 0)}:host .calcite-card-container:hover{-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);z-index:1}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue-1)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";export{n as calcite_card}