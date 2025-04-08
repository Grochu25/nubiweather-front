export const SmallIconBox = (props: {
  icon: string;
  title: string;
  isInImperials?: boolean;
  metric: number | string;
  imperial?: number | string;
  iconXMargin?: number;
  iconYMargin?: number;
  additionalIconStyle?: string;
  additionalTextStyle?: string;
  isTopBlock?: boolean;
}) => {
  const iconXMargin = props.iconXMargin ? props.iconXMargin : 2;
  const iconYMargin = props.iconYMargin ? props.iconYMargin : 2;
  const topMargin = props.isTopBlock ? 0 : 4;
  const additionalIconStyle = props.additionalIconStyle ? props.additionalIconStyle : "";
  const additionalTextStyle = props.additionalTextStyle ? props.additionalTextStyle : "";
  return (
    <div
      title={props.title}
      className={
        props.title +
        "Box mt-" +
        topMargin +
        " mx-1 h-16 border-4 border-solid border-gray-300 border-radiu rounded-lg"
      }
    >
      <img
        src={props.icon}
        className={
          "w-10 mx-" +
          iconXMargin +
          " my-" +
          iconYMargin +
          " float-left " +
          additionalIconStyle
        }
      />
      <p className={"my-4 text-center float-left " + additionalTextStyle}>
        {props.isInImperials && props.imperial ? props.imperial : props.metric}
      </p>
    </div>
  );
};
