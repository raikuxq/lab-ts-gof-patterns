import AbstractObservable from "../Core/AbstractObservable";
import IWeatherData from "./interface/IWeatherData";
import IWeatherDataProvider from "./interface/IWeatherDataProvider";

export default class WeatherDataProvider extends AbstractObservable<IWeatherData> implements IWeatherDataProvider {

  private _temperature?: number;
  private _humble?: number;
  private _pressure?: number;

  public constructor() {
    super();
  }

  public get temperature(): number {
    if (this._temperature === undefined) {
      throw new Error("Temperature is not initialized");
    }
    return this._temperature;
  }

  public get humble(): number {
    if (this._humble === undefined) {
      throw new Error("Humble is not initialized");
    }
    return this._humble;
  }

  public get pressure(): number {
    if (this._pressure === undefined) {
      throw new Error("Pressure is not initialized");
    }
    return this._pressure;
  }

  public setMeasurements(temperature: number, humble: number, pressure: number) {
    this._temperature = temperature;
    this._humble = humble;
    this._pressure = pressure;
    this.measurementUpdated();
  }

  private measurementUpdated(): void {
    this.notify(this);
  }
}
