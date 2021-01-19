import AbstractPizza from "../AbstractPizza";

export default class PepperoniPizza extends AbstractPizza {

  _name: string = 'Pepperoni pizza';
  _sauce: string = 'Garlic sauce';
  _dough: string = 'Fat dough';

  public constructor() {
    super();
  }
}
