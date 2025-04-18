import { CurrentWeather } from "../model/currentWeather";
import windIcon from "../assets/windIcon.svg";
import windDirIcon from "../assets/windDirArrow.svg";
import pressureIcon from "../assets/pressureIcon.svg";
import cloudIcon from "../assets/cloudIcon.svg";
import humidityIcon from "../assets/humidity.svg";
import rainIcon from "../assets/rainIcon.svg";
import visibilityIcon from "../assets/visibilityIcon.svg";
import uvIcon from "../assets/uvIcon.svg";
import { SmallIconBox } from "./atoms/smallIconBox";
import { WindBox } from "./atoms/windBox";
import { WeatherHeader } from "./atoms/weatherHeader";

export const WeatherComponent = (props: {
  weather: CurrentWeather;
  isInImperials?: boolean;
}) => {
  const weather = props.weather;
  return (
    <div className="w-72 sm:w-fit mx-auto">
      <WeatherHeader
        icon={weather.condition.icon}
        city={weather.city}
        country={weather.country}
        dataCollectTime={weather.dataCollectTime}
        condition={weather.condition.text}
        tempMetric={weather.temp_c + "°C"}
        tempImperial={weather.temp_f + "°F"}
        feelsLikeMetric={weather.feelslike_c + "°C"}
        feelsLikeImperial={weather.feelslike_f + "°F"}
        isInImperials={props.isInImperials}
      />
      <div className="mx-4 w-auto">
        <WindBox
          windIcon={windIcon}
          dirIcon={windDirIcon}
          title={"wind"}
          metric={weather.wind_kph + " km/h"}
          imperial={weather.wind_mph + " mph"}
          windDir={weather.wind_dir}
          isInImperials={props.isInImperials}
        />
        <div className="w-32 float-left">
          <SmallIconBox
            icon={rainIcon}
            title={"precipitation"}
            metric={weather.precip_mm + " mm"}
            imperial={weather.precip_in + " in"}
            isInImperials={props.isInImperials}
            iconXMargin={1}
            isTopBlock
          />
          <SmallIconBox
            icon={pressureIcon}
            title={"pressure"}
            metric={weather.pressure_mb + " hPa"}
            imperial={weather.pressure_in + " inHg"}
            isInImperials={props.isInImperials}
            iconXMargin={1}
            additionalIconStyle="w-9"
            additionalTextStyle="text-sm"
          />
        </div>
        <div className="w-32 mt-4 sm:mt-0 float-left">
          <SmallIconBox
            icon={cloudIcon}
            title={"clouds"}
            metric={weather.cloud + "%"}
            iconYMargin={3}
            isTopBlock
          />
          <SmallIconBox
            icon={humidityIcon}
            title={"humidity"}
            metric={weather.humidity + "%"}
            additionalIconStyle="mr-5"
          />
        </div>
        <div className="w-32 mt-4 sm:mt-0 float-left">
          <SmallIconBox
            icon={visibilityIcon}
            title={"visibility"}
            metric={weather.vis_km + " km"}
            imperial={weather.vis_miles + " miles"}
            isInImperials={props.isInImperials}
            isTopBlock
          />
          <SmallIconBox
            icon={uvIcon}
            title={"uv_index"}
            metric={weather.uv}
            additionalIconStyle="mr-5"
          />
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};
