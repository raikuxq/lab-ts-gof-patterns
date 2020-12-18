import AbstractPizzaFactory from "../AbstractPizzaFactory";
import IPizza from "../IPizza";
import ChicagoStyleCheesePizza from "../style/Chicago/ChicagoStyleCheesePizza";
import ChicagoStylePepperoniPizza from "../style/Chicago/ChicagoStylePepperoniPizza";
import PizzaType from "../PizzaType";

export default class ChicagoPizzaFactory extends AbstractPizzaFactory {
  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new ChicagoStyleCheesePizza();
      case PizzaType.Pepperoni: return new ChicagoStylePepperoniPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
