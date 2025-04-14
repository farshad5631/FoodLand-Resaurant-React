import axios from "axios";

const API_KEY = "1aa47d1cc0784cfb85536c24205656c0";

export const fetchInitialMeals = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random`,
      {
        params: {
          apiKey: API_KEY,
          number: 12,
        },
      }
    );
    return response.data.recipes.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.pricePerServing, // Random price for demo
    }));
  } catch (error) {
    console.error("Error fetching initial meals:", error);
    return [];
  }
};

export const fetchSearchMeals = async (query) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          query,
          apiKey: API_KEY,
          number: 15,
        },
      }
    );
    return response.data.results.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.pricePerServing,
    }));
  } catch (error) {
    console.error("Error fetching search meals:", error);
    return [];
  }
};

export const fetchFilteredMeals = async (country, type, calories) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          cuisine: country,
          diet: type,
          maxCalories: calories
            ? calories === "<500"
              ? 500
              : calories === "500-1000"
              ? 1000
              : 2000
            : undefined,
          apiKey: API_KEY,
          number: 15,
        },
      }
    );
    return response.data.results.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: (Math.random() * 20 + 5).toFixed(2),
    }));
  } catch (error) {
    console.error("Error fetching filtered meals:", error);
    return [];
  }
};

export const getFoodDetails = async (id) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      params: {
        apiKey: API_KEY,
      },
    }
  );
  console.log(response.data);
  return {
    id: response.data.id,
    title: response.data.title,
    image: response.data.image,
    price: response.data.pricePerServing,
    description: response.data.summary,
    instruction: response.data.instructions,
    calories: response.data.calories,
  };
};
