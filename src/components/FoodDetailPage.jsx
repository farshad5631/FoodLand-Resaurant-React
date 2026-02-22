import { useState, useEffect, useContext } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { getFoodDetails } from "../api/spoonacular";
import { CartContext } from "../context/CartContext";
import Navbar from "./Nav/Navbar";

const FoodDetailPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const data = await getFoodDetails(id);
      setFood(data);
    };
    fetchFoodDetails();
  }, [id]);

  if (!food) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const cleanDescription = DOMPurify.sanitize(food.description);
  const foodInstruction = DOMPurify.sanitize(food.instruction);

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-8 mb-12 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          {food.title}
        </h1>

        {/* Image */}
        <img
          src={food.image}
          alt={food.title}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl mb-6 object-cover"
        />

        {/* Price */}
        <p className="text-lg sm:text-xl font-semibold mb-2">
          Price: ${food.price}
        </p>

        {/* Calories */}
        {food.calories && (
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Calories: {food.calories}
          </p>
        )}

        {/* Instructions */}
        {foodInstruction && (
          <div
            className="text-base sm:text-lg mb-4 w-full"
            dangerouslySetInnerHTML={{ __html: foodInstruction }}
          />
        )}

        {/* Description */}
        {cleanDescription && (
          <div
            className="text-base sm:text-lg mb-4 w-full text-gray-700"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center">
          <button
            onClick={() => addToCart({ ...food, quantity: 1 })}
            className="bg-red-500 text-white py-2 px-6 rounded-3xl hover:bg-red-400 transition w-full sm:w-auto"
          >
            Add to Cart
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-500 text-white py-2 px-6 rounded-3xl hover:bg-gray-400 transition w-full sm:w-auto"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodDetailPage;
