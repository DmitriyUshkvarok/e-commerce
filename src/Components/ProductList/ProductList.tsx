'use client';
import styles from './_productList.module.scss';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import { addToCart } from '@/src/redux/cartSlice/cartSlice';
import { CartItem, ProductListProps } from './types';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Button from '../ui/Buttons/Button';
import Link from 'next/link';
import cartSelector from '@/src/redux/cartSlice/cartSelector';
import Loader from '../ui/Loader/Loader';

const ProductList = ({
  currentPage,
  data,
  error,
  isLoading,
}: ProductListProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartSelector.getIsItems);
  const itemsPerPage = 6;
  const customError = error;
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts =
    data?.slice(indexOfFirstProduct, indexOfLastProduct) || [];

  const isProductInCart = (productId: number) =>
    cartItems.some((item) => item.id === productId);

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
    toast.success('Товар додано до кошика');
  };

  return (
    <div>
      <h1 className={styles.product_page_title}>Product List</h1>
      {customError?.status} {JSON.stringify(customError?.data)}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.product_list}>
          {currentProducts.map((product: CartItem) => (
            <li className={styles.product_list_item} key={product.id}>
              <Link
                href={`/product/${product.id}`}
                className={styles.product_list_link}
              >
                <Image
                  className={styles.product_list_image}
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <h2 className={styles.product_list_title}>{product.title}</h2>
                <p>Category: {product.category}</p>
                <p className={styles.product_list_price}>
                  Price: ${product.price}
                </p>
              </Link>
              <Button
                onClick={() => handleAddToCart(product)}
                className={styles.btn_order}
                disabled={isProductInCart(product.id)}
              >
                {isProductInCart(product.id) ? 'Товар в кошику' : 'Придбати'}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
