export const LinkButton = (props: { text: string }) => {
  const active = window.location.href.endsWith(props.text);
  return (
    <div
      className={
        "float-left w-fit mx-2 " +
        (active ? "border-b-2 border-solid border-white" : "")
      }
    >
      {props.text}
    </div>
  );
};
