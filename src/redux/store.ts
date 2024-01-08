import persisteCartReducer from './cartSlice/cartSlice';
import persistedPaginationReducer from './paginationSlice/paginationSlice';
import persisteQuantityReducer from './orderQantity/quantitySlice';
import persistedCategoryReducer from './сategoriesSlice/categoriesSlice';
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productApi/productApi';
import { categoriesApi } from './services/categoriesApi/categoriesApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    cart: persisteCartReducer,
    pagination: persistedPaginationReducer,
    quantity: persisteQuantityReducer,
    category: persistedCategoryReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware, categoriesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
