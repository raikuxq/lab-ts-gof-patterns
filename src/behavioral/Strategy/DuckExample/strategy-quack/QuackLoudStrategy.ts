import IQuackBehavior from "../interface/IQuackBehavior";

export default class QuackLoudStrategy implements IQuackBehavior {
  public quack() {
    const message: string = "QUACK_LOUD";
    console.log(message);
    return message;  }
}
