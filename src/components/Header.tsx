import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width <= 800;
  const { t, i18n } = useTranslation();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  // Hide/show on scroll
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={Logo} alt="Balón Party Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          {t("navHome")}
        </Link>
        <a href="#about" className={styles.navLink} onClick={scrollToAbout}>
          {t("navAbout")}
        </a>
        <Link to="/gallery" className={styles.navLink}>
          {t("navGallery")}
        </Link>
        <Link to="/contact" className={styles.navLink}>
          {t("navContact")}
        </Link>
      </nav>

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