import IBeverage from "../interface/IBeverage";

export default abstract class AbstractBeverageDecorator implements IBeverage {

  protected _wrappedComponent: IBeverage;

  protected constructor(wrappedComponent: IBeverage) {
    this._wrappedComponent = wrappedComponent;
  }

  public description(): string {
    return this._wrappedComponent.description();
  };

  public cost(): number {
    return this._wrappedComponent.cost();
  }
}



