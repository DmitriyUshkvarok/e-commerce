import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface QuantityState {
  [itemId: number]: number;
}

const quantityPersistConfig = {
  key: 'quantity',
  storage,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {} as QuantityState,
  reducers: {
    incrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      state[itemId] = (state[itemId] || 1) + 1;
    },
    decrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      if (state[itemId] && state[itemId] > 0) {
        state[itemId]--;
      }
    },
    clearQuantityById: (state, action) => {
      const { itemId } = action.payload;
      delete state[itemId];
    },
    setQuantityById: (state, action) => {
      const { itemId, quantity } = action.payload;
      state[itemId] = Number(quantity);
    },
    clearAllQuantities: (state) => {
      return {};
    },
  },
});

const persisteQuantityReducer = persistReducer(
  quantityPersistConfig,
  quantitySlice.reducer
);

export const {
  incrementQuantity,
  decrementQuantity,
  clearQuantityById,
  setQuantityById,
  clearAllQuantities,
} = quantitySlice.actions;

export default persisteQuantityReducer;
