import IPizza from "./IPizza";
import IPizzaFactory from "./IPizzaFactory";

export default class PizzaStore {
  private _factory: IPizzaFactory;

  public constructor(factory: IPizzaFactory) {
    this._factory = factory;
  }

  public orderPizza(type: string): IPizza {
    let pizza: IPizza = this._factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
