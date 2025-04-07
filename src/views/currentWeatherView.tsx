import { useEffect, useState } from "react";
//import { getCurrentWeathersInBoth } from "../repositories/currentWeatherRepository";
import { CurrentWeather } from "../model/currentWeather";
import { data } from "../model/mockData";
import { WeatherComponent } from "../components/weatherComponent";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/atoms/linkButton";

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
    <div className="w-screen">
      <div className="w-fit mx-auto">
        <Link to="/Gliwice">
          <LinkButton text="Gliwice" />
        </Link>
        <Link to="/Hamburg">
          <LinkButton text="Hamburg" />
        </Link>
      </div>
      <div className="clear-both"></div>
      <div>
        {weathers.length > 0 ? (
          <>
            <WeatherComponent
              weather={
                window.location.href.endsWith("Gliwice")
                  ? weathers[0]
                  : weathers[1]
              }
            />
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
