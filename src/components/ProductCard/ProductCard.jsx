// 'use client';
// import styles from './ProductCard.module.css';

// export default function ProductCard({ product }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={product.image}
//           alt={product.title}
//           className={styles.productImage}
//         />
//       </div>
//       <div className={styles.content}>
//         <h3 className={styles.title}>{product.title}</h3>
//         <p className={styles.price}>${product.price}</p>
//         <button className={styles.addToCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

"use client";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.rating}>
          {Array(Math.round(product.rating.rate))
            .fill()
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
          <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
}
