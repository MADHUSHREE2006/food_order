import React from "react";
import { useFood } from "../context/FoodContext";

const Favorites = () => {
  const { orders, favorites, toggleFavorite } = useFood();

  const favoriteOrders = orders.filter((order) => favorites.includes(order.id));

  return (
    <div className="favorites-page fade-in">
      <h2>Favorite Orders</h2>
      {favoriteOrders.length === 0 ? (
        <p data-testid="no-favorites">No favorite orders yet.</p>
      ) : (
        <div className="order-list">
          {favoriteOrders.map((order) => (
            <div key={order.id} className="order-card" data-testid="order-item">
              <h3>{order.title || order.name}</h3>
              <button onClick={() => toggleFavorite(order.id)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;