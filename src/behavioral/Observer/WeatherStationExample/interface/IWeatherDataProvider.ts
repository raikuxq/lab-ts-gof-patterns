import IWeatherData from "./IWeatherData";

export default interface IWeatherDataProvider extends IWeatherData {
  setMeasurements(temperature: number, humble: number, pressure: number): void;
}
