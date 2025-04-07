import { CurrentWeather } from "../model/currentWeather";

export const WeatherComponent = (props: {
  weather: CurrentWeather;
  isInImperials?: boolean;
}) => {
  const weather = props.weather;
  console.log(props.isInImperials);
  return (
    <>
      <h1>
        {weather.city} - {weather.country}
      </h1>
      <div>
        Temperatura:{" "}
        {props.isInImperials ? weather.temp_f + "°F" : weather.temp_c + "°C"}
        <br />
        Temperatura odczuwalna:{" "}
        {props.isInImperials
          ? weather.feelslike_f + "°F"
          : weather.feelslike_c + "°C"}
        <br />
        Wiatr:{" "}
        {props.isInImperials
          ? weather.wind_mph + " mil/h"
          : weather.wind_kph + " km/h"}
        {", kierunek: " + weather.wind_dir}
        <br />
        Ciśnienie:{" "}
        {props.isInImperials
          ? weather.pressure_in + " inHg"
          : weather.pressure_mb + " hPa"}
        <br />
        Zachmurzenie: {weather.cloud}%
        <br />
        Wilgotność: {weather.humidity}%
        <br />
        Opady:{" "}
        {props.isInImperials
          ? weather.precip_in + " in"
          : weather.precip_mm + " mm"}
        <br />
        Widoczność:{" "}
        {props.isInImperials
          ? weather.vis_miles + " mil"
          : weather.vis_km + " km"}
      </div>
      <img src={weather.condition.icon} width="300px" />
      <h2>{weather.condition.text}</h2>
    </>
  );
};
