import IObserver from "../../Core/IObserver";
import IWeatherData from "../interface/IWeatherData";
import IWeatherDisplay from "../interface/IWeatherDisplay";
import {getAverageInArray} from "../../../../utils";

export default class ForecastDisplay implements IObserver<IWeatherData>, IWeatherDisplay {

  private readonly _temperatureStats: Array<number>;
  private readonly _humbleStats: Array<number>;
  private readonly _pressureStats: Array<number>;

  public constructor() {
    this._temperatureStats = new Array<number>();
    this._humbleStats = new Array<number>();
    this._pressureStats = new Array<number>();
  }

  private getForecastTemperature(): number {
    return getAverageInArray(this._temperatureStats);
  }

  private getForecastHumble(): number {
    return getAverageInArray(this._humbleStats);
  }

  private getForecastPressure(): number {
    return getAverageInArray(this._pressureStats);
  }

  public update(context: IWeatherData) {
    this._temperatureStats.push(context.temperature);
    this._humbleStats.push(context.humble);
    this._pressureStats.push(context.pressure)
  }

  public display(): string {
    const message: string =
      'FORECAST_TEMPERATURE:' + this.getForecastTemperature() +
      'FORECAST_HUMBLE:' + this.getForecastHumble() +
      'FORECAST_PRESSURE:' + this.getForecastPressure()
    ;

    return message;
  }

}
