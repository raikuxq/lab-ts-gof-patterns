import AbstractIngredientStyle from "../AbstractIngredientStyle";
import CheeseSauce from "../ingredient/sauce/CheeseSauce";
import FatDough from "../ingredient/dough/FatDough";
import AbstractDough from "../ingredient/AbstractDough";
import AbstractSauce from "../ingredient/AbstractSauce";
import AbstractCheese from "../ingredient/AbstractCheese";
import MozzarellaCheese from "../ingredient/cheese/MozzarellaCheese";

export default class ChicagoIngredientStyle extends AbstractIngredientStyle {

  public createDough(): AbstractDough {
    return new FatDough();
  }

  public createSauce(): AbstractSauce {
    return new CheeseSauce();
  }

  public createCheese(): AbstractCheese {
    return new MozzarellaCheese();
  }
}
