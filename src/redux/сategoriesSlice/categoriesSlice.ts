import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

interface CategoryState {
  selectedCategory: string | null;
}

const categoriesPersistConfig = {
  key: 'categories',
  storage,
  whitelist: ['selectedCategory'],
};

const initialState: CategoryState = {
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
    },
  },
});

const persistedCategoryReducer = persistReducer(
  categoriesPersistConfig,
  categoriesSlice.reducer
);

export const { setSelectedCategory, resetSelectedCategory } =
  categoriesSlice.actions;

export default persistedCategoryReducer;
