import IPizza from "./IPizza";

export default abstract class AbstractPizza implements IPizza {

  protected abstract _dough: string;
  protected abstract _name: string;
  protected abstract _sauce: string;

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

  public get dough() {
    return this._dough;
  }

  public get sauce() {
    return this._sauce;
  }

  public get name() {
    return this._name;
  }
}
