import IWeatherDisplay from "../interface/IWeatherDisplay";
import IWeatherData from "../interface/IWeatherData";
import IObserver from "../../interface/IObserver";

export default class CurrentConditionsDisplay implements IObserver<IWeatherData>, IWeatherDisplay {

  private _temperature?: number;
  private _humble?: number;

  public update(context: IWeatherData) {
    this._temperature = context.temperature;
    this._humble = context.humble;
  }

  public display(): string {
    const message: string =
      'CURRENT_TEMPERATURE:' + this._temperature +
      'CURRENT_HUMBLE:' + this._humble;

    console.log(message);
    return message;
  }

}
