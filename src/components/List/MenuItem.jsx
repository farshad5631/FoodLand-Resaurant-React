// import { Link } from "react-router-dom";

// const MenuItem = (props) => {
//   return (
//     <div className="flex flex-col border-dotted">
//       <div className="flex mt-2 justify-between">
//         <Link to={`/food/${props.id}`}>
//           <h3 className="text-xl font-bold">{props.title}</h3>
//         </Link>

//         <span className="flex ml-2 justify-end text-red-500 font-bold">
//           ${props.price}
//         </span>

//       </div>
//       <button
//             onClick={props.onClick}
//             className="bg-red-500 text-white px-4 py-2 mt-2 w-1/3 mx-auto rounded-3xl hover:bg-red-300"
//           >
//             Add to Cart
//           </button>
//       <p className="text-start">{props.text}</p>

//       <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
//     </div>
//   );
// };

// export default MenuItem;

import { Link } from "react-router-dom";

const MenuItem = ({ id, title, price, text, onClick }) => {
  return (
    <div className="flex flex-col py-3">
      {/* Title + Price */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <Link to={`/food/${id}`}>
          <h3 className="text-lg sm:text-xl font-bold hover:text-red-500">
            {title}
          </h3>
        </Link>

        <span className="text-red-500 font-bold text-base sm:text-lg">
          ${price}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-1 text-sm sm:text-base">{text}</p>

      {/* Button */}
      <button
        onClick={onClick}
        className="bg-red-500 text-white px-4 py-2 mt-3 w-full sm:w-40 rounded-full hover:bg-red-400 transition"
      >
        Add to Cart
      </button>

      {/* Divider */}
      <div className="border-t border-dotted border-gray-300 my-4"></div>
    </div>
  );
};

export default MenuItem;
