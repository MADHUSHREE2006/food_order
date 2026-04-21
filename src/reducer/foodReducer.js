const foodReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case "TOGGLE_DELIVERED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload
            ? { ...order, isDelivered: !order.isDelivered }
            : order
        ),
      };
    case "TOGGLE_CANCELLED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload
            ? { ...order, isCancelled: !order.isCancelled }
            : order
        ),
      };
    case "TOGGLE_FAVORITE":
      const isFav = state.favorites.find((fav) => fav === action.payload);
      return {
        ...state,
        favorites: isFav
          ? state.favorites.filter((fav) => fav !== action.payload)
          : [...state.favorites, action.payload],
      };
    case "SET_FAVORITES":
      return state;
    default:
      return state;
  }
};

export default foodReducer;
