import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SearchDetailsPage from "../pages/searchDetails/SearchDetailsPage";
import NotFound from "../pages/notFound/NotFound";
import SportPage from "../pages/sportpage/SportPage";
const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchDetailsPage />} />
      <Route path="/Sports" element={<SportPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
