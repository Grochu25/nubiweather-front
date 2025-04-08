import { useEffect, useState } from "react";
import { getCurrentWeathersInCity } from "../repositories/currentWeatherRepository";
import { CurrentWeather } from "../model/currentWeather";
import { WeatherComponent } from "../components/weatherComponent";
import { Link, useLocation } from "react-router-dom";
import { LinkButton } from "../components/atoms/linkButton";
import { ForecastWeather } from "../model/forecastWeather";
import { ForecastFullComponent } from "../components/forecastFullComponent";
import { getForecastedWeathersInCity } from "../repositories/forecastWeatherRepository";

export const WeatherView = () => {
  const [weather, setWeather] = useState<CurrentWeather | undefined | null>(undefined);
  const [forecast, setForecast] = useState<ForecastWeather | undefined | null>();
  const [imperialUnits, setImperial] = useState<boolean>(false);

  const city = useLocation().pathname.substring(1);

  const imperialUnitsChange = () => {
    setImperial(!imperialUnits);
  };

  useEffect(() => {
    (async () => {
      const apiWeather = await getCurrentWeathersInCity(city);
      setWeather(apiWeather);
    })();
    (async () => {
      const apiForecast = await getForecastedWeathersInCity(city);
      setForecast(apiForecast);
    })();
  }, [city]);

  return (
    <div className="w-full my-8 mx-0">
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
        {weather ? (
          <WeatherComponent weather={weather} isInImperials={imperialUnits} />
        ) : (
          <div className="mx-auto w-fit text-6xl">
            {weather === null ? "Weather not avaliable" : "Loading..."}
          </div>
        )}
      </div>
      <div className="w-60 sm:w-96 mx-auto my-2 text-right">
        <label htmlFor="imperial">Imperial units </label>
        <input
          name="imperial"
          checked={imperialUnits}
          id="imperial"
          type="checkbox"
          onChange={imperialUnitsChange}
        />
      </div>
      <div>
        <h2 className="text-3xl mt-10 text-center">Forecast:</h2>
      </div>
      <div>
        {forecast ? (
          <ForecastFullComponent
            forecastWeather={forecast}
            isInImperials={imperialUnits}
          />
        ) : (
          <div className="mx-auto w-fit text-5xl">
            {weather === null ? "No forecast" : "Loading..."}
          </div>
        )}
      </div>
    </div>
  );
};
