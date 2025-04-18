import { DayForecast } from "../../model/forecastWeather";

export const ForecastHeader = (props: {
  forecastDate: string;
  forecastDay: DayForecast;
}) => {
  return (
    <div className="mx-auto sm:float-left w-fit">
      <p className="text-center text-2xl mt-3">
        {new Date(props.forecastDate).toLocaleString("en-GB", {
          dateStyle: "short",
        })}
      </p>
      <img
        src={props.forecastDay.condition.icon}
        className="mx-auto sm:float-left w-20 sm:w-auto relative"
      />
      <h2 className="float-left w-56 text-2xl font-bold mt-3 text-center">
        {props.forecastDay.condition.text}
      </h2>
    </div>
  );
};
