import AbstractBeverageDecorator from "../decorator/AbstractBeverageDecorator";
import IBeverage from "../interface/IBeverage";

export default class CinnamonCondiment extends AbstractBeverageDecorator {

  public constructor(wrappedComponent: IBeverage) {
    super(wrappedComponent);
  }

  description(): string {
    return `${this._wrappedComponent.description()}_WITH_CINNAMON`;
  }
}
