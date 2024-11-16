import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-new.svg";
import LanguageDropdown from "./LanguageDropdown";
import styles from "./Header.module.scss";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

interface HeaderProps {
  toggleNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleNav }) => {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width <= 800;
  const { i18n } = useTranslation(); // Use the i18n object

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Use i18n to change language
  };

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

      {/* Language dropdown component */}
      <LanguageDropdown
        changeLanguage={handleLanguageChange} // Pass the handler here
        currentLanguage="sk" // Set the initial language
      />

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
