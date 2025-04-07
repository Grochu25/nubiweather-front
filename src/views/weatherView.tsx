import { useEffect, useState } from "react";
import { getCurrentWeathersInCity } from "../repositories/currentWeatherRepository";
import { CurrentWeather } from "../model/currentWeather";
import { WeatherComponent } from "../components/weatherComponent";
import { Link, useLocation } from "react-router-dom";
import { LinkButton } from "../components/atoms/linkButton";
import { ForecastWeather } from "../model/forecastWeather";
import { ForecastFullComponent } from "../components/forecastFullComponent";
import { getForecastedWeathersInCity } from "../repositories/forecastWeatherRepository";

export const CurrentWeatherView = () => {
  const [weather, setWeather] = useState<CurrentWeather>();
  const [forecast, setForecast] = useState<ForecastWeather>();
  const [imperialUnits, setImperial] = useState<boolean>(false);

  const location = useLocation();
  const city = location.pathname.substring(1);

  const imperialUnitsChange = () => {
    setImperial(!imperialUnits);
    console.log(imperialUnits);
  };

  useEffect(() => {
    (async () => {
      const apiWeather = await getCurrentWeathersInCity(city);
      if (apiWeather != null) setWeather(apiWeather);
    })();
    (async () => {
      const apiForecast = await getForecastedWeathersInCity(city);
      if (apiForecast != null) setForecast(apiForecast);
    })();
  }, [city]);

  return (
    <div className="w-screen my-8">
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
          <div className="mx-auto w-fit text-6xl">Loading...</div>
        )}
      </div>
      <div className="w-96 mx-auto my-2 text-right">
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
          <div className="mx-auto w-fit text-5xl">No forecast</div>
        )}
      </div>
    </div>
  );
};
