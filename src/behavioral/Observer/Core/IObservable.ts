import IObserver from "./IObserver";

export default interface IObservable<T> {
  addObserver(observer: IObserver<T>): void;
  removeObserver(observer: IObserver<T>): void;
  notify(context: T): void;
}
