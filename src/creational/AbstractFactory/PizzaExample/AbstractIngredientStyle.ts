import AbstractSauce from "./ingredient/AbstractSauce";
import AbstractDough from "./ingredient/AbstractDough";
import AbstractCheese from "./ingredient/AbstractCheese";

export default abstract class AbstractIngredientStyle {

  public abstract createSauce(): AbstractSauce;
  public abstract createDough(): AbstractDough;
  public abstract createCheese(): AbstractCheese;

}

