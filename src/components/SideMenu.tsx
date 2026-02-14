import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./SideMenu.module.scss";

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleMenu();
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
    <>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink} onClick={toggleMenu}>
            {t("navHome")}
          </Link>
          <a href="#about" className={styles.navLink} onClick={scrollToAbout}>
            {t("navAbout")}
          </a>
          <Link to="/gallery" className={styles.navLink} onClick={toggleMenu}>
            {t("navGallery")}
          </Link>
          <Link to="/contact" className={styles.navLink} onClick={toggleMenu}>
            {t("navContact")}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;