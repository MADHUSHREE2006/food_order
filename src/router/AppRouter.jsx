import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import FoodStats from "./FoodStats";
import ValidOrders from "../pages/ValidOrders";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/stats" element={<FoodStats />} />
          <Route path="/orders" element={<ValidOrders />} />

          <Route path="/orders/:id" element={<Home />} />

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;