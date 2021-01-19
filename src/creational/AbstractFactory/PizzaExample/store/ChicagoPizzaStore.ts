import AbstractPizzaStore from "../AbstractPizzaStore";
import PizzaType from "../PizzaType";
import IPizza from "../IPizza";
import ChicagoIngredientStyle from "../ingredientStyle/ChicagoIngredientStyle";
import PepperoniPizza from "../pizza/PepperoniPizza";
import CheesePizza from "../pizza/CheesePizza";

export default class ChicagoPizzaStore extends AbstractPizzaStore {
  createPizza(type: PizzaType): IPizza {
    const ingredientStyle = new ChicagoIngredientStyle();

    switch (type) {
      case PizzaType.Pepperoni:
        return new PepperoniPizza(ingredientStyle, 'Pepperoni Pizza in Chicago Style');
      case PizzaType.Cheese:
        return new CheesePizza(ingredientStyle, 'Cheese Pizza in Chicago Style');
      default: throw new Error("unexpected pizza type")
    }
  }
}
