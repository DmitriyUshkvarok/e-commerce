import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

interface CartItem {
  id: number;
  image: string;
  productName: string;
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'totalPrice'],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  } as CartState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    removeAllFromCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateTotalPrice,
  removeAllFromCart,
} = cartSlice.actions;

const persisteCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export default persisteCartReducer;
