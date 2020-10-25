export default interface IObserver<T> {
  update(context: T): void;
}
