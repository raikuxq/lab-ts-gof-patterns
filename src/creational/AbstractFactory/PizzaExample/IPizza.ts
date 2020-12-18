export default interface IPizza {
  name: string;
  dough: string;
  sauce: string;
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}
