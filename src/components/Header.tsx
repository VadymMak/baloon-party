import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/baloon-party-logo.jpg"; // Ensure the logo path is correct
import styles from "./Header.module.scss";

interface HeaderProps {
  toggleNav: () => void; // Add this prop to handle the toggle function
}

const Header: React.FC<HeaderProps> = ({ toggleNav }) => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={Logo} alt="Balon Party Logo" className={styles.logo} />
    </div>
    <nav className={styles.nav}>
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

    {/* Hamburger menu for mobile */}
    <div className={styles.hamburger} onClick={toggleNav}>
      ☰
    </div>
  </header>
);

export default Header;
