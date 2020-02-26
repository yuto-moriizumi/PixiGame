export default class Tween {
    constructor(object: any, property: string, target: number, time: number, easing: (t: number) => number, change: (tween: Tween) => void | null, complete: (tween: Tween) => void | null);
    static update(): void;
    static backout(amount: number): (t: number) => number;
    static lerp(a1: number, a2: number, t: number): number;
}
