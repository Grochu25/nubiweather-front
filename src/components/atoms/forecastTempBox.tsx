export const ForecastTempBox = (props: {
  tempIcon: string;
  minTempMetric: string;
  minTempImperial: string;
  maxTempMetric: string;
  maxTempImperial: string;
  isInImperials?: boolean;
}) => {
  return (
    <div>
      <img src={props.tempIcon} className="w-10 mx-2 my-2 float-left " />
      <p title="min temperature" className="my-1 mx-3 w-12 text-center float-left ">
        min:
        <br />
        {props.isInImperials ? props.minTempImperial : props.minTempMetric}
      </p>
      <p title="max temperature" className="my-1 mx-4 text-center float-left ">
        max:
        <br />
        {props.isInImperials ? props.maxTempImperial : props.maxTempMetric}
      </p>
    </div>
  );
};
