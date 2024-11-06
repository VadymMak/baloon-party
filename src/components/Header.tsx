import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-new.svg"; // Ensure the logo path is correct
import styles from "./Header.module.scss";
import useWindowSize from "../hooks/useWindowSize"; // Import the useWindowSize hook

interface HeaderProps {
  toggleNav: () => void; // Add this prop to handle the toggle function
}

const Header: React.FC<HeaderProps> = ({ toggleNav }) => {
  // Get the window size using the custom hook
  const { width } = useWindowSize();

  // Ensure width is defined before rendering the hamburger
  const isMobile = width !== undefined && width <= 800;

  return (
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
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleNav}>
          ☰
        </div>
      )}
    </header>
  );
};

export default Header;
