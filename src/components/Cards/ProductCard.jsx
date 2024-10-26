import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="bg-white container flex flex-col rounded-3xl shadow-primary ">
      <Link to={`/food/${props.id}`}>
        <img
          src={props.image}
          alt=""
          className="w-full object-cover rounded-t-3xl "
        />
      </Link>
      <div className="p-4">
        <div className="flex items-center mt-2 justify-between place-items-center">
          <Link to={`/food/${props.id}`}>
            <h3 className="text-sm md:text-xl font-bold">{props.title}</h3>
          </Link>
          <div className="flex flex-row space-x-2 align-middle">
            <Icon className="text-red-500 " icon="fa-star" />
            <span className="text-gray-500">{props.star}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <button
            onClick={props.onClick}
            className="bg-red-500 text-white px-4 py-2 mt-2 rounded-3xl hover:bg-red-300"
          >
            Add to Cart
          </button>
          <p className="flex ml-2 justify-end">${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
