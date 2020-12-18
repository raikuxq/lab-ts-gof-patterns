import PizzaStore from "../PizzaStore";
import NYPizzaFactory from "../factory/NYPizzaFactory";
import ChicagoPizzaFactory from "../factory/ChicagoPizzaFactory";
import NYStyleCheesePizza from "../style/NY/NYStyleCheesePizza";
import ChicagoStyleCheesePizza from "../style/Chicago/ChicagoStyleCheesePizza";
import NYStylePepperoniPizza from "../style/NY/NYStylePepperoniPizza";
import ChicagoStylePepperoniPizza from "../style/Chicago/ChicagoStylePepperoniPizza";
import PizzaType from "../PizzaType";
import CheesePizza from "../pizza/CheesePizza";
import PepperoniPizza from "../pizza/PepperoniPizza";
import GarlicSauce from "../ingridient/sauce/GarlicSauce";
import FatDough from "../ingridient/dough/FatDough";
import CheeseSauce from "../ingridient/sauce/CheeseSauce";
import ThinDough from "../ingridient/dough/ThinDough";

describe("Pizza abstract factory", () => {

  describe("should create different types of categories", () => {
    const store = new PizzaStore();
    const storeNY = new PizzaStore(new NYPizzaFactory());
    const storeChicago = new PizzaStore(new ChicagoPizzaFactory());

    describe('should create cheese pizza', () => {
      const pizza = store.orderPizza(PizzaType.Cheese);
      const pizzaNY = storeNY.orderPizza(PizzaType.Cheese);
      const pizzaChicago = storeChicago.orderPizza(PizzaType.Cheese);

      describe('default pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizza).toBeInstanceOf(CheesePizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('Cheese pizza')
        });
      });

      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(NYStyleCheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('NY style cheese pizza')
        });
        test('should have correct sauce', () => {
          expect(pizzaNY.sauce).toBeInstanceOf(GarlicSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaNY.dough).toBeInstanceOf(FatDough);
        });
      });

      describe('Chicago pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaChicago).toBeInstanceOf(ChicagoStyleCheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Chicago style cheese pizza')
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
      const pizza = store.orderPizza(PizzaType.Pepperoni)
      const pizzaNY = storeNY.orderPizza(PizzaType.Pepperoni);
      const pizzaChicago = storeChicago.orderPizza(PizzaType.Pepperoni);

      describe('default pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizza).toBeInstanceOf(PepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('Pepperoni pizza')
        });
        test('should have correct sauce', () => {
          expect(pizza.sauce).toBeInstanceOf(GarlicSauce);
        });
        test('should have correct dough', () => {
          expect(pizza.dough).toBeInstanceOf(ThinDough);
        });
      });

      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(NYStylePepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('NY style pepperoni pizza')
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
          expect(pizzaChicago).toBeInstanceOf(ChicagoStylePepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Chicago style pepperoni pizza')
        });
        test('should have correct sauce', () => {
          expect(pizzaChicago.sauce).toBeInstanceOf(GarlicSauce);
        });
        test('should have correct dough', () => {
          expect(pizzaChicago.dough).toBeInstanceOf(FatDough);
        });
      });
    });
  });
});
