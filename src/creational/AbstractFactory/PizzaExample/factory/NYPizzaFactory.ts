import AbstractPizzaFactory from "../AbstractPizzaFactory";
import IPizza from "../IPizza";
import NYStyleCheesePizza from "../style/NY/NYStyleCheesePizza";
import NYStylePepperoniPizza from "../style/NY/NYStylePepperoniPizza";
import PizzaType from "../PizzaType";

export default class NYPizzaFactory extends AbstractPizzaFactory {
  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new NYStyleCheesePizza();
      case PizzaType.Pepperoni: return new NYStylePepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
