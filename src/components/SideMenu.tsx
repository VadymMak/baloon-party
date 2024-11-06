import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.scss";

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink} onClick={toggleMenu}>
            Domov
          </Link>
          <Link to="/services" className={styles.navLink} onClick={toggleMenu}>
            O nás
          </Link>
          <Link to="/gallery" className={styles.navLink} onClick={toggleMenu}>
            Galéria
          </Link>
          <Link to="/contact" className={styles.navLink} onClick={toggleMenu}>
            Kontakty
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
