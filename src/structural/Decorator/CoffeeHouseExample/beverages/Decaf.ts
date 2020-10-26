import IBeverage from "../interface/IBeverage";

export default class Decaf implements IBeverage{
  public cost(): number {
    return 5;
  }

  public description(): string {
    return "BEVERAGE_DECAF";
  }
}
