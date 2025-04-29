import { ForecastWeather, Forecast } from "../model/forecastWeather";
import { ForecastDayComponent } from "./forecastDayComponent";

export const ForecastFullComponent = (props: {
  forecastWeather: ForecastWeather;
  isInImperials?: boolean;
}) => (
  <>
    {props.forecastWeather.forecast.map((forecast: Forecast, index: number) => (
      <ForecastDayComponent
        forecast={forecast}
        isInImperials={props.isInImperials}
        key={"forecastDay" + index}
      />
    ))}
  </>
);
