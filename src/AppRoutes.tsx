// src/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage"; // Import ErrorPage
import AboutPage from "./pages/AboutPage";
import PriceList from "./components/PriceList";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<AboutPage />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/price-list" element={<PriceList />} />

      {/* Catch-all route for unmatched paths */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
