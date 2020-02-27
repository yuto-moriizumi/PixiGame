import * as PIXI from "pixi.js";
export default class UI extends PIXI.Container {
    private reelsRunning;
    private reelContainer;
    static readonly defaultTextStyle: PIXI.TextStyle;
    constructor();
    startPlay(): void;
    update(): void;
}
