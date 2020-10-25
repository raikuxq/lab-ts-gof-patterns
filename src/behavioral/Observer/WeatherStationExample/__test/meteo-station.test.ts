import WeatherDataProvider from "../WeatherDataProvider";
import CurrentConditionsDisplay from "../display/CurrentConditionsDisplay";
import StatisticsDisplay from "../display/StatisticsDisplay";
import ForecastDisplay from "../display/ForecastDisplay";

describe("Weather Stations", () => {

  describe("should throw when try to get incorrect values", () => {
    const weatherProvider: WeatherDataProvider = new WeatherDataProvider();

    test("with temperature value", () => {
      expect(() => {
        weatherProvider.temperature
      }).toThrowError();
    });

    test("with humble value", () => {
      expect(() => {
        weatherProvider.humble
      }).toThrowError();
    });

    test("with pressure value", () => {
      expect(() => {
        weatherProvider.pressure
      }).toThrowError();
    });
  });

  describe("displays", () => {

    describe("CurrentConditionsDisplay", () => {
      const weatherProvider = new WeatherDataProvider();
      const currentConditionsDisplay = new CurrentConditionsDisplay();
      weatherProvider.addObserver(currentConditionsDisplay);

      describe("on data update", () => {
        weatherProvider.setMeasurements(30, 20, 20);

        test("should correct calculate average values", () => {
          const expectedResults =
            'CURRENT_TEMPERATURE:' + '30' +
            'CURRENT_HUMBLE:' + '20';

          expect(currentConditionsDisplay.display()).toBe(expectedResults);
        });
      });
    });

    describe("StatisticsDisplay", () => {
      const weatherProvider = new WeatherDataProvider();
      const statDisplay = new StatisticsDisplay();
      weatherProvider.addObserver(statDisplay);

      describe("on data update", () => {
        weatherProvider.setMeasurements(10, 15, 20);
        weatherProvider.setMeasurements(15, 20, 20);
        weatherProvider.setMeasurements(20, 25, 20);

        test("should correct calculate min/max/avg values", () => {
          const expectedResults =
            'MAX_TEMPERATURE:' + '20' +
            'AVG_TEMPERATURE:' + '15' +
            'MIN_TEMPERATURE:' + '10' +
            'MAX_HUMBLE:' + '25' +
            'AVG_HUMBLE:' + '20' +
            'MIN_HUMBLE:' + '15' +
            'MAX_PRESSURE:' + '20' +
            'AVG_PRESSURE:' + '20' +
            'MIN_PRESSURE:' + '20';

          expect(statDisplay.display()).toBe(expectedResults);
        });
      });

    });

    describe("ForecastDisplay", () => {
      const weatherProvider = new WeatherDataProvider();
      const forecastDisplay = new ForecastDisplay();
      weatherProvider.addObserver(forecastDisplay);

      describe("on data update", () => {
        weatherProvider.setMeasurements(10, 15, 20);
        weatherProvider.setMeasurements(15, 20, 20);
        weatherProvider.setMeasurements(20, 25, 20);

        test("should correct calculate min/max/avg values", () => {
          const expectedResults =
            'FORECAST_TEMPERATURE:' + '15' +
            'FORECAST_HUMBLE:' + '20' +
            'FORECAST_PRESSURE:' + '20';

          expect(forecastDisplay.display()).toBe(expectedResults);
        });
      });

    });

  });

});
