import { r as registerInstance, h, H as Host, g as getElement } from './chunk-f176fce8.js';
import { m as x16 } from './chunk-e4a9dd67.js';
import { C as CalciteIcon } from './chunk-f86c70e2.js';
import { g as getOffsetTop } from './chunk-bc53343f.js';
var CSS = {
    header: "header",
    heading: "heading",
    content: "content"
};
var CalciteFloatingPanel = /** @class */ (function () {
    function CalciteFloatingPanel(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.offsetTop = 0;
        this.hidePanel = function () {
            _this.el.toggleAttribute("hidden", true);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    CalciteFloatingPanel.prototype.render = function () {
        var offsetTop = this.offsetTop;
        var style = {
            top: offsetTop + "px"
        };
        return (h(Host, { style: style }, h("header", { class: CSS.header }, h("h3", { class: CSS.heading }, this.heading), h("calcite-action", { onClick: this.hidePanel }, h(CalciteIcon, { size: "16", path: x16 }))), h("div", { class: CSS.content }, h("slot", null))));
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    CalciteFloatingPanel.prototype.placementHandler = function (newValue) {
        this.offsetTop = getOffsetTop({
            floatingElement: this.el,
            placement: newValue,
            positionElement: this.positionElement
        });
    };
    CalciteFloatingPanel.prototype.positionElementHandler = function (newValue) {
        this.offsetTop = getOffsetTop({
            floatingElement: this.el,
            placement: this.placement,
            positionElement: newValue
        });
    };
    Object.defineProperty(CalciteFloatingPanel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteFloatingPanel, "watchers", {
        get: function () {
            return {
                "placement": ["placementHandler"],
                "positionElement": ["positionElementHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteFloatingPanel, "style", {
        get: function () { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3)}:host([theme=light]),:root{--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);position:absolute;z-index:1;-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);border-radius:var(--calcite-app-border-radius);-webkit-animation:calcite-app-fade-in-scale var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in-scale var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([position-type=side]){left:100%}:host([position-type=anchor]),:host([position-type=over]){left:12%;width:89%}.header{padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter)}.content{padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-three-quarters)}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteFloatingPanel;
}());
export { CalciteFloatingPanel as calcite_floating_panel };
