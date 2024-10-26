

const ButtonWithIcon = (props) => {
  return (
    <button onClick={props.onClick} className="flex flex-row items-center justify-between text-sm md:text-xl rounded-full bg-red-500 hover:bg-red-300 text-white py-1 md:px-4 px-1">
      <span className="mr-6 text-base">{props.children}</span>
      <span className="flex">
        {" "}
        {props.img && (
          <img src={props.img} className="rounded-full p-1 bg-white" />
        )}
        {props.icon && <props.icon />}
      </span>
    </button>
  );
};

export default ButtonWithIcon;
