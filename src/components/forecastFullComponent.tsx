import { ForecastWeather, Forecast } from "../model/forecastWeather";
import { ForecastDayComponent } from "./forecastDayComponent";

export const ForecastFullComponent = (props: {
  forecastWeather: ForecastWeather;
  isInImperials?: boolean;
}) => (
  <>
    {props.forecastWeather.forecast.map((forecast: Forecast) => (
      <ForecastDayComponent forecast={forecast} isInImperials={props.isInImperials} />
    ))}
  </>
);
