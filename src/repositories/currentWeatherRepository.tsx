import axios from "axios";
import { CurrentWeather } from "../model/currentWeather";

export const getCurrentWeathersInBoth = async (): Promise<CurrentWeather[]> => {
  const result = await axios
    .get<CurrentWeather[]>("http://localhost:8080/realtime-weather")
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response.status);
    });

  return result || [];
};
