import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const paginationPersistConfig = {
  key: 'pagination',
  storage,
  whitelist: ['currentPage'],
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
  },
});

const persistedPaginationReducer = persistReducer(
  paginationPersistConfig,
  paginationSlice.reducer
);

export const { setCurrentPage, resetCurrentPage } = paginationSlice.actions;

export default persistedPaginationReducer;
