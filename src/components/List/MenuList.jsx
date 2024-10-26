import { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const MenuList = ({ category }) => {
  const [meals, setMeals] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchMeals(category);
  }, [category]);

  const fetchMeals = async (category) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: "ed27be37e32f439da8ca2599c8c87121",
            type: category,
            number: 10,
          },
        }
      );
      const mealData = response.data.results.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: (Math.random() * 20 + 5).toFixed(2),
      }));
      setMeals(mealData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-4/5 m-10">
      {meals.map((meal) => (
        <MenuItem
          key={meal.id}
          {...meal}
          onClick={() => addToCart({ ...meal, quantity: 1 })}
        />
      ))}
    </div>
  );
};

export default MenuList;
