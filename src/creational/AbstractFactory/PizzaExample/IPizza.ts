import AbstractSauce from "./ingredient/AbstractSauce";
import AbstractDough from "./ingredient/AbstractDough";
import AbstractCheese from "./ingredient/AbstractCheese";

export default interface IPizza {
  name: string;
  dough: AbstractDough;
  sauce: AbstractSauce;
  cheese: AbstractCheese;
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}
