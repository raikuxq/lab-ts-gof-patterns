import IPizza from "./IPizza";
import AbstractDough from "./ingridient/AbstractDough";
import AbstractSauce from "./ingridient/AbstractSauce";

export default abstract class AbstractPizza implements IPizza {

  public abstract name: string;
  public abstract dough: AbstractDough;
  public abstract sauce: AbstractSauce;

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
