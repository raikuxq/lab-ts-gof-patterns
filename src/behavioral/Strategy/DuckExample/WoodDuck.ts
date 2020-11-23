import AbstractDuck from "./AbstractDuck";
import IFlyBehavior from "./interface/IFlyBehavior";
import IQuackBehavior from "./interface/IQuackBehavior";
import FlyNoWayStrategy from "./strategy-fly/FlyNoWayStrategy";
import QuackNoWayStrategy from "./strategy-quack/QuackNoWayStrategy";

export default class WoodDuck extends AbstractDuck {

  protected _flyBehavior: IFlyBehavior;
  protected _quackBehavior: IQuackBehavior;

  public constructor() {
    super();
    this._flyBehavior = new FlyNoWayStrategy();
    this._quackBehavior = new QuackNoWayStrategy();
  }
}
