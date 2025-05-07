"use client";
import { useState } from "react";
import styles from "./Filters.module.css";

export default function Filters({ onFilter }) {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000],
  });

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleCategoryChange = (category) => {
    const newFilters = {
      ...filters,
      category: filters.category === category ? "all" : category,
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className={styles.filters}>
      <h3>FILTERS</h3>

      <div className={styles.filterGroup}>
        <h4>CATEGORIES</h4>
        <div className={styles.options}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.option} ${
                filters.category === category ? styles.selected : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h4>PRICE RANGE</h4>
        <div className={styles.priceRange}>
          <span>${filters.priceRange[0]}</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[0]}
            onChange={(e) => {
              const newFilters = {
                ...filters,
                priceRange: [Number(e.target.value), filters.priceRange[1]],
              };
              setFilters(newFilters);
              onFilter(newFilters);
            }}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => {
              const newFilters = {
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)],
              };
              setFilters(newFilters);
              onFilter(newFilters);
            }}
          />
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
