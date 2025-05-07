"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./products.module.css";
import Footer from "@/components/Footer/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Sort products based on selected option
  useEffect(() => {
    let sorted = [...filteredProducts];

    switch (sortOption) {
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "popular":
        // FakeStore API doesn't have rating count, so we'll use rating rate
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Recommended (default sorting)
        break;
    }

    setFilteredProducts(sorted);
  }, [sortOption]);

  const handleFilter = (filters) => {
    // Implement your filter logic here
    // For now we'll just show all products
    setFilteredProducts(products);
  };

  // dropdown
  const getOptionLabel = (value) => {
    switch (value) {
      case "recommended":
        return "RECOMMENDED";
      case "newest":
        return "NEWEST FIRST";
      case "popular":
        return "POPULAR";
      case "price-high":
        return "PRICE : HIGH TO LOW";
      case "price-low":
        return "PRICE : LOW TO HIGH";
      default:
        return "";
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.hero}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.toolbar}>
          <span>{filteredProducts.length} ITEMS</span>
          <button onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className={styles.main}>
          {showFilters && (
            <div className={styles.filters}>
              <Filters onFilter={handleFilter} />
            </div>
          )}

          <div className={styles.products}>
            {/* <div className={styles.sorting}>
              <span>View only</span>
              <div className={styles.sortOptions}>
                <span
                  className={sortOption === "recommended" ? styles.active : ""}
                  onClick={() => setSortOption("recommended")}
                >
                  RECOMMENDED
                </span>
                <span
                  className={sortOption === "newest" ? styles.active : ""}
                  onClick={() => setSortOption("newest")}
                >
                  NEWEST FIRST
                </span>
                <span
                  className={sortOption === "popular" ? styles.active : ""}
                  onClick={() => setSortOption("popular")}
                >
                  POPULAR
                </span>
                <span
                  className={sortOption === "price-high" ? styles.active : ""}
                  onClick={() => setSortOption("price-high")}
                >
                  PRICE : HIGH TO LOW
                </span>
                <span
                  className={sortOption === "price-low" ? styles.active : ""}
                  onClick={() => setSortOption("price-low")}
                >
                  PRICE : LOW TO HIGH
                </span>
              </div>
            </div> */}
            <div className={styles.sorting}>
              <span>View only</span>
              <div className={styles.dropdownWrapper}>
                <button
                  className={styles.dropdownButton}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {getOptionLabel(sortOption)}
                  <span className={styles.arrow}>▼</span>
                </button>

                {showFilters && (
                  <ul className={styles.dropdownMenu}>
                    {[
                      "recommended",
                      "newest",
                      "popular",
                      "price-high",
                      "price-low",
                    ].map((option) => (
                      <li
                        key={option}
                        className={`${styles.dropdownItem} ${
                          sortOption === option ? styles.active : ""
                        }`}
                        onClick={() => {
                          setSortOption(option);
                          setShowFilters(false);
                        }}
                      >
                        {sortOption === option && (
                          <span className={styles.checkmark}>✔</span>
                        )}
                        {getOptionLabel(option)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={styles.productGrid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
