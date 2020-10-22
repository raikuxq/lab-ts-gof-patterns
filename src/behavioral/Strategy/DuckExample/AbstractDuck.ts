import IQuackBehavior from "./interface/IQuackBehavior";
import IFlyBehavior from "./interface/IFlyBehavior";

export default abstract class AbstractDuck {

  protected abstract _quackBehavior: IQuackBehavior;
  protected abstract _flyBehavior: IFlyBehavior;

  public set quackBehavior(behavior: IQuackBehavior) {
    this._quackBehavior = behavior;
  }

  public set flyBehavior(behavior: IFlyBehavior) {
    this._flyBehavior = behavior;
  }

  public performQuack(): string {
    return this._quackBehavior.quack();
  }

  public performFly(): string {
    return this._flyBehavior.fly();
  }
}
