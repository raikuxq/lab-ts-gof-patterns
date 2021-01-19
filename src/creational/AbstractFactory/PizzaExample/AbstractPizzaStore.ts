import IPizza from "./IPizza";
import PizzaType from "./PizzaType";
import IPizzaFactory from "./IPizzaFactory";

export default abstract class AbstractPizzaStore implements IPizzaFactory{

  public abstract createPizza(type: PizzaType): IPizza;

  public orderPizza(type: PizzaType): IPizza {
    const pizza: IPizza = this.createPizza(type);
    console.log("making a " + pizza.name + "::");

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
