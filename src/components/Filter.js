// src/components/Filter.js
import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <label>Filter by category:</label>
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;
