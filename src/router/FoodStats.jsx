import React, { useEffect } from "react";
import { useFood } from "../context/FoodContext";

const FoodStats = () => {
  const { orders } = useFood();

  const total = orders.length;

  const deliveredCount = orders.filter((o) => o.isDelivered).length;

  const cancelledCount = orders.filter((o) => o.isCancelled).length;

  useEffect(() => {
    window.appState = {
      totalOrders: total,
      deliveredOrders: deliveredCount,
      cancelledOrders: cancelledCount,
    };
  }, [orders]);

  if (!orders.length)
    return <h3 data-testid="no-stats">No orders available</h3>;

  return (
    <div className="food-stats fade-in" data-testid="stats-page">
      <h2>Order Stats</h2>

      <p data-testid="total-order">Total Orders: {total}</p>
      <p data-testid="delivery-order">Delivered: {deliveredCount}</p>
      <p data-testid="cancelled-order">Cancelled: {cancelledCount}</p>
    </div>
  );
};

export default FoodStats;