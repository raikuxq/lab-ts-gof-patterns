import IBeverage from "../interface/IBeverage";
import Espresso from "../beverages/Espresso";
import MilkCondiment from "../condiment/MilkCondiment";
import SoyCondiment from "../condiment/SoyCondiment";
import MochaCondiment from "../condiment/MochaCondiment";

describe("Coffee House", () => {

  describe("coffee multiple condiments", () => {

    let espresso: IBeverage = new Espresso();

    espresso = new MilkCondiment(espresso);
    espresso = new SoyCondiment(espresso);
    espresso = new MochaCondiment(espresso);

    test("should have milk condiment", () => {
      expect(espresso.description()).toContain("_WITH_MILK");
    });

    test("should have soy condiment", () => {
      expect(espresso.description()).toContain("_WITH_SOY");
    });

    test("should have mocha condiment", () => {
      expect(espresso.description()).toContain("_WITH_MOCHA");
    });

    test("should have condiments in right order", () => {
      expect(espresso.description()).toBe("BEVERAGE_ESPRESSO_WITH_MILK_WITH_SOY_WITH_MOCHA");
    })

  });

});
