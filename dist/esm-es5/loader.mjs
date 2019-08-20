import { a as patchEsm, b as bootstrapLazy } from './core-1a69f6a3.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["calcite-action_4", [[1, "calcite-action-bar", { "expand": [516], "expanded": [516], "textExpand": [1, "text-expand"], "textCollapse": [1, "text-collapse"], "layout": [513], "theme": [513] }], [1, "calcite-action-pad", { "placement": [513], "positionElement": [16], "theme": [513], "offsetTop": [32] }], [1, "calcite-action-group"], [1, "calcite-action", { "active": [516], "compact": [516], "disabled": [516], "indicator": [516], "label": [1], "text": [1], "textEnabled": [516, "text-enabled"], "theme": [513] }]]], ["calcite-tip_3", [[1, "calcite-tip", { "storageId": [1, "storage-id"], "nonDismissible": [516, "non-dismissible"], "heading": [1], "textClose": [1, "text-close"], "textThumbnail": [1, "text-thumbnail"], "thumbnail": [1], "theme": [513], "dismissed": [32] }], [1, "calcite-tip-manager", { "textClose": [1, "text-close"], "textDefaultTitle": [513, "text-default-title"], "textNext": [1, "text-next"], "textPaginationLabel": [513, "text-pagination-label"], "textPrevious": [1, "text-previous"], "theme": [513], "selectedIndex": [32], "tips": [32], "total": [32], "direction": [32], "nextTip": [64], "previousTip": [64] }], [1, "calcite-tip-group", { "textGroupTitle": [513, "text-group-title"] }]]], ["calcite-floating-panel_3", [[1, "calcite-floating-panel", { "placement": [513], "heading": [513], "positionElement": [16], "offsetTop": [32] }], [1, "calcite-shell", { "theme": [513] }], [1, "calcite-shell-panel", { "collapsed": [516], "layout": [513] }]]], ["calcite-block_2", [[1, "calcite-block-section", { "open": [516], "text": [1], "textExpand": [1, "text-expand"], "textCollapse": [1, "text-collapse"] }], [1, "calcite-block", { "collapsible": [4], "heading": [1], "open": [516], "summary": [1], "textExpand": [1, "text-expand"], "textCollapse": [1, "text-collapse"], "theme": [513] }]]], ["calcite-flow_2", [[1, "calcite-flow-item", { "heading": [1], "menuOpen": [516, "menu-open"], "showBackButton": [4, "show-back-button"], "textBack": [1, "text-back"], "textClose": [1, "text-close"], "textOpen": [1, "text-open"], "theme": [513] }], [1, "calcite-flow", { "theme": [513], "flowCount": [32], "flowDirection": [32], "flows": [32], "back": [64] }]]], ["calcite-demo-nav_2", [[1, "calcite-demo-nav", { "pageId": [1, "page-id"] }], [1, "calcite-example", { "property": [1], "state": [32], "doThing": [64] }, [[0, "click", "onClick"]]]]], ["calcite-alert", [[1, "calcite-alert", { "dismiss": [4], "duration": [513], "color": [513], "theme": [513], "icon": [4], "id": [1], "currentAlert": [1, "current-alert"], "queueLength": [2, "queue-length"], "active": [32], "closeCalciteAlert": [64], "openCalciteAlert": [64] }]]], ["calcite-alerts", [[1, "calcite-alerts", { "id": [1], "currentAlert": [32], "active": [32], "alertQueue": [32] }, [[0, "calciteAlertOpen", "updateQueueOnOpen"], [0, "calciteAlertClose", "updateQueueOnClose"]]]]], ["calcite-example", [[1, "calcite-example", { "someProp": [4, "some-prop"], "textMyString": [1, "text-my-string"], "internalRenderableProp": [32], "publicMethod": [64] }, [[0, "someEvent", "handleSomeEvent"]]]]], ["calcite-loader", [[1, "calcite-loader", { "isActive": [4, "is-active"], "text": [1] }]]], ["calcite-progress", [[4, "calcite-progress", { "type": [1], "value": [2], "text": [1], "reversed": [4] }]]], ["calcite-switch", [[1, "calcite-switch", { "switched": [516], "name": [513], "value": [513], "color": [1] }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]]], ["calcite-tab", [[1, "calcite-tab", { "tab": [1537], "isActive": [1540, "is-active"], "labeledBy": [32], "getTabIndex": [64], "updateAriaInfo": [64] }, [[16, "calciteTabChange", "tabChangeHandler"]]]]], ["calcite-tab-nav", [[1, "calcite-tab-nav", { "storageId": [1, "storage-id"], "syncId": [1, "sync-id"], "selectedTab": [32] }, [[0, "calciteTabsFocusPrevious", "focusPreviousTabHandler"], [0, "calciteTabsFocusNext", "focusNextTabHandler"], [0, "calciteTabsActivate", "activateTabHandler"], [32, "calciteTabChange", "globalTabChangeHandler"]]]]], ["calcite-tab-title", [[1, "calcite-tab-title", { "tab": [1537], "isActive": [1540, "is-active"], "controls": [32], "getTabIndex": [64], "getTabIdentifier": [64], "updateAriaInfo": [64] }, [[16, "calciteTabChange", "tabChangeHandler"], [0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]]], ["calcite-tabs", [[1, "calcite-tabs", { "theme": [513], "layout": [513], "titles": [32], "tabs": [32] }, [[0, "calciteTabTitleRegister", "calciteTabTitleRegister"], [0, "calciteTabTitleUnregister", "calciteTabTitleUnregister"], [0, "calciteTabRegister", "calciteTabRegister"], [0, "calciteTabUnregister", "calciteTabUnregister"]]]]], ["context-consumer", [[0, "context-consumer", { "context": [16], "renderer": [16], "subscribe": [16], "unsubscribe": [32] }]]]], options);
    });
};
export { defineCustomElements };
