import AbstractPizza from "../AbstractPizza";

export default class CheesePizza extends AbstractPizza {

  private _name: string = 'Cheese pizza';
  private _sauce: string = 'Cheese sauce';
  private _dough: string = 'Cheese dough';

  public constructor() {
    super();
  }

  get name(): string {
    return this._name;
  }

  get sauce(): string {
    return this._sauce;
  }

  get dough(): string {
    return this._dough;
  }
}
