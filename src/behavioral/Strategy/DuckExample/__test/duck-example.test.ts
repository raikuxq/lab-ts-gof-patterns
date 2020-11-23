import AbstractDuck from "../AbstractDuck";
import MallardDuck from "../MallardDuck";
import RubberDuck from "../RubberDuck";
import FlyNoWayStrategy from "../strategy-fly/FlyNoWayStrategy";
import QuackSilentStrategy from "../strategy-quack/QuackSilentStrategy";
import WoodDuck from "../WoodDuck";

describe("ducks behavior", () => {

  describe("check fly strategy by duck type", () => {
    const mallardDuck: AbstractDuck = new MallardDuck();
    const rubberDuck: AbstractDuck = new RubberDuck();
    const woodDuck: AbstractDuck = new WoodDuck();

    test("mallard duck should fly with wings", () => {
      expect(mallardDuck.performFly()).toBe("FLY_WITH_WINGS");
    });
    test("rubber duck should fly with wings", () => {
      expect(rubberDuck.performFly()).toBe("CANNOT_FLY");
    });
    test("wood duck should not fly", () => {
      expect(woodDuck.performFly()).toBe("CANNOT_FLY");
    });
  });

  describe("check quack strategy by duck type", () => {
    const mallardDuck: AbstractDuck = new MallardDuck();
    const rubberDuck: AbstractDuck = new RubberDuck();
    const woodDuck: AbstractDuck = new WoodDuck();

    test("mallard duck should quack silent", () => {
      expect(mallardDuck.performQuack()).toBe("QUACK_SILENT");
    });
    test("rubber duck should quack loud", () => {
      expect(rubberDuck.performQuack()).toBe("QUACK_LOUD");
    });
    test("wood duck should not quack", () => {
      expect(woodDuck.performQuack()).toBe("QUACK_NO_WAY");
    });
  });

  describe("should be possible to switch fly strategy", () => {
    const duck: AbstractDuck = new MallardDuck();

    test("should switch fly strategy", () => {
      duck.flyBehavior = new FlyNoWayStrategy();

      expect(duck.performFly()).toBe("CANNOT_FLY");
    });
  });

  describe("should be possible to switch quack strategy", () => {
    const duck: AbstractDuck = new MallardDuck();

    test("should switch quack strategy", () => {
      duck.quackBehavior = new QuackSilentStrategy();

      expect(duck.performQuack()).toBe("QUACK_SILENT");
    });
  });
})
