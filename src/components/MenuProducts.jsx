import ProductCard from "./Cards/ProductCard";
import TitleCard from "./Cards/TitleCard";
import { useState, useEffect, useContext } from "react";
import {
  fetchInitialMeals,
  fetchSearchMeals,
  fetchFilteredMeals,
} from "../api/spoonacular";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

const MenuProducts = () => {
  const heading = {
    heading: "Product",
    title: "Explore Our Menu",
  };
  const { addToCart } = useContext(CartContext);
  const [searchMeals, setSearchMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [initialMeals, setInitialMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [calories, setCalories] = useState("");

  useEffect(() => {
    const loadInitialMeals = async () => {
      const meals = await fetchInitialMeals();
      setInitialMeals(meals);
    };
    loadInitialMeals();
  }, []);

  const handleSearchChange = (data) => {
    setQuery(data);
  };

  const handleSearch = async () => {
    const searchData = await fetchSearchMeals(query);
    setSearchMeals(searchData);
    setFilteredMeals([]);
  };

  const handleFilterChange = async () => {
    const filterData = await fetchFilteredMeals(country, type, calories);
    setFilteredMeals(filterData);
    setSearchMeals([]);
  };

  return (
    <div className="mb-12">
      <TitleCard title={heading.heading} heading={heading.title} />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row w-10 md:w-2/6 items-center justify-between">
          <SearchBar
            onSearchChange={handleSearchChange}
            onSearch={handleSearch}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white px-6 py-2 rounded-2xl mb-4"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row space-x-4 mb-4">
          <FilterDropdown
            label="Country"
            onChange={(value) => setCountry(value)}
            options={["Italian", "Chinese", "Indian", "Greek", "Mexican"]}
          />
          <FilterDropdown
            label="Type"
            onChange={(value) => setType(value)}
            options={["Vegetarian", "Vegan", "Gluten Free"]}
          />
          <FilterDropdown
            label="Calories"
            onChange={(value) => setCalories(value)}
            options={["<500", "500-1000", ">1000"]}
          />
          <button
            onClick={handleFilterChange}
            className="bg-red-500 text-white px-6 py-2 rounded-2xl mb-4"
          >
            Filter
          </button>
        </div>
      </div>
      {searchMeals.length > 0 && (
        <div className="grid md:grid-cols-3 gap-10 w-4/5 mx-auto mb-8">
          {searchMeals.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onClick={() => addToCart({ ...item, quantity: 1 })}
            />
          ))}
        </div>
      )}
      {filteredMeals.length > 0 && (
        <div className="grid md:grid-cols-3 gap-10 w-4/5 mx-auto mb-8">
          {filteredMeals.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onClick={() => addToCart({ ...item, quantity: 1 })}
            />
          ))}
        </div>
      )}
      {searchMeals.length === 0 && filteredMeals.length === 0 && (
        <div className="grid md:grid-cols-3 gap-10 w-4/5 mx-auto mb-8">
          {initialMeals.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onClick={() => addToCart({ ...item, quantity: 1 })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuProducts;
