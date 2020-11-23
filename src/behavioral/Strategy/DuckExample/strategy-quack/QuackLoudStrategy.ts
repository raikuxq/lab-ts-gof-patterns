import IQuackBehavior from "../interface/IQuackBehavior";

export default class QuackLoudStrategy implements IQuackBehavior {

  public quack(): string {
    return "QUACK_LOUD";
  }
}
