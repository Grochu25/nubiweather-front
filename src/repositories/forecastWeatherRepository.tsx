import axios from "axios";
import { ForecastWeather } from "../model/forecastWeather";

const hostname = "http://localhost:8080";

export const getForecastedWeathersInBoth = async (): Promise<ForecastWeather[]> => {
  const result = await axios
    .get<ForecastWeather[]>(hostname + "/forecast-weather", {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response);
    });

  return result || [];
};

export const getForecastedWeathersInCity = async (
  city: string
): Promise<ForecastWeather | null> => {
  const result = await axios
    .get<ForecastWeather>(hostname + "/forecast-weather/" + city, {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response);
    });

  return result || null;
};
