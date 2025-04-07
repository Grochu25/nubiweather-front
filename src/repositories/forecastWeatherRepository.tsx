import axios from "axios";
import { ForecastWeather } from "../model/forecastWeather";

export const getForecastedWeathersInBoth = async (): Promise<
  ForecastWeather[]
> => {
  const result = await axios
    .get<ForecastWeather[]>("http://localhost:8080/forecast-weather", {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response.status);
    });

  return result || [];
};

export const getForecastedWeathersInCity = async (
  city: string
): Promise<ForecastWeather | null> => {
  const result = await axios
    .get<ForecastWeather>("http://localhost:8080/forecast-weather/" + city, {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response.status);
    });

  return result || null;
};
