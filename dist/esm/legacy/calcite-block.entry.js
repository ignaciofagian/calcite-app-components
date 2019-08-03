import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './chunk-f176fce8.js';
import { g as chevronUp16, h as chevronDown16 } from './chunk-e4a9dd67.js';
import { C as CalciteIcon } from './chunk-f86c70e2.js';
var CSS = {
    content: "content",
    headerContainer: "header-container",
    toggle: "toggle",
    toggleIcon: "toggle-icon",
    title: "title",
    heading: "heading",
    header: "header",
    button: "button",
    summary: "summary",
    control: "control"
};
var TEXT = {
    collapse: "Collapse",
    expand: "Expand"
};
var CONTROL_SLOT_NAME = "control";
var CalciteBlock = /** @class */ (function () {
    function CalciteBlock(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * When true, this block will be collapsible.
         */
        this.collapsible = false;
        /**
         * When true, the block's content will be displayed.
         */
        this.open = false;
        /**
         * Tooltip used for the toggle when collapsed.
         */
        this.textExpand = TEXT.expand;
        /**
         * Tooltip used for the toggle when expanded.
         */
        this.textCollapse = TEXT.collapse;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.onHeaderClick = function (event) {
            var controlSlot = _this.el.shadowRoot.querySelector("slot[name=" + CONTROL_SLOT_NAME + "]");
            var control = controlSlot && controlSlot.assignedNodes()[0];
            if (control && control.contains(event.target)) {
                event.stopPropagation();
                event.preventDefault();
                return;
            }
            _this.open = !_this.open;
            _this.calciteBlockToggle.emit();
        };
        this.calciteBlockToggle = createEvent(this, "calciteBlockToggle", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteBlock.prototype.render = function () {
        var _a = this, collapsible = _a.collapsible, el = _a.el, heading = _a.heading, open = _a.open, summary = _a.summary, textCollapse = _a.textCollapse, textExpand = _a.textExpand;
        var toggleLabel = open ? textCollapse : textExpand;
        var headerContent = (h("header", { class: CSS.header }, h("div", { class: CSS.title }, h("h3", { class: CSS.heading }, heading), summary ? h("div", { class: CSS.summary }, summary) : null), h("slot", { name: CONTROL_SLOT_NAME })));
        var headerNode = (h("div", { class: CSS.headerContainer }, collapsible ? (h("button", { "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, h(CalciteIcon, { size: "16", path: open ? chevronUp16 : chevronDown16, svgAttributes: { class: CSS.toggleIcon } }))) : (headerContent)));
        var hasContent = !!Array.from(el.children).some(function (child) { return child.slot !== CONTROL_SLOT_NAME; });
        return (h(Host, { "aria-expanded": collapsible ? (open ? "true" : "false") : null }, h("article", null, headerNode, h("div", { class: CSS.content, hidden: !hasContent || !open }, h("slot", null)))));
    };
    Object.defineProperty(CalciteBlock.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteBlock, "style", {
        get: function () { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3)}:host([theme=light]),:root{--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);overflow:hidden;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border);margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);background-color:var(--calcite-app-background)}:host([open]){-webkit-box-shadow:0 0 0 1px var(--calcite-app-border);box-shadow:0 0 0 1px var(--calcite-app-border)}.header-container{background-color:var(--calcite-app-background)}.header-container>.header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}.header{-ms-flex-positive:1;flex-grow:1}.title{margin:0}.summary{font-size:var(--font-size--1);padding:0 var(--calcite-app-side-spacing-half);color:var(--calcite-app-foreground)}.toggle{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);background-color:transparent;border:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;text-align:unset;width:100%}.toggle-icon{margin:0 4px;fill:var(--calcite-app-foreground)}.content{background-color:var(--calcite-app-background);padding:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-half);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteBlock;
}());
export { CalciteBlock as calcite_block };
