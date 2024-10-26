import arrow from "../assets/icons/chevron (1).png";
import ProductCard from "./Cards/ProductCard";
import TitleCard from "./Cards/TitleCard";
import ButtonWithIcon from "./Buttons/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
import { fetchInitialMeals } from "../api/spoonacular";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const navigate = useNavigate();
  const heading = {
    heading: "Product",
    title: "Most Popular Items",
  };

  const { addToCart } = useContext(CartContext);

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchInitialFoods = async () => {
      const data = await fetchInitialMeals(9);
      setFoods(data);
    };
    fetchInitialFoods();
  }, []);

  const showMenuHandler = () => {
    navigate("/menu");
  };
  return (
    <div className="mb-12 mt-10">
      <TitleCard title={heading.heading} heading={heading.title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-4/5 mx-auto mb-8">
        {foods.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            onClick={() => addToCart({ ...item, quantity: 1 })}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ButtonWithIcon onClick={showMenuHandler} img={arrow}>
          See More Products
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default Products;
