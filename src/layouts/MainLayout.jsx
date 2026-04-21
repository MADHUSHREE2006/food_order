import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Food Delivery App</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/orders">Valid Orders</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/stats">Stats</Link>
        </nav>
      </header>
      <main className="app-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;