const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return state;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
