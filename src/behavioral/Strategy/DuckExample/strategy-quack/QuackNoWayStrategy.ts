import IQuackBehavior from "../interface/IQuackBehavior";

export default class QuackNoWayStrategy implements IQuackBehavior {

  public quack(): string {
    return "QUACK_NO_WAY";
  }
}
