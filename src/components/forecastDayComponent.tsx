import windIcon from "../assets/windIcon.svg";
import tempIcon from "../assets/tempIcon.svg";
import snowIcon from "../assets/snowIcon.svg";
import humidityIcon from "../assets/humidity.svg";
import rainIcon from "../assets/rainIcon.svg";
import visibilityIcon from "../assets/visibilityIcon.svg";
import uvIcon from "../assets/uvIcon.svg";
import { Forecast } from "../model/forecastWeather";
import { SmallForecastBox } from "./atoms/smallForecastBox";
import { ForecastHeader } from "./atoms/forecastHeader";
import { ForecastTempBox } from "./atoms/forecastTempBox";
import { PrecipitationFallBox } from "./atoms/precipitationFallBox";

export const ForecastDayComponent = (props: {
  forecast: Forecast;
  isInImperials?: boolean;
}) => {
  const forecastDay = props.forecast.day;
  const forecastDate = props.forecast.date;

  return (
    <div className="w-72 mt-3 sm:w-fit mx-auto border-4 border-solid border-gray-300 border-radiu rounded-lg">
      <ForecastHeader forecastDate={forecastDate} forecastDay={forecastDay} />
      <div className="clear-both"></div>
      <div className="w-fit mx-auto">
        <ForecastTempBox
          tempIcon={tempIcon}
          minTempMetric={forecastDay.mintemp_c + "°C"}
          minTempImperial={forecastDay.mintemp_f + "°F"}
          maxTempMetric={forecastDay.maxtemp_c + "°C"}
          maxTempImperial={forecastDay.maxtemp_f + "°F"}
          isInImperials={props.isInImperials}
        />
        <div className="clear-both"></div>
        <PrecipitationFallBox
          icon={rainIcon}
          titleLeft={"rain chance"}
          titleRight={"total precipitation"}
          precipitationChance={forecastDay.daily_chance_of_rain}
          metric={forecastDay.totalprecip_mm + " mm"}
          imperial={forecastDay.totalprecip_in + " in"}
          isInImperials={props.isInImperials}
        />
        <PrecipitationFallBox
          icon={snowIcon}
          titleLeft={"snow chance"}
          titleRight={"total snow fall"}
          precipitationChance={forecastDay.daily_chance_of_snow}
          metric={forecastDay.totalsnow_cm + " cm"}
          isHidden={forecastDay.daily_will_it_snow === 0}
        />
        <div className="clear-both"></div>
        <div className="h-14">
          <SmallForecastBox
            icon={windIcon}
            title="max wind"
            metric={forecastDay.maxwind_kph + " km/h"}
            imperial={forecastDay.maxwind_mph + " mph"}
            isInImperials={props.isInImperials}
            boxWidthCss="w-32"
            additionalIconStyle="my-4"
            additionalTextStyle="text-sm"
          />

          <SmallForecastBox
            icon={visibilityIcon}
            title="avrage visibility"
            metric={forecastDay.avgvis_km}
            imperial={forecastDay.avgvis_miles}
            isInImperials={props.isInImperials}
          />
        </div>
        <div className="clear-both"></div>
        <div className="h-14">
          <SmallForecastBox
            icon={humidityIcon}
            title="avrage humidity"
            metric={forecastDay.avghumidity + "%"}
            boxWidthCss="w-32"
            additionalTextStyle="ml-6"
          />

          <SmallForecastBox icon={uvIcon} title="uv" metric={forecastDay.uv} />
        </div>
      </div>
    </div>
  );
};
