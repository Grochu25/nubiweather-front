import windIcon from "../assets/windIcon.svg";
import tempIcon from "../assets/tempIcon.svg";
import snowIcon from "../assets/snowIcon.svg";
import humidityIcon from "../assets/humidity.svg";
import rainIcon from "../assets/rainIcon.svg";
import visibilityIcon from "../assets/visibilityIcon.svg";
import uvIcon from "../assets/uvIcon.svg";
import { Forecast } from "../model/forecastWeather";

export const ForecastDayComponent = (props: {
  forecast: Forecast;
  isInImperials?: boolean;
}) => {
  const forecastDay = props.forecast.day;
  const forecastDate = props.forecast.date;

  return (
    <div className="w-72 mt-3 sm:w-fit mx-auto border-4 border-solid border-gray-300 border-radiu rounded-lg">
      <div className="mx-auto sm:float-left w-fit">
        <p className="text-center text-2xl mt-3">
          {new Date(forecastDate).toLocaleString("en-GB", {
            dateStyle: "short",
          })}
        </p>
        <img
          src={forecastDay.condition.icon}
          className="mx-auto sm:float-left w-20 sm:w-auto relative"
        />
        <h2 className="float-left w-56 text-2xl font-bold mt-3">
          {forecastDay.condition.text}
        </h2>
      </div>
      <div className="clear-both"></div>
      <div className="w-fit mx-auto">
        <div>
          <img src={tempIcon} className="w-10 mx-2 my-2 float-left " />
          <p title="min temperature" className="my-1 mx-3 w-12 text-center float-left ">
            min:
            <br />
            {props.isInImperials
              ? forecastDay.mintemp_f + "°F"
              : forecastDay.mintemp_c + "°C"}
          </p>
          <p title="max temperature" className="my-1 mx-4 text-center float-left ">
            max:
            <br />
            {props.isInImperials
              ? forecastDay.maxtemp_f + "°F"
              : forecastDay.maxtemp_c + "°C"}
          </p>
        </div>
        <div className="clear-both"></div>
        <div className="h-14">
          <img src={rainIcon} className="w-10 mx-2 my-2 float-left " />
          <p title="rain chance" className={"my-4 mx-3 w-12 text-center float-left "}>
            {forecastDay.daily_chance_of_rain + "%"}
          </p>
          <p title="total precipitation" className={"my-4 mx-4 text-center float-left "}>
            {props.isInImperials
              ? forecastDay.totalprecip_in + " in"
              : forecastDay.totalprecip_mm + " mm"}
          </p>
        </div>
        <div className={"h-14 " + forecastDay.daily_will_it_snow ? " hidden" : ""}>
          <img src={snowIcon} className="w-10 mx-2 my-2 float-left " />
          <p title="snow chance" className={"my-4 mx-3 w-12 text-center float-left "}>
            {forecastDay.daily_chance_of_snow + "%"}
          </p>
          <p title="total snow fall" className={"my-4 mx-4 text-center float-left "}>
            {forecastDay.totalsnow_cm + " cm"}
          </p>
        </div>
        <div className="clear-both"></div>
        <div className="h-14">
          <div className="float-left  w-32" title="max wind">
            <img src={windIcon} className="w-10 mx-2 my-3 float-left " />
            <p className={"my-4 text-center text-sm float-left "}>
              {props.isInImperials
                ? forecastDay.maxwind_mph + "mile/h"
                : forecastDay.maxwind_kph + "km/h"}
            </p>
          </div>
          <div className="float-left w-fit" title="avrage visibility">
            <img src={visibilityIcon} className="w-10 mx-2 my-2 float-left " />
            <p className={"my-4 text-center float-left "}>
              {props.isInImperials ? forecastDay.avgvis_miles : forecastDay.avgvis_km}
            </p>
          </div>
        </div>
        <div className="clear-both"></div>
        <div className="h-14">
          <div className="float-left w-32" title="avrage humidity">
            <img src={humidityIcon} className="w-10 mx-2 my-2 float-left " />
            <p className={"my-4 ml-6 text-center float-left "}>
              {forecastDay.avghumidity}
            </p>
          </div>
          <div className="float-left  w-fit" title="uv">
            <img src={uvIcon} className="w-10 mx-2 my-2 float-left " />
            <p className={"my-4 text-center float-left "}>{forecastDay.uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
