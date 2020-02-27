import * as PIXI from "pixi.js";
export default class Reel extends PIXI.Container {
    static readonly WIDTH: number;
    static readonly SYMBOL_SIZE: number;
    index: number;
    previousIndex: number;
    constructor(index: number);
    update(): void;
    private updateSymbol;
    static get randomTexture(): PIXI.Texture;
    private static slotTextures;
    blur: PIXI.filters.BlurFilter;
}
