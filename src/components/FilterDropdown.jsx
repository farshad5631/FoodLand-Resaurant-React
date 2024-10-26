import React from "react";

const FilterDropdown = ({ label, options = [], onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="filter-dropdown mb-4">
      <label className="mr-2 font-bold">{label}:</label>
      <select onChange={handleChange} className="border border-gray-400 p-2 rounded-2xl">
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
