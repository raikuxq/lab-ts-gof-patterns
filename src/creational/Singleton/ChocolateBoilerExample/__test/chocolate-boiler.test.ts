import ChocolateBoiler from "../ChocolateBoiler";

describe("chocolate boiler", () => {

  const boiler1: ChocolateBoiler = ChocolateBoiler.getInstance();
  const boiler2: ChocolateBoiler = ChocolateBoiler.getInstance();

  describe("multiple objects", () => {
    test("should have same instance", () => {
      expect(boiler1).toBe(boiler2);
    });

    describe("should have common state", () => {
      boiler1.fill();
      boiler1.boil();

      test("first boiler should be filled", () => {
        expect(boiler1.isEmpty).toBe(false);
      });
      test("second boiler should be filled", () => {
        expect(boiler2.isEmpty).toBe(false);
      });
      test("first boiler should be boiled", () => {
        expect(boiler1.isBoiled).toBe(true);
      });
      test("second boiler should be boiled", () => {
        expect(boiler2.isBoiled).toBe(true);
      });
    });
  });
});
