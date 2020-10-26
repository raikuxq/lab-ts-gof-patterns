import IBeverage from "../interface/IBeverage";

export default class Espresso implements IBeverage {

  public cost(): number {
    return 10;
  }

  public description(): string {
    return "BEVERAGE_ESPRESSO";
  }

}
