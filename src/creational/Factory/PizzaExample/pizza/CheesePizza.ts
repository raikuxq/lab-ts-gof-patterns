import AbstractPizza from "../AbstractPizza";

export default class CheesePizza extends AbstractPizza {

  _name: string = 'Cheese pizza';
  _sauce: string = 'Garlic sauce';
  _dough: string = 'Thin dough';

  public constructor() {
    super();
  }
}
