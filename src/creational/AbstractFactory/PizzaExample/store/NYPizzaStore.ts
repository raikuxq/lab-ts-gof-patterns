import AbstractPizzaStore from "../AbstractPizzaStore";
import PizzaType from "../PizzaType";
import IPizza from "../IPizza";
import NYIngredientStyle from "../ingredientStyle/NYIngredientStyle";
import PepperoniPizza from "../pizza/PepperoniPizza";
import CheesePizza from "../pizza/CheesePizza";

export default class NYPizzaStore extends AbstractPizzaStore {
  createPizza(type: PizzaType): IPizza {
    const ingredientStyle = new NYIngredientStyle();

    switch (type) {
      case PizzaType.Pepperoni:
        return new PepperoniPizza(ingredientStyle, 'Pepperoni Pizza in NY Style');
      case PizzaType.Cheese:
        return new CheesePizza(ingredientStyle, 'Cheese Pizza in NY Style');
      default: throw new Error("unexpected pizza type")
    }
  }
}
