import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div className="flex flex-col border-dotted">
      <div className="flex mt-2 justify-between">
        <Link to={`/food/${props.id}`}>
          <h3 className="text-xl font-bold">{props.title}</h3>
        </Link>

        <span className="flex ml-2 justify-end text-red-500 font-bold">
          ${props.price}
        </span>
        
      </div>
      <button
            onClick={props.onClick}
            className="bg-red-500 text-white px-4 py-2 mt-2 w-1/3 mx-auto rounded-3xl hover:bg-red-300"
          >
            Add to Cart
          </button>
      <p className="text-start">{props.text}</p>
      
      <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
    </div>
  );
};

export default MenuItem;
