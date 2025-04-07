export const WindBox = (props: {
  windIcon: string;
  dirIcon: string;
  title: string;
  isInImperials?: boolean;
  metric: number | string;
  imperial: number | string;
  windDir: string;
}) => {
  return (
    <div
      title="wind"
      className="windBox mx-1 float-left h-36 border-4 border-solid border-gray-300 border-radiu rounded-lg"
    >
      <img src={props.windIcon} className="w-16 mx-6 my-3 color" />
      <p className="text-center">
        {props.isInImperials ? props.imperial : props.metric}
      </p>
      <div className="my-2 mx-4 text-center">
        <img src={props.dirIcon} className="w-6 inline" />
        <p className="inline p-2">{props.windDir}</p>
      </div>
    </div>
  );
};
