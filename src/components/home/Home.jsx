import React from "react";
import styles from "./Home.module.css";

const HomepageTextSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>DISCOVER OUR PRODUCTS</h2>
      <p className={styles.description}>
        Explore our exclusive collection. Crafted with passion, designed for
        excellence. Experience the best in quality and style.
      </p>
      <p className={styles.tagline}>
        Unleash your style. Discover the difference.
      </p>
    </section>
  );
};

export default HomepageTextSection;
