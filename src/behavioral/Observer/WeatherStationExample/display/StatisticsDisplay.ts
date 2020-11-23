import IWeatherDisplay from "../interface/IWeatherDisplay";
import IWeatherData from "../interface/IWeatherData";
import IObserver from "../../Core/IObserver";
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

  public update(context: IWeatherData) {
    this._temperatureStats.push(context.temperature);
    this._humbleStats.push(context.humble);
    this._pressureStats.push(context.pressure)
  }

  public display(): string {
    const message: string =
      'MAX_TEMPERATURE:' + getMaxInArray(this._temperatureStats) +
      'AVG_TEMPERATURE:' + getAverageInArray(this._temperatureStats) +
      'MIN_TEMPERATURE:' + getMinInArray(this._temperatureStats) +
      'MAX_HUMBLE:' + getMaxInArray(this._humbleStats) +
      'AVG_HUMBLE:' + getAverageInArray(this._humbleStats) +
      'MIN_HUMBLE:' + getMinInArray(this._humbleStats) +
      'MAX_PRESSURE:' + getMaxInArray(this._pressureStats) +
      'AVG_PRESSURE:' + getAverageInArray(this._pressureStats) +
      'MIN_PRESSURE:' + getMinInArray(this._pressureStats);

    return message;
  }

}
