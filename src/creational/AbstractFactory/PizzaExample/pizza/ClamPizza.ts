import AbstractPizza from "../AbstractPizza";
import AbstractIngredientStyle from "../AbstractIngredientStyle";
import AbstractDough from "../ingredient/AbstractDough";
import AbstractSauce from "../ingredient/AbstractSauce";
import AbstractCheese from "../ingredient/AbstractCheese";

export default class ClamPizza extends AbstractPizza {

  protected _dough: AbstractDough;
  protected _sauce: AbstractSauce;
  protected _cheese: AbstractCheese;
  protected _name: string;

  public constructor(style: AbstractIngredientStyle, name?: string) {
    super();
    this._name = name ? name : 'Clam Pizza'
    this._dough = style.createDough();
    this._sauce = style.createSauce();
    this._cheese = style.createCheese();
  }
}
