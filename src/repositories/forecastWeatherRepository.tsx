import axios from "axios";
import { ForecastWeather } from "../model/forecastWeather";

export const getForecastedWeathersInBoth = async (): Promise<
  ForecastWeather[]
> => {
  const result = await axios
    .get<ForecastWeather[]>("http://localhost:8080/forecast-weather")
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response.status);
    });

  return result || [];
};
