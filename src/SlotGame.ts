import UI from "./UI";
import * as PIXI from "pixi.js";

export default class SlotGame {
  public static readonly width: number = 800;
  public static readonly height: number = 640;
  public static readonly resources: string[] = ["./brazil.png"];
  private app!: PIXI.Application;
  private ui!: UI;
  private onReady: () => void = () => {};
  constructor() {
    if (!document.body) {
      throw new Error("window is not ready");
    }
    this.app = new PIXI.Application({
      width: SlotGame.width,
      height: SlotGame.height,
      backgroundColor: 0x1099bb
    });
    document.body.appendChild(this.app.view);
    for (const resource of SlotGame.resources) {
      this.app.loader.add(resource);
    }
    this.app.loader.load(() => {
      this.ui = new UI();
      this.onReady();
    });
  }
  public start(): void {
    if (!this.ui) {
      this.onReady = () => this.start();
      return;
    }
    this.app.stage.addChild(this.ui);
    this.app.ticker.add(() => {
      this.ui.update();
    });
  }
}
