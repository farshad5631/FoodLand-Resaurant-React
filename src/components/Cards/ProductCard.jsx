// import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";

// const ProductCard = (props) => {
//   return (
//     <div className="bg-white container flex flex-col rounded-3xl shadow-primary ">
//       <Link to={`/food/${props.id}`}>
//         <img
//           src={props.image}
//           alt=""
//           className="w-full object-cover rounded-t-3xl "
//         />
//       </Link>
//       <div className="p-4">
//         <div className="flex items-center mt-2 justify-between place-items-center">
//           <Link to={`/food/${props.id}`}>
//             <h3 className="text-sm md:text-xl font-bold">{props.title}</h3>
//           </Link>
//           <div className="flex flex-row space-x-2 align-middle">
//             <Icon className="text-red-500 " icon="fa-star" />
//             <span className="text-gray-500">{props.star}</span>
//           </div>
//         </div>

//         <div className="flex flex-row justify-between items-center">
//           <button
//             onClick={props.onClick}
//             className="bg-red-500 text-white px-4 py-2 mt-2 rounded-3xl hover:bg-red-300"
//           >
//             Add to Cart
//           </button>
//           <p className="flex ml-2 justify-end">${props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, star, price, onClick }) => {
  return (
    <div className="bg-white flex flex-col rounded-2xl shadow-primary overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <Link to={`/food/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        {/* Title + Rating */}
        <div className="flex justify-between items-start gap-2">
          <Link to={`/food/${id}`} className="flex-1">
            <h3 className="text-sm sm:text-base md:text-lg font-bold line-clamp-2 hover:text-red-500">
              {title}
            </h3>
          </Link>

          <div className="flex items-center gap-1 shrink-0">
            <Icon className="text-red-500 text-sm" icon="fa-star" />
            <span className="text-gray-500 text-xs sm:text-sm">{star}</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base sm:text-lg font-semibold text-gray-800">
            ${price}
          </span>

          <button
            onClick={onClick}
            className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-red-400 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
