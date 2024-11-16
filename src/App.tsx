import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageMeta from "./components/PageMeta"; // Import your meta component
import AppRoutes from "./AppRoutes";

import "./118n/i18n";

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <Router>
      <PageMeta /> {/* Inject Slovak meta tags */}
      <AppRoutes />
    </Router>
  );
};

export default App;
