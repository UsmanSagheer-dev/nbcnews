import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SearchDetailsPage from "../pages/searchDetails/SearchDetailsPage";
import NotFound from "../pages/notFound/NotFound";
const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/corona" element={<SearchDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
