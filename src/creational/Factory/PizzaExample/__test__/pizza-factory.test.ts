import PizzaStore from "../PizzaStore";
import CheesePizza from "../pizza/CheesePizza";
import PepperoniPizza from "../pizza/PepperoniPizza";

describe("Pizza factory", () => {

  describe("should create different types of pizza", () => {
    const store = new PizzaStore();

    describe('should create cheese pizza', () => {
      const pizza = store.orderPizza('cheese');

      test('should be instance of correct class', () => {
        expect(pizza).toBeInstanceOf(CheesePizza);
      });
      test('should have correct name', () => {
        expect(pizza.name).toBe('Cheese pizza')
      });
    });


    describe('should create pepperoni pizza', () => {
      const pizza = store.orderPizza('pepperoni');

      test('should be instance of correct class', () => {
        expect(pizza).toBeInstanceOf(PepperoniPizza);
      });
      test('should have correct name', () => {
        expect(pizza.name).toBe('Pepperoni pizza')
      });
    });
  });

});
