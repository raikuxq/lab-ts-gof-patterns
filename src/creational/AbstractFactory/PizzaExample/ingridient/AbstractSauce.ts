export default abstract class AbstractSauce {
  protected abstract _name: string;

  protected constructor() {}

  public get name(): string {
    return this._name;
  }
}
