import IPizza from "../IPizza";
import PizzaType from "../PizzaType";
import AbstractPizzaStore from "../AbstractPizzaStore";
import NYStyleCheesePizza from "../pizza/style/NY/NYStyleCheesePizza";
import NYStylePepperoniPizza from "../pizza/style/NY/NYStylePepperoniPizza";
import NYStyleFarmPizza from "../pizza/style/NY/NYStyleFarmPizza";

export default class NYPizzaStore extends AbstractPizzaStore {

  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new NYStyleCheesePizza();
      case PizzaType.Pepperoni: return new NYStylePepperoniPizza();
      case PizzaType.Farm: return new NYStyleFarmPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
