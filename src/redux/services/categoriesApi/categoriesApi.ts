import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  tagTypes: ['categories'],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/products/categories',
      providesTags: ['categories'],
    }),
    getProductsInCategory: builder.query({
      query: (category) => `/products/category/${category}`,
      providesTags: ['categories'],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetProductsInCategoryQuery } =
  categoriesApi;
