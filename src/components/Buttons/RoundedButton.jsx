const RoundedButton = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="flex flex-row items-center text-sm space-x-2 justify-between rounded-full bg-red-500 hover:bg-red-300 text-white md:font-semibold px-1 py-1 md:py-2 md:px-6"
      >
        <span>{props.children} </span>
        {props.icon && <props.icon />}
        {props.img && <img src={props.img} className="rounded-full w-4" />}
      </button>
    </div>
  );
};

export default RoundedButton;
