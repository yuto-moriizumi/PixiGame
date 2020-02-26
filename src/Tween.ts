export default class Tween {
  constructor(
    object: any,
    property: string,
    target: number,
    time: number,
    easing: (t: number) => number,
    change: (tween: Tween) => void | null,
    complete: (tween: Tween) => void | null
  ) {}

  public static update(): void {}
  public static backout(amount: number): (t: number) => number {
    return (t: number) => 0;
  }
  public static lerp(a1: number, a2: number, t: number): number {
    return 0;
  }
}
