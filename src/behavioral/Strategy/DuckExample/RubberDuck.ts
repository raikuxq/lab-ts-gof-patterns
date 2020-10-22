import AbstractDuck from "./AbstractDuck";
import IFlyBehavior from "./interface/IFlyBehavior";
import IQuackBehavior from "./interface/IQuackBehavior";
import FlyNoWayStrategy from "./strategy-fly/FlyNoWayStrategy";
import QuackLoudStrategy from "./strategy-quack/QuackLoudStrategy";

export default class RubberDuck extends AbstractDuck {

  protected _flyBehavior: IFlyBehavior;
  protected _quackBehavior: IQuackBehavior;

  public constructor() {
    super();
    this._flyBehavior = new FlyNoWayStrategy();
    this._quackBehavior = new QuackLoudStrategy();
  }
}
