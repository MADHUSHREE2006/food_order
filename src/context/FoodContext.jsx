import { createContext, useContext, useReducer, useEffect } from "react";
import foodReducer from "../reducer/foodReducer";
import { getToken, getDataset } from "../api/api";

const initialState = {
  orders: [],
  favorites: [],
  loading: true,
};

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodReducer, initialState);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        
        const tokenRes = await getToken(
          "E0323026", 
          "693656", 
          "set A", 
        );

        const orders = await getDataset(tokenRes.token, tokenRes.dataUrl);

        dispatch({ type: "SET_ORDERS", payload: orders });
      } catch (err) {
        console.error("Error fetching data:", err.message);
        dispatch({ type: "SET_ORDERS", payload: [] });
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_FAVORITES" });
  }, [state.orders]);

  const addOrder = (order) => dispatch({ type: "ADD_ORDER", payload: order });

  const toggleDelivered = (id) =>
    dispatch({ type: "TOGGLE_DELIVERED", payload: id });

  const toggleCancelled = (id) =>
    dispatch({ type: "TOGGLE_CANCELLED", payload: id });

  const deleteOrder = (id) => dispatch({ type: "DELETE_ORDER", payload: id });

  const toggleFavorite = (id) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <FoodContext.Provider
      value={{
        orders: state.orders,
        favorites: state.favorites,
        loading: state.loading,
        addOrder,
        toggleDelivered,
        toggleCancelled,
        deleteOrder,
        toggleFavorite,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
