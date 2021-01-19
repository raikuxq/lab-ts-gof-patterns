import CheesePizza from "../pizza/CheesePizza";
import NYPizzaStore from "../store/NYPizzaStore";
import ChicagoPizzaStore from "../store/ChicagoPizzaStore";
import PizzaType from "../PizzaType";
import NYStyleCheesePizza from "../pizza/style/NY/NYStyleCheesePizza";
import ChicagoStyleCheesePizza from "../pizza/style/Chicago/ChicagoStyleCheesePizza";
import NYStylePepperoniPizza from "../pizza/style/NY/NYStylePepperoniPizza";
import PepperoniPizza from "../pizza/PepperoniPizza";
import ChicagoStylePepperoniPizza from "../pizza/style/Chicago/ChicagoStylePepperoniPizza";

describe("Pizza factory", () => {

  describe("should create different types of pizza in multiple stores", () => {
    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    describe('should create cheese pizza', () => {

      describe('in NY store', () => {
        const pizza = nyStore.orderPizza(PizzaType.Cheese);

        test('should be instance of correct style', () => {
          expect(pizza).toBeInstanceOf(NYStyleCheesePizza);
        });
        test('should be instance of cheese pizza class', () => {
          expect(pizza).toBeInstanceOf(CheesePizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('NY style cheese pizza');
        });
      });

      describe('in Chicago store', () => {
        const pizza = chicagoStore.orderPizza(PizzaType.Cheese);

        test('should be instance of correct style', () => {
          expect(pizza).toBeInstanceOf(ChicagoStyleCheesePizza);
        });
        test('should be instance of cheese pizza class', () => {
          expect(pizza).toBeInstanceOf(CheesePizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('Chicago style cheese pizza');
        });
      });

    });



    describe('should create pepperoni pizza', () => {

      describe('in NY store', () => {
        const pizza = nyStore.orderPizza(PizzaType.Pepperoni);

        test('should be instance of correct style', () => {
          expect(pizza).toBeInstanceOf(NYStylePepperoniPizza);
        });
        test('should be instance of pepperoni pizza class', () => {
          expect(pizza).toBeInstanceOf(PepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('NY style pepperoni pizza');
        });
      });

      describe('in Chicago store', () => {
        const pizza = chicagoStore.orderPizza(PizzaType.Pepperoni);

        test('should be instance of correct style', () => {
          expect(pizza).toBeInstanceOf(ChicagoStylePepperoniPizza);
        });
        test('should be instance of pepperoni pizza class', () => {
          expect(pizza).toBeInstanceOf(PepperoniPizza);
        });
        test('should have correct name', () => {
          expect(pizza.name).toBe('Chicago style pepperoni pizza');
        });
      });

    });


  });
});
