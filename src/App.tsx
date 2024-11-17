import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageMeta from "./components/PageMeta"; // Import your meta component
import AppRoutes from "./AppRoutes";
import { useTranslation } from "react-i18next";

import "./118n/i18n";
import "./styles/global.scss";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the language dynamically based on the current language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <PageMeta />
      <AppRoutes />
    </Router>
  );
};

export default App;
