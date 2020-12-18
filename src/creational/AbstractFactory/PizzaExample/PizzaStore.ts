import IPizza from "./IPizza";
import IPizzaFactory from "./IPizzaFactory";
import StandardPizzaFactory from "./factory/StandardPizzaFactory";
import PizzaType from "./PizzaType";

export default class PizzaStore {
  private _factory: IPizzaFactory;

  public constructor(factory: IPizzaFactory = new StandardPizzaFactory()) {
    this._factory = factory;
  }

  public orderPizza(type: PizzaType): IPizza {
    let pizza: IPizza = this._factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
