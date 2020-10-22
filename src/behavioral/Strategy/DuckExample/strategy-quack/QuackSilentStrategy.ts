import IQuackBehavior from "../interface/IQuackBehavior";

export default class QuackSilentStrategy implements IQuackBehavior {
  public quack(): string {
    const message: string = "QUACK_SILENT";
    console.log(message);
    return message;
  }
}
