import axios from "axios";
import { CurrentWeather } from "../model/currentWeather";

const hostname = "http://localhost:8080";

export const getCurrentWeathersInBoth = async (): Promise<CurrentWeather[]> => {
  const result = await axios
    .get<CurrentWeather[]>(hostname + "/realtime-weather", {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response);
    });

  return result || [];
};

export const getCurrentWeathersInCity = async (
  city: string
): Promise<CurrentWeather | null> => {
  const result = await axios
    .get<CurrentWeather>(hostname + "/realtime-weather/" + city, {
      timeout: 3000,
    })
    .then((response) => response.data)
    .catch(async (error) => {
      console.log(error.response);
    });

  return result || null;
};
