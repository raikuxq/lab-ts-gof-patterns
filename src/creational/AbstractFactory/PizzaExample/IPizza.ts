import AbstractSauce from "./ingridient/AbstractSauce";
import AbstractDough from "./ingridient/AbstractDough";

export default interface IPizza {
  name: string;
  dough: AbstractDough;
  sauce: AbstractSauce;
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}
