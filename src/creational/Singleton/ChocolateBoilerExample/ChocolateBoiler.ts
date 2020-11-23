export default class ChocolateBoiler {

  private static _instance: ChocolateBoiler | null = null;

  private _isEmpty: boolean;
  private _isBoiled: boolean;

  private constructor() {
    this._isEmpty = true;
    this._isBoiled = false;
  }

  public static getInstance(): ChocolateBoiler {

    if (ChocolateBoiler._instance === null) {
      ChocolateBoiler._instance = new ChocolateBoiler();
    }

    return ChocolateBoiler._instance;
  }

  public fill(): void {
    if (this._isEmpty) {
      this._isEmpty = false;
      this._isBoiled = false;
    }
  }

  public drain(): void {
    if (!this._isEmpty && this._isBoiled) {
      this._isEmpty = true;
    }
  }

  public boil(): void {
    if (!this._isEmpty && !this._isBoiled) {
      this._isBoiled = true;
    }
  }

  public get isEmpty(): boolean {
    return this._isEmpty;
  }

  public get isBoiled(): boolean {
    return this._isBoiled;
  }
}
