import AbstractPizzaStore from "../AbstractPizzaStore";
import PizzaType from "../PizzaType";
import IPizza from "../IPizza";
import DetroitIngredientStyle from "../ingredientStyle/DetroitIngedientStyle";
import PepperoniPizza from "../pizza/PepperoniPizza";
import CheesePizza from "../pizza/CheesePizza";

export default class DetroitPizzaStore extends AbstractPizzaStore {
  createPizza(type: PizzaType): IPizza {
    const ingredientStyle = new DetroitIngredientStyle();

    switch (type) {
      case PizzaType.Pepperoni:
        return new PepperoniPizza(ingredientStyle, 'Pepperoni Pizza in Detroit Style');
      case PizzaType.Cheese:
        return new CheesePizza(ingredientStyle, 'Cheese Pizza in Detroit Style');
      default: throw new Error("unexpected pizza type")
    }
  }
}
