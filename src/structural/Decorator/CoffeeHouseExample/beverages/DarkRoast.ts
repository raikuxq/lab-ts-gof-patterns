import IBeverage from "../interface/IBeverage";

export default class DarkRoast implements IBeverage {
  public cost(): number {
    return 30;
  }

  public description(): string {
    return "BEVERAGE_DARKROAST";
  }
}
