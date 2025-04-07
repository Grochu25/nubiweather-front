import { useEffect, useState } from "react";
//import { getCurrentWeathersInBoth } from "../repositories/currentWeatherRepository";
import { CurrentWeather } from "../model/currentWeather";
import { data } from "../model/mockData";
import { WeatherComponent } from "../components/weatherComponent";

export const CurrentWeatherView = () => {
  const [weathers, setWeathers] = useState<CurrentWeather[]>([]);

  useEffect(() => {
    /*
    (async () => {
      const apiWeathers: CurrentWeather[] = await getCurrentWeathersInBoth();
      if (apiWeathers != null) setWeathers(apiWeathers);
    })();*/
    setWeathers(data);
  }, []);

  return (
    <>
      {weathers.length > 0 ? (
        <>
          <WeatherComponent weather={weathers[0]} isInImperials />
          <WeatherComponent weather={weathers[0]} />
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};
