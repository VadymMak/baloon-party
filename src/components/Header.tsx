import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setLanguage } from "../store/languageSlice";
import Logo from "../assets/logo-new.svg";
import LanguageDropdown from "./LanguageDropdown";
import styles from "./Header.module.scss";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  toggleNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleNav }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width <= 800;
  const { i18n } = useTranslation();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
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

      {/* Language dropdown with currentLanguage from Redux */}
      <LanguageDropdown
        changeLanguage={handleLanguageChange}
        currentLanguage={currentLanguage}
      />

      {isMobile && (
        <div className={styles.hamburger} onClick={toggleNav}>
          ☰
        </div>
      )}
    </header>
  );
};

export default Header;
