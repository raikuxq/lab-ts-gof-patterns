import IFlyBehavior from "../interface/IFlyBehavior";

export default class FlyWithWingsStrategy implements IFlyBehavior {
  public fly(): string {
    const message: string = "FLY_WITH_WINGS";
    console.log(message);
    return message;
  }
}
