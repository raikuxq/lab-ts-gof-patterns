import IPizza from "./IPizza";

export default interface IPizzaFactory {
  createPizza(type: string): IPizza;
}
