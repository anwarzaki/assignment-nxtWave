// "use client";
// import Link from "next/link";
// import styles from "./Header.module.css";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <Link href="/" className={styles.logo}>
//         ShopNow
//       </Link>
//       <nav className={styles.nav}>
//         <Link href="/products">Products</Link>
//         <Link href="/login">Login</Link>
//         <Link href="/signup">Sign Up</Link>
//       </nav>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top Row: Logo Centered, Icons Right */}
      <div className={styles.topBar}>
        <div style={{ width: "40px" }}>{/* Placeholder for symmetry */}</div>
        <Link href="/" className={styles.logo}>
          LOGO
        </Link>
        <div className={styles.icons}>
          <FaSearch />
          <FaHeart />
          <FaShoppingBag />
          <FaUser />
          <span className={styles.lang}>ENG ▼</span>
        </div>
      </div>

      {/* Bottom Row: Nav Links */}
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link href="/products">Products</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT US</Link>
        </div>
      </nav>
    </header>
  );
}
