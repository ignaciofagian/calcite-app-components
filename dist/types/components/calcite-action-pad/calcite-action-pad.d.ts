import { CalcitePlacement, CalciteTheme } from "../interfaces";
export declare class CalciteActionPad {
    /**
     * Determines where the element will be displayed.
     * side: dynamically left or right based on whether we're in a leading or trailing shell-panel.
     * over: centered on top of trigger and covers trigger.
     * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
     */
    placement: CalcitePlacement;
    /**
     * HTMLElement used to position this element according to the placement.
     */
    positionElement: HTMLElement;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLCalciteShellFloatingPanelElement;
    offsetTop: number;
    render(): any;
    placementHandler(newValue: CalcitePlacement): void;
    positionElementHandler(newValue: HTMLElement): void;
}