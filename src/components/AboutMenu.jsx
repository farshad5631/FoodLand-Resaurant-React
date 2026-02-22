// import React, { useState } from "react";

// const AboutMenu = ({ onCategoryChange }) => {
//   const categories = [
//     "breakfast",
//     "lunch",
//     "dinner",
//     "snack",
//     "drink",
//     "dessert",
//   ];
//   const [menuActive, setMenuActive] = useState(categories[0]);

//   return (
//     <div className="menu flex flex-row space-x-8 ">
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => {
//             onCategoryChange(category);
//             setMenuActive(category);
//           }}
//           className={`hover:text-red-500 ${
//             menuActive === category ? "text-red-500" : ""
//           }`}
//         >
//           {category.charAt(0).toUpperCase() + category.slice(1)}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default AboutMenu;

import React, { useState } from "react";

const AboutMenu = ({ onCategoryChange }) => {
  const categories = [
    "breakfast",
    "lunch",
    "dinner",
    "snack",
    "drink",
    "dessert",
  ];

  const [menuActive, setMenuActive] = useState(categories[0]);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 sm:gap-6 md:gap-8 justify-start sm:justify-center min-w-max px-2 py-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              onCategoryChange(category);
              setMenuActive(category);
            }}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full border
              transition-all duration-200
              ${
                menuActive === category
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-red-500 hover:text-red-500"
              }
            `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutMenu;
