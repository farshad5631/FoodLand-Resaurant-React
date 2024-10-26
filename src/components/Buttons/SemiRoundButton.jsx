const SemiRoundButton = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="flex items-center justify-between rounded-md bg-red-500 hover:bg-red-300 text-white font-semibold py-2 px-4"
      >
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default SemiRoundButton;
