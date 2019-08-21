'use strict';

const core = require('./core-e55be87c.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["calcite-tip_3.cjs",[[1,"calcite-tip",{"storageId":[1,"storage-id"],"nonDismissible":[516,"non-dismissible"],"heading":[1],"textClose":[1,"text-close"],"textThumbnail":[1,"text-thumbnail"],"thumbnail":[1],"theme":[513],"dismissed":[32]}],[1,"calcite-tip-manager",{"textClose":[1,"text-close"],"textDefaultTitle":[513,"text-default-title"],"textNext":[1,"text-next"],"textPaginationLabel":[513,"text-pagination-label"],"textPrevious":[1,"text-previous"],"theme":[513],"selectedIndex":[32],"tips":[32],"total":[32],"direction":[32],"nextTip":[64],"previousTip":[64]}],[1,"calcite-tip-group",{"textGroupTitle":[513,"text-group-title"]}]]],["calcite-shell_3.cjs",[[1,"calcite-shell-floating-panel",{"placement":[513],"heading":[513],"positionElement":[16],"offsetTop":[32]}],[1,"calcite-shell",{"theme":[513]}],[1,"calcite-shell-panel",{"collapsed":[516],"layout":[513]}]]],["calcite-block_2.cjs",[[1,"calcite-block-section",{"open":[516],"text":[1],"textExpand":[1,"text-expand"],"textCollapse":[1,"text-collapse"]}],[1,"calcite-block",{"collapsible":[4],"heading":[1],"open":[516],"summary":[1],"textExpand":[1,"text-expand"],"textCollapse":[1,"text-collapse"],"theme":[513]}]]],["calcite-flow_2.cjs",[[1,"calcite-flow-item",{"heading":[1],"menuOpen":[516,"menu-open"],"showBackButton":[4,"show-back-button"],"textBack":[1,"text-back"],"textClose":[1,"text-close"],"textOpen":[1,"text-open"],"theme":[513]}],[1,"calcite-flow",{"theme":[513],"flowCount":[32],"flowDirection":[32],"flows":[32],"back":[64]}]]],["calcite-demo-nav_2.cjs",[[1,"calcite-demo-nav",{"pageId":[1,"page-id"]}],[1,"calcite-example",{"someProp":[4,"some-prop"],"textMyString":[1,"text-my-string"],"internalRenderableProp":[32],"publicMethod":[64]},[[0,"someEvent","handleSomeEvent"]]]]],["calcite-action_4.cjs",[[1,"calcite-action-bar",{"expand":[516],"expanded":[516],"textExpand":[1,"text-expand"],"textCollapse":[1,"text-collapse"],"layout":[513],"theme":[513]}],[1,"calcite-action-pad",{"placement":[513],"positionElement":[16],"theme":[513],"offsetTop":[32]}],[1,"calcite-action-group"],[1,"calcite-action",{"active":[516],"compact":[516],"disabled":[516],"indicator":[516],"label":[1],"text":[1],"textEnabled":[516,"text-enabled"],"theme":[513]}]]]], options);
});
