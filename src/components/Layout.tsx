import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu"; // Import the SideMenu component

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Disable/enable scroll when the menu is open/closed
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
      document.documentElement.style.overflow = "hidden"; // Disable scroll for html
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
      document.documentElement.style.overflow = "auto"; // Enable scroll for html
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
      document.documentElement.style.overflow = "auto"; // Cleanup
    };
  }, [isNavOpen]);

  return (
    <div className={styles.wrapper}>
      <Header toggleNav={toggleNav} />
      <SideMenu isOpen={isNavOpen} toggleMenu={toggleNav} />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
