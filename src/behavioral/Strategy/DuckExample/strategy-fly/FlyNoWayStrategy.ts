import IFlyBehavior from "../interface/IFlyBehavior";

export default class FlyNoWayStrategy implements IFlyBehavior {
  public fly(): string {
    return "CANNOT_FLY";
  }
}
