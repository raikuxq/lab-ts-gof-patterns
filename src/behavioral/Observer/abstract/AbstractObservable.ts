import IObservable from "../interface/IObservable";
import IObserver from "../interface/IObserver";

export default abstract class AbstractObservable<T> implements IObservable<T> {

  private readonly _observers: Array<IObserver<T>>;

  protected constructor() {
    this._observers = new Array<IObserver<T>>();
  }

  public addObserver(observer: IObserver<T>): void {
    this._observers.push(observer);
  }

  public removeObserver(observer: IObserver<T>): void {
    const indexToRemove = this._observers.findIndex(sub => sub === observer);

    if (indexToRemove !== null) {
      this._observers.splice(indexToRemove, 1);
    }
  }

  public notify(context: T): void {
    this._observers.forEach(sub => {
      sub.update(context);
    });
  }

}
