import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['products'],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['products'],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
