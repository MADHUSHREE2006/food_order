import React from "react";
import { useFood } from "../context/FoodContext";

const Home = () => {
  const { orders, loading, toggleDelivered, toggleFavorite, deleteOrder, toggleCancelled } = useFood();

  if (loading) return <h2 data-testid="loading">Loading orders...</h2>;

  return (
    <div className="home-page fade-in">
      <h2>All Orders</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card" data-testid="order-item">
            <h3>{order.title || order.name}</h3>
            <p>Status: {order.isCancelled ? "Cancelled" : order.isDelivered ? "Delivered" : "Pending"}</p>
            <button onClick={() => toggleDelivered(order.id)}>
              {order.isDelivered ? "Mark as Pending" : "Mark as Delivered"}
            </button>
            <button onClick={() => toggleFavorite(order.id)}>
              Toggle Favorite
            </button>
            <button onClick={() => toggleCancelled(order.id)}>
              {order.isCancelled ? "Un-cancel Order" : "Cancel Order"}
            </button>
            <button onClick={() => deleteOrder(order.id)}>Delete Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;