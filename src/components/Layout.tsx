import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu"; // Import the SideMenu component
import useWindowSize from "../hooks/useWindowSize"; // Import your custom useWindowSize hook

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useWindowSize(); // Track window width

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the menu when window size exceeds 768px (desktop view)
  useEffect(() => {
    if (width && width > 768) {
      setIsNavOpen(false); // Close the menu on desktop view
    }
  }, [width]); // Effect will run when width changes

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
      <SideMenu isOpen={isNavOpen} toggleMenu={toggleNav} />{" "}
      {/* Passing correct props */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
