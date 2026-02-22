import { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const MenuList = ({ category }) => {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages

  const { addToCart } = useContext(CartContext);

  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    fetchMeals(category, currentPage);
  }, [category, currentPage]);

  const fetchMeals = async (category, page) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: "93060a642af041dfb679af316b23cca0",
            type: category,
            number: itemsPerPage,
            offset: (page - 1) * itemsPerPage,
          },
        },
      );
      const mealData = response.data.results.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: (Math.random() * 20 + 5).toFixed(2),
      }));
      setMeals(mealData);
      setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage)); // Calculate total pages
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-4/5 mx-auto">
        {meals.map((meal) => (
          <MenuItem
            key={meal.id}
            {...meal}
            onClick={() => addToCart({ ...meal, quantity: 1 })}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          First
        </button>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-white text-gray-700 border rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default MenuList;
