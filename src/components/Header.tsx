// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/baloon-party-logo.jpg"; // Ensure the logo path is correct
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Balon Party Logo" className={styles.logo} />
      </div>
      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ""}`}>
        <Link to="/" className={styles.navLink}>
          Domov
        </Link>
        <Link to="/services" className={styles.navLink}>
          O nás
        </Link>
        <Link to="/gallery" className={styles.navLink}>
          Galéria
        </Link>
        <Link to="/contact" className={styles.navLink}>
          Kontakty
        </Link>
      </nav>
      <div className={styles.hamburger} onClick={toggleNav}>
        ☰
      </div>
    </header>
  );
};

export default Header;
