import IPizza from "../IPizza";
import PizzaType from "../PizzaType";
import AbstractPizzaStore from "../AbstractPizzaStore";
import DetroitStyleCheesePizza from "../pizza/style/Detroit/DetroitStyleCheesePizza";
import DetroitStylePepperoniPizza from "../pizza/style/Detroit/DetroitStylePepperoniPizza";
import DetroitStyleFarmPizza from "../pizza/style/Detroit/DetroitStyleFarmPizza";

export default class DetroitPizzaStore extends AbstractPizzaStore {

  createPizza(type: PizzaType): IPizza {
    switch (type) {
      case PizzaType.Cheese: return new DetroitStyleCheesePizza();
      case PizzaType.Pepperoni: return new DetroitStylePepperoniPizza();
      case PizzaType.Farm: return new DetroitStyleFarmPizza();
      default: throw new Error("Unexpected pizza type");
    }
  }
}
