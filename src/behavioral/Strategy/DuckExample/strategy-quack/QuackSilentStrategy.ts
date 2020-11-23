import IQuackBehavior from "../interface/IQuackBehavior";

export default class QuackSilentStrategy implements IQuackBehavior {

  public quack(): string {
    return "QUACK_SILENT";
  }
}
