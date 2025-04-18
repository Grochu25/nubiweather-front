export const PrecipitationFallBox = (props: {
  icon: string;
  titleLeft: string;
  titleRight: string;
  precipitationChance: number;
  isInImperials?: boolean;
  metric: number | string;
  imperial?: number | string;
  additionalIconStyle?: string;
  additionalTextStyle?: string;
  boxWidthCss?: string;
  isHidden?: boolean;
}) => {
  const hide = props.isHidden ? "hidden" : "";
  return (
    <div className={"h-14 " + hide}>
      <img src={props.icon} className="w-10 mx-2 my-2 float-left " />
      <p title={props.titleLeft} className={"my-4 mx-3 w-12 text-center float-left "}>
        {props.precipitationChance + "%"}
      </p>
      <p title={props.titleRight} className={"my-4 mx-4 text-center float-left "}>
        {props.isInImperials ? props.imperial : props.metric}
      </p>
    </div>
  );
};
