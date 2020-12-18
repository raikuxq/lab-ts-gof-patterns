import PizzaStore from "../PizzaStore";
import NYPizzaFactory from "../factory/NYPizzaFactory";
import ChicagoPizzaFactory from "../factory/ChicagoPizzaFactory";
import NYStyleCheesePizza from "../style/NY/NYStyleCheesePizza";
import ChicagoStyleCheesePizza from "../style/Chicago/ChicagoStyleCheesePizza";
import NYStylePepperoniPizza from "../style/NY/NYStylePepperoniPizza";
import ChicagoStylePepperoniPizza from "../style/Chicago/ChicagoStylePepperoniPizza";

describe("Pizza abstract factory", () => {

  describe("should create different types of categories", () => {
    const storeNY = new PizzaStore(new NYPizzaFactory());
    const storeChicago = new PizzaStore(new ChicagoPizzaFactory());

    describe('should create cheese pizza', () => {
      const pizzaNY = storeNY.orderPizza('cheese');
      const pizzaChicago = storeChicago.orderPizza('cheese');

      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(NYStyleCheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('NY style cheese pizza')
        });
      });

      describe('Chicago pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaChicago).toBeInstanceOf(ChicagoStyleCheesePizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Chicago style cheese pizza')
        });
      });
    });

    describe('should create pepperoni pizza', () => {
      const pizzaNY = storeNY.orderPizza('pepperoni');
      const pizzaChicago = storeChicago.orderPizza('pepperoni');

      describe('NY pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaNY).toBeInstanceOf(NYStylePepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaNY.name).toBe('NY style pepperoni pizza')
        });
      });

      describe('Chicago pizza', () => {
        test('should be instance of correct class', () => {
          expect(pizzaChicago).toBeInstanceOf(ChicagoStylePepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizzaChicago.name).toBe('Chicago style pepperoni pizza')
        });
      });
    });
  });
});
