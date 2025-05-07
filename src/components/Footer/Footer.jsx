"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.footerSection}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        <div className={styles.footerSection}>
          <h3>CURRENCY</h3>
          <p>
            <strong>USD</strong>
            <br />
            Transactions will be completed in Euros and a currency reference is
            available on home.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artsans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            {/* Add your social icons here */}
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentMethods}>
            <span>Pay</span>
            <span>AVISK</span>
            <span>Pay</span>
            <span>Pay</span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
