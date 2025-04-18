export const SmallForecastBox = (props: {
  icon: string;
  title: string;
  isInImperials?: boolean;
  metric: number | string;
  imperial?: number | string;
  additionalIconStyle?: string;
  additionalTextStyle?: string;
  boxWidthCss?: string;
}) => {
  const additionalIconStyle = props.additionalIconStyle ? props.additionalIconStyle : "";
  const additionalTextStyle = props.additionalTextStyle ? props.additionalTextStyle : "";
  const boxWidthCss = props.boxWidthCss ? props.boxWidthCss : "w-26";

  return (
    <div className={"float-left " + boxWidthCss} title={props.title}>
      <img
        src={props.icon}
        className={"w-10 mx-2 my-2 float-left " + additionalIconStyle}
      />
      <p className={"my-4 text-center float-left " + additionalTextStyle}>
        {props.isInImperials && props.imperial ? props.imperial : props.metric}
      </p>
    </div>
  );
};
