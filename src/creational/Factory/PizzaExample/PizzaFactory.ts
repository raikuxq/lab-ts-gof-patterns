import IPizzaFactory from "./IPizzaFactory";
import IPizza from "./IPizza";

import CheesePizza from "./pizza/CheesePizza";
import PepperoniPizza from "./pizza/PepperoniPizza";

export default class PizzaFactory implements IPizzaFactory {

  createPizza(type: string): IPizza {
    switch (type) {
      case 'cheese': return new CheesePizza();
      case 'pepperoni': return new PepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
