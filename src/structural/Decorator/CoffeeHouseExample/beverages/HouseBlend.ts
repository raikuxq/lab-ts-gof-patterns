import IBeverage from "../interface/IBeverage";

export default class HouseBlend implements IBeverage {
  public cost(): number {
    return 20;
  }

  public description(): string {
    return "BEVERAGE_HOUSEBLEND";
  }
}
