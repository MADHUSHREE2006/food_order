import { useOrder } from "../context/OrderContext";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const { orders, loading } = useOrder();

  if (loading) {
    return <p>Loading orders...</p>;
  }

  const orderList = Array.isArray(orders) ? orders : [];

  return (
    <div>
      <div className="order-list">
        {!orderList.length ? (
          <p>No orders available</p>
        ) : (
          orderList.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;
