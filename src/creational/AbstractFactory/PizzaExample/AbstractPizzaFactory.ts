import IPizzaFactory from "./IPizzaFactory";
import IPizza from "./IPizza";

import CheesePizza from "./pizza/CheesePizza";
import PepperoniPizza from "./pizza/PepperoniPizza";
import PizzaType from "./PizzaType";

export default abstract class AbstractPizzaFactory implements IPizzaFactory {
  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new CheesePizza();
      case PizzaType.Pepperoni: return new PepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
