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
    <div className="menu flex flex-row space-x-8 ">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            onCategoryChange(category);
            setMenuActive(category);
          }}
          className={`hover:text-red-500 ${
            menuActive === category ? "text-red-500" : ""
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default AboutMenu;
