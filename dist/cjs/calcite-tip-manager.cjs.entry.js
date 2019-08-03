'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4028ab75.js');
const __chunk_2 = require('./chunk-320231ed.js');
const __chunk_3 = require('./chunk-c5330c81.js');
const __chunk_4 = require('./chunk-b0547a91.js');
const __chunk_10 = require('./chunk-51b0bcc7.js');

class CalciteTipManager {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The default group title for the Tip Manager.
         */
        this.textDefaultTitle = __chunk_10.DEFAULT_GROUP_TITLE;
        /**
         * Label that appears on hover of pagination icon.
         */
        this.textPaginationLabel = __chunk_10.DEFAULT_PAGINATION_LABEL;
        this.groupTitle = this.textDefaultTitle;
        this.observer = new MutationObserver(() => this.setUpTips());
        this.hideTipManager = () => {
            this.el.toggleAttribute("hidden");
            this.el.toggleAttribute("aria-hidden");
        };
        this.previousClicked = () => {
            this.previousTip();
        };
        this.nextClicked = () => {
            this.nextTip();
        };
    }
    selectedChangeHandler() {
        this.showSelectedTip();
        this.updateGroupTitle();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.setUpTips();
    }
    componentDidLoad() {
        this.observer.observe(this.el, { childList: true, subtree: true });
    }
    componentDidUnload() {
        this.observer.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async nextTip() {
        this.direction = "advancing";
        const nextIndex = this.selectedIndex + 1;
        this.selectedIndex = (nextIndex + this.total) % this.total;
    }
    async previousTip() {
        this.direction = "retreating";
        const previousIndex = this.selectedIndex - 1;
        this.selectedIndex = (previousIndex + this.total) % this.total;
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    setUpTips() {
        const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
        const selectedTip = this.el.querySelector("calcite-tip[selected]");
        this.tips = tips;
        this.total = tips.length;
        this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
        tips.forEach((tip) => {
            tip.toggleAttribute("non-dismissible", true);
        });
        this.showSelectedTip();
        this.updateGroupTitle();
    }
    showSelectedTip() {
        this.tips.forEach((tip, index) => {
            tip.toggleAttribute("selected", this.selectedIndex === index);
            tip.toggleAttribute("hidden", this.selectedIndex !== index);
        });
    }
    updateGroupTitle() {
        const selectedTip = this.tips[this.selectedIndex];
        const tipParent = selectedTip.closest("calcite-tip-group");
        this.groupTitle = tipParent ? tipParent.textGroupTitle : this.textDefaultTitle;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        if (this.total === 0) {
            // TODO: Empty state
            return __chunk_1.h(__chunk_1.Host, null);
        }
        return (__chunk_1.h(__chunk_1.Host, null, __chunk_1.h("header", { class: __chunk_10.CSS.header }, __chunk_1.h("h2", { class: __chunk_10.CSS.heading }, this.groupTitle), __chunk_1.h("calcite-action", { onClick: this.hideTipManager, class: __chunk_10.CSS.close }, __chunk_1.h(__chunk_4.CalciteIcon, { size: "16", path: __chunk_2.x16 }))), __chunk_1.h("div", { class: __chunk_3.classnames(__chunk_10.CSS.tipContainer, this.direction), key: this.selectedIndex }, __chunk_1.h("slot", null)), __chunk_1.h("footer", { class: __chunk_10.CSS.pagination }, __chunk_1.h("calcite-action", { onClick: this.previousClicked, class: __chunk_10.CSS.pagePrevious }, __chunk_1.h(__chunk_4.CalciteIcon, { size: "16", path: __chunk_2.chevronLeft16 })), __chunk_1.h("span", { class: __chunk_10.CSS.pagePosition }, `${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`), __chunk_1.h("calcite-action", { onClick: this.nextClicked, class: __chunk_10.CSS.pageNext }, __chunk_1.h(__chunk_4.CalciteIcon, { size: "16", path: __chunk_2.chevronRight16 })))));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "selectedIndex": ["selectedChangeHandler"]
    }; }
    static get style() { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3)}:host([theme=light]),:root{--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}:host{overflow:hidden;position:relative;display:block;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;background-color:var(--calcite-app-background)}:host([hidden]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:22vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;background-color:var(--calcite-app-background)}slot::slotted(calcite-tip),slot::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container.advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container.retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half);color:var(--calcite-app-foreground)}"; }
}

exports.calcite_tip_manager = CalciteTipManager;
