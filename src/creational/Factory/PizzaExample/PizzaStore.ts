import IPizza from "./IPizza";
import IPizzaFactory from "./IPizzaFactory";
import PizzaFactory from "./PizzaFactory";

export default class PizzaStore {
  private factory: IPizzaFactory = new PizzaFactory();

  public constructor() {}

  public orderPizza(type: string): IPizza {
    let pizza: IPizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
