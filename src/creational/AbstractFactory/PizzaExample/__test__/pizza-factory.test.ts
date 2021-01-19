import PizzaType from "../PizzaType";
import CheesePizza from "../pizza/CheesePizza";
import PepperoniPizza from "../pizza/PepperoniPizza";
import GarlicSauce from "../ingredient/sauce/GarlicSauce";
import FatDough from "../ingredient/dough/FatDough";
import CheeseSauce from "../ingredient/sauce/CheeseSauce";
import ThinDough from "../ingredient/dough/ThinDough";
import NYPizzaStore from "../store/NYPizzaStore";
import ChicagoPizzaStore from "../store/ChicagoPizzaStore";

describe("Pizza abstract factory", () => {

  describe("should create different types of styles", () => {
    const storeNY = new NYPizzaStore();
    const storeChicago = new ChicagoPizzaStore();

    describe('should create cheese pizza', () => {
      const pizzaNY = storeNY.orderPizza(PizzaType.Cheese);
      const pizzaChicago = storeChicago.orderPizza(PizzaType.Cheese);


      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(CheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('Cheese Pizza in NY Style')
        });
        test('should have correct sauce', () => {
          expect(pizzaNY.sauce).toBeInstanceOf(GarlicSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaNY.dough).toBeInstanceOf(ThinDough);
        });
      });

      describe('Chicago pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaChicago).toBeInstanceOf(CheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Cheese Pizza in Chicago Style')
        });
        test('should have correct sauce', () => {
          expect(pizzaChicago.sauce).toBeInstanceOf(CheeseSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaChicago.dough).toBeInstanceOf(FatDough);
        });
      });
    });

    describe('should create pepperoni pizza', () => {
      const pizzaNY = storeNY.orderPizza(PizzaType.Pepperoni);
      const pizzaChicago = storeChicago.orderPizza(PizzaType.Pepperoni);

      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(PepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('Pepperoni Pizza in NY Style')
        });
        test('should have correct sauce', () => {
          expect(pizzaNY.sauce).toBeInstanceOf(GarlicSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaNY.dough).toBeInstanceOf(ThinDough);
        });
      });

      describe('Chicago pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaChicago).toBeInstanceOf(PepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Pepperoni Pizza in Chicago Style')
        });
        test('should have correct sauce', () => {
          expect(pizzaChicago.sauce).toBeInstanceOf(CheeseSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaChicago.dough).toBeInstanceOf(FatDough);
        });
      });
    });
  });
});
