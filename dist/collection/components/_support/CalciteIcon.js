import { h } from "@stencil/core";
export const CalciteIcon = ({ path, size, svgAttributes }) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: size, width: size, viewBox: `0 0 ${size} ${size}` }, svgAttributes),
    h("path", { d: path })));
export default CalciteIcon;
