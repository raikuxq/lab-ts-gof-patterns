import AbstractIngredientStyle from "../AbstractIngredientStyle";
import CheeseSauce from "../ingredient/sauce/CheeseSauce";
import AbstractDough from "../ingredient/AbstractDough";
import AbstractSauce from "../ingredient/AbstractSauce";
import AbstractCheese from "../ingredient/AbstractCheese";
import MozzarellaCheese from "../ingredient/cheese/MozzarellaCheese";
import ThinDough from "../ingredient/dough/ThinDough";

export default class DetroitIngredientStyle extends AbstractIngredientStyle {

  public createDough(): AbstractDough {
    return new ThinDough();
  }

  public createSauce(): AbstractSauce {
    return new CheeseSauce();
  }

  public createCheese(): AbstractCheese {
    return new MozzarellaCheese();
  }
}
