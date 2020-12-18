import AbstractPizza from "../AbstractPizza";

export default class PepperoniPizza extends AbstractPizza {

  private _name: string = 'Pepperoni pizza';
  private _sauce: string = 'Pepperoni sauce';
  private _dough: string = 'Pepperoni dough';

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
