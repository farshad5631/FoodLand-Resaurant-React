import React, { useState, useEffect, useContext } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { getFoodDetails } from "../api/spoonacular";
import { CartContext } from "../context/CartContext";
import Navbar from "./Nav/Navbar";

const FoodDetailPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const data = await getFoodDetails(id);
      setFood(data);
    };
    fetchFoodDetails();
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  const cleanDescription = DOMPurify.sanitize(food.description);
  const foodInstruction = DOMPurify.sanitize(food.instruction);

  return (
    <>
      <Navbar />
      <div className="container flex flex-col mx-auto items-center px-44 mb-8">
        <h1 className="text-2xl font-bold mb-4">{food.title}</h1>
        <img src={food.image} alt={food.title} className="w-96  mb-4" />
        <p className="text-lg mb-4 font-bold">{food.title}</p>
        <p className="text-lg mb-4">price: ${food.price}</p>
        <div
          className="text-lg mb-4"
          dangerouslySetInnerHTML={{ __html: foodInstruction }}
        >
      
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
          className="text-lg"
        ></div>
        <p> {food.calories}</p>
        <div className="flex flex-row space-x-4">
          <button
            onClick={() => addToCart({ ...food, quantity: 1 })}
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded-3xl"
          >
            Add to Cart
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded-3xl"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodDetailPage;
