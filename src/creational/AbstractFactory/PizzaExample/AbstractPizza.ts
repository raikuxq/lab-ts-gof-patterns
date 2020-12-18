import IPizza from "./IPizza";

export default abstract class AbstractPizza implements IPizza {

  public abstract dough: string;
  public abstract name: string;
  public abstract sauce: string;

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
