import AbstractBeverageDecorator from "../decorator/AbstractBeverageDecorator";
import IBeverage from "../interface/IBeverage";

export default class MilkCondiment extends AbstractBeverageDecorator {

  public constructor(wrappedComponent: IBeverage) {
    super(wrappedComponent);
  }

  public description(): string {
    return `${this._wrappedComponent.description()}_WITH_MILK`;
  }
}
