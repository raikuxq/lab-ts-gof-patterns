import CheesePizza from "../../pizza/CheesePizza";
import GarlicSauce from "../../ingridient/sauce/GarlicSauce";

export default class NYStyleCheesePizza extends CheesePizza {
  protected _name = 'NY style cheese pizza';
  protected _sauce = new GarlicSauce();
}
