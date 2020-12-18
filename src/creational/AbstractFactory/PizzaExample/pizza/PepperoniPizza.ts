import AbstractPizza from "../AbstractPizza";
import AbstractSauce from "../ingridient/AbstractSauce";
import GarlicSauce from "../ingridient/sauce/GarlicSauce";
import AbstractDough from "../ingridient/AbstractDough";
import ThinDough from "../ingridient/dough/ThinDough";

export default class PepperoniPizza extends AbstractPizza {

  protected _name: string = 'Pepperoni pizza';
  protected _sauce: AbstractSauce = new GarlicSauce();
  protected _dough: AbstractDough = new ThinDough();

  public constructor() {
    super();
  }

  get name(): string {
    return this._name;
  }

  get sauce(): AbstractSauce {
    return this._sauce;
  }

  get dough(): AbstractDough {
    return this._dough;
  }
}
