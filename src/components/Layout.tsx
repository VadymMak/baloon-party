import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout: React.FC = () => (
  <div className={styles.wrapper}>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
