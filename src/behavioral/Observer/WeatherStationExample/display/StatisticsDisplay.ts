import IWeatherDisplay from "../interface/IWeatherDisplay";
import IWeatherData from "../interface/IWeatherData";
import IObserver from "../../interface/IObserver";
import {getAverageInArray, getMinInArray, getMaxInArray} from "../../../../utils";

export default class StatisticsDisplay implements IObserver<IWeatherData>, IWeatherDisplay {

  private readonly _temperatureStats: Array<number>;
  private readonly _humbleStats: Array<number>;
  private readonly _pressureStats: Array<number>;

  public constructor() {
    this._temperatureStats = new Array<number>();
    this._humbleStats = new Array<number>();
    this._pressureStats = new Array<number>();
  }

  private getAverageTemperature(): number {
    return getAverageInArray(this._temperatureStats);
  }

  private getAverageHumble(): number {
    return getAverageInArray(this._humbleStats);
  }

  private getAveragePressure(): number {
    return getAverageInArray(this._pressureStats);
  }

  private getMinTemperature(): number {
    return getMinInArray(this._temperatureStats);
  }

  private getMinHumble(): number {
    return getMinInArray(this._humbleStats);
  }

  private getMinPressure(): number {
    return getMinInArray(this._pressureStats);
  }

  private getMaxTemperature(): number {
    return getMaxInArray(this._temperatureStats);
  }

  private getMaxHumble(): number {
    return getMaxInArray(this._humbleStats);
  }

  private getMaxPressure(): number {
    return getMaxInArray(this._pressureStats);
  }

  public update(context: IWeatherData) {
    this._temperatureStats.push(context.temperature);
    this._humbleStats.push(context.humble);
    this._pressureStats.push(context.pressure)
  }

  public display(): string {
    const message: string =
      'MAX_TEMPERATURE:' + this.getMaxTemperature() +
      'AVG_TEMPERATURE:' + this.getAverageTemperature() +
      'MIN_TEMPERATURE:' + this.getMinTemperature() +
      'MAX_HUMBLE:' + this.getMaxHumble() +
      'AVG_HUMBLE:' + this.getAverageHumble() +
      'MIN_HUMBLE:' + this.getMinHumble() +
      'MAX_PRESSURE:' + this.getMaxPressure() +
      'AVG_PRESSURE:' + this.getAveragePressure() +
      'MIN_PRESSURE:' + this.getMinPressure();

    console.log(message);
    return message;
  }

}
