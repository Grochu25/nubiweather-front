export const WeatherHeader = (props: {
  icon: string;
  city: string;
  country: string;
  dataCollectTime: string;
  condition: string;
  tempMetric: string | number;
  tempImperial: string | number;
  feelsLikeMetric: string | number;
  feelsLikeImperial: string | number;
  isInImperials?: boolean;
}) => {
  return (
    <div>
      <div className=" h-10 float-right">
        <img
          src={props.icon.replace("64x64", "128x128")}
          className="w-20 sm:w-auto relative"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold mx-3 mb-2">{props.city}</h1>
      <h3 className="text-sm sm:text-base mx-4">
        {props.country} -{" "}
        {new Date(props.dataCollectTime).toLocaleString("en-GB", {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </h3>
      <h2 className="text-center text-4xl font-bold mt-3">{props.condition}</h2>
      <div className="text-center">
        <p className="text-8xl font-bold">
          {props.isInImperials ? props.tempImperial : props.tempMetric}
        </p>
      </div>
      <p className="mb-3 text-center">
        Feels like:{" "}
        {props.isInImperials ? props.feelsLikeImperial : props.feelsLikeMetric}
      </p>
    </div>
  );
};
