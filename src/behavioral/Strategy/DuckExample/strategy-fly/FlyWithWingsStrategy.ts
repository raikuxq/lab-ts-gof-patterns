import IFlyBehavior from "../interface/IFlyBehavior";

export default class FlyWithWingsStrategy implements IFlyBehavior {
  public fly(): string {
    return "FLY_WITH_WINGS";
  }
}
