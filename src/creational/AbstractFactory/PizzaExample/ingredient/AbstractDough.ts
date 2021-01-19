export default abstract class AbstractDough {
  protected abstract _name: string;

  protected constructor() {}

  public get name(): string {
    return this._name;
  }
}
