import AbstractPizza from "../AbstractPizza";
import CheeseSauce from "../ingridient/sauce/CheeseSauce";
import AbstractSauce from "../ingridient/AbstractSauce";
import AbstractDough from "../ingridient/AbstractDough";
import FatDough from "../ingridient/dough/FatDough";

export default class CheesePizza extends AbstractPizza {

  protected _name: string = 'Cheese pizza';
  protected _sauce: AbstractSauce = new CheeseSauce();
  protected _dough: AbstractDough = new FatDough();

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
