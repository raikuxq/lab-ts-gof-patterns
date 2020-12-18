import AbstractPizzaFactory from "../AbstractPizzaFactory";
import IPizza from "../IPizza";
import ChicagoStyleCheesePizza from "../style/Chicago/ChicagoStyleCheesePizza";
import ChicagoStylePepperoniPizza from "../style/Chicago/ChicagoStylePepperoniPizza";

export default class ChicagoPizzaFactory extends AbstractPizzaFactory {
  createPizza(type: string): IPizza {
    switch (type) {
      case 'cheese': return new ChicagoStyleCheesePizza();
      case 'pepperoni': return new ChicagoStylePepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
