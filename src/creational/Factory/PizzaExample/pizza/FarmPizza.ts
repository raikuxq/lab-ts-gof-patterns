import AbstractPizza from "../AbstractPizza";

export default class FarmPizza extends AbstractPizza {

  _name: string = 'Farm pizza';
  _sauce: string = 'Cheese sauce';
  _dough: string = 'Fat dough';

  public constructor() {
    super();
  }
}
