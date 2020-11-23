import ChocolateBoiler from "../ChocolateBoiler";

describe("chocolate boiler", () => {

  describe("should have common state", () => {
    const boiler1: ChocolateBoiler = ChocolateBoiler.getInstance();
    const boiler2: ChocolateBoiler = ChocolateBoiler.getInstance();

    boiler1.fill();
    boiler1.boil();

    test("should have same instance", () => {
      expect(boiler1).toBe(boiler2);
    });

    test("should have filled state", () => {
      expect(boiler2.isEmpty).toBe(false);
    });

    test("should have boiled state", () => {
      expect(boiler2.isBoiled).toBe(true);
    });
  });
});
