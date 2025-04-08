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

export const WeatherComponent = (props: {
  weather: CurrentWeather;
  isInImperials?: boolean;
}) => {
  const weather = props.weather;
  return (
    <div className="w-72 sm:w-fit mx-auto">
      <div className=" h-10 float-right">
        <img
          src={weather.condition.icon.replace("64x64", "128x128")}
          className="w-20 sm:w-auto relative"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold mx-3 mb-2">{weather.city}</h1>
      <h3 className="text-sm sm:text-base mx-4">
        {weather.country} -{" "}
        {new Date(weather.dataCollectTime).toLocaleString("en-GB", {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </h3>
      <h2 className="text-center text-4xl font-bold mt-3">{weather.condition.text}</h2>
      <div className="text-center">
        <p className="text-8xl font-bold">
          {props.isInImperials ? weather.temp_f + "°F" : weather.temp_c + "°C"}
        </p>
      </div>
      <div className="mx-4 w-auto">
        <p className="mb-3 text-center">
          Feels like:{" "}
          {props.isInImperials ? weather.feelslike_f + "°F" : weather.feelslike_c + "°C"}
        </p>
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
