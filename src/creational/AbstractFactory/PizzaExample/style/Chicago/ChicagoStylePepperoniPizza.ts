import PepperoniPizza from "../../pizza/PepperoniPizza";
import FatDough from "../../ingridient/dough/FatDough";

export default class ChicagoStylePepperoniPizza extends PepperoniPizza {
  protected _name = 'Chicago style pepperoni pizza';
  protected _dough = new FatDough();
}
