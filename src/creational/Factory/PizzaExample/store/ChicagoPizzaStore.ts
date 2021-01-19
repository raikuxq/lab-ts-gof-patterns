import IPizza from "../IPizza";
import PizzaType from "../PizzaType";
import AbstractPizzaStore from "../AbstractPizzaStore";
import ChicagoStyleCheesePizza from "../pizza/style/Chicago/ChicagoStyleCheesePizza";
import ChicagoStylePepperoniPizza from "../pizza/style/Chicago/ChicagoStylePepperoniPizza";
import ChicagoStyleFarmPizza from "../pizza/style/Chicago/ChicagoStyleFarmPizza";

export default class ChicagoPizzaStore extends AbstractPizzaStore {

  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new ChicagoStyleCheesePizza();
      case PizzaType.Pepperoni: return new ChicagoStylePepperoniPizza();
      case PizzaType.Farm: return new ChicagoStyleFarmPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
