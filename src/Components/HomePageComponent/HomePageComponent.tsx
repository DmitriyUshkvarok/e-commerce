'use client';
import styles from './_home_page_component.module.scss';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useGetProductsQuery } from '@/src/redux/services/productApi/productApi';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import { CustomError, CartItem } from '../ProductList/types';
import {
  setCurrentPage,
  resetCurrentPage,
} from '@/src/redux/paginationSlice/paginationSlice';
import {
  resetSelectedCategory,
  setSelectedCategory,
} from '@/src/redux/сategoriesSlice/categoriesSlice';
import {
  useGetProductsInCategoryQuery,
  useGetAllCategoriesQuery,
} from '@/src/redux/services/categoriesApi/categoriesApi';
import ProductList from '../ProductList/ProductList';
import Pagination from '../ui/Pagination/Pagination';
import ProductSearch from '../ui/SearchProduct/SearchProduct';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../ui/Loader/Loader';

const HomePageComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const selectedCategory = useAppSelector(
    (state) => state.category.selectedCategory
  );

  const { data, error, isLoading } = useGetProductsQuery({});

  const {
    data: allCategories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetAllCategoriesQuery({});

  const {
    data: productsInCategory,
    error: productsInCategoryError,
    isLoading: productsInCategoryLoading,
  } = useGetProductsInCategoryQuery(selectedCategory || '');

  const customError = productsInCategoryError as CustomError | undefined;

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryClick = (category: string | null) => {
    dispatch(resetCurrentPage());
    dispatch(setSelectedCategory(category));
    setSearchQuery('');

    if (category === null) {
      dispatch(resetSelectedCategory());
    }

    router.push(
      `${pathName}/?product${category ? `/?category=${category}` : ''}`
    );
  };

  const filteredProducts =
    selectedCategory === null
      ? data?.filter((product: CartItem) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : productsInCategory?.filter((product: CartItem) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div>
      {customError?.status}
      {JSON.stringify(customError?.data)}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.product_search}>
            <ProductSearch onSearch={handleSearch} />
          </div>
          <div className={styles.container}>
            {categoriesLoading ? (
              <Loader />
            ) : (
              <div className={styles.sidebar}>
                <Sidebar
                  categories={allCategories || []}
                  loading={categoriesLoading}
                  selectedCategory={selectedCategory}
                  error={categoriesError}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
            )}
            <div className={styles.content}>
              {filteredProducts && filteredProducts.length > 0 ? (
                <ProductList
                  currentPage={currentPage}
                  data={filteredProducts}
                  error={error as CustomError}
                  isLoading={isLoading}
                />
              ) : (
                <div className={styles.not_products}>
                  {productsInCategoryLoading ? (
                    <Loader />
                  ) : (
                    'Відповідних товарів не знайдено'
                  )}
                </div>
              )}
            </div>
          </div>
          <Pagination
            totalItems={filteredProducts?.length || 0}
            itemsPerPage={6}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default HomePageComponent;
