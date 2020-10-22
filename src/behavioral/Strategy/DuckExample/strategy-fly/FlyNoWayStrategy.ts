import IFlyBehavior from "../interface/IFlyBehavior";

export default class FlyNoWayStrategy implements IFlyBehavior {
  public fly(): string {
    const message: string = "CANNOT_FLY";
    console.log(message);
    return message;
  }
}
