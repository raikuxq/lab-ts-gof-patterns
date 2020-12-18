import AbstractPizzaFactory from "../AbstractPizzaFactory";
import IPizza from "../IPizza";
import NYStyleCheesePizza from "../style/NY/NYStyleCheesePizza";
import NYStylePepperoniPizza from "../style/NY/NYStylePepperoniPizza";

export default class NYPizzaFactory extends AbstractPizzaFactory {
  createPizza(type: string): IPizza {
    switch (type) {
      case 'cheese': return new NYStyleCheesePizza();
      case 'pepperoni': return new NYStylePepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
