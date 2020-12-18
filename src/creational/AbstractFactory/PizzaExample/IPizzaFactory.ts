import IPizza from "./IPizza";
import PizzaType from "./PizzaType";

export default interface IPizzaFactory {
  createPizza(type: PizzaType): IPizza;
}
