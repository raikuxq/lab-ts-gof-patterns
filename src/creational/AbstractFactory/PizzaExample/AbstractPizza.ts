import IPizza from "./IPizza";
import AbstractDough from "./ingredient/AbstractDough";
import AbstractSauce from "./ingredient/AbstractSauce";
import AbstractCheese from "./ingredient/AbstractCheese";

export default abstract class AbstractPizza implements IPizza {

  protected abstract _name: string;
  protected abstract _dough: AbstractDough;
  protected abstract _sauce: AbstractSauce;
  protected abstract _cheese: AbstractCheese;

  protected constructor() {}

  public get name(): string {
    return this._name;
  }

  public get dough(): AbstractDough {
    return this._dough;
  }

  public get sauce(): AbstractSauce {
    return this._sauce;
  }

  public get cheese(): AbstractCheese {
    return this._cheese;
  }

  public prepare() {
    console.log('Action:Prepare');
  }

  public cut() {
    console.log('Action:Cut');
  }

  public box() {
    console.log('Action:Box');
  }

  public bake() {
    console.log('Action:Bake');
  }
}
