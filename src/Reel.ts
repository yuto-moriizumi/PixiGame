import * as PIXI from "pixi.js";
import SlotGame from "./SlotGame";

export default class Reel extends PIXI.Container {
  public static readonly WIDTH: number = 160;
  public static readonly SYMBOL_SIZE: number = 150;

  constructor(index: number) {
    super();
  }
  public update(): void {}
  private updateSymbol(symbol: PIXI.Sprite): void {}
}
