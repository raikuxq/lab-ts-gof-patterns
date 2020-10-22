import AbstractDuck from "./AbstractDuck";
import IFlyBehavior from "./interface/IFlyBehavior";
import IQuackBehavior from "./interface/IQuackBehavior";
import FlyWithWingsStrategy from "./strategy-fly/FlyWithWingsStrategy";
import QuackSilentStrategy from "./strategy-quack/QuackSilentStrategy";

export default class MallardDuck extends AbstractDuck {

  protected _flyBehavior: IFlyBehavior;
  protected _quackBehavior: IQuackBehavior;

  public constructor() {
    super();
    this._flyBehavior = new FlyWithWingsStrategy();
    this._quackBehavior = new QuackSilentStrategy();
  }
}
