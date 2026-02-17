import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

import { useLocation } from "react-router-dom";

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const location = useLocation();
  const isPriceListPage = location.pathname === "/price-list";

  // Disable/enable scroll when the menu is open/closed
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isNavOpen]);

  return (
    <div className={`${styles.wrapper} ${isPriceListPage ? styles.wrapperNoHeader : ""}`}>
      {!isPriceListPage && <Header toggleNav={toggleNav} />}
      {!isPriceListPage && (
        <SideMenu isOpen={isNavOpen} toggleMenu={toggleNav} />
      )}

      <main>
        <Outlet />
      </main>
      {!isPriceListPage && <Footer />}
    </div>
  );
};

export default Layout;