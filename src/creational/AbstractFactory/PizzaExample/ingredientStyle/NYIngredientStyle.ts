import AbstractIngredientStyle from "../AbstractIngredientStyle";
import AbstractDough from "../ingredient/AbstractDough";
import AbstractSauce from "../ingredient/AbstractSauce";
import AbstractCheese from "../ingredient/AbstractCheese";
import ThinDough from "../ingredient/dough/ThinDough";
import GarlicSauce from "../ingredient/sauce/GarlicSauce";
import MascarponeCheese from "../ingredient/cheese/MascarponeCheese";

export default class NYIngredientStyle extends AbstractIngredientStyle {

  public createDough(): AbstractDough {
    return new ThinDough();
  }

  public createSauce(): AbstractSauce {
    return new GarlicSauce();
  }

  public createCheese(): AbstractCheese {
    return new MascarponeCheese();
  }
}
