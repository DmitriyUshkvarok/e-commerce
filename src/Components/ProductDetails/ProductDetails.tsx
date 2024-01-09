'use client';
import { useGetProductByIdQuery } from '@/src/redux/services/productApi/productApi';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import { addToCart } from '@/src/redux/cartSlice/cartSlice';
import { ProductDetailsProps, CustomError, CartItem } from './types';
import Button from '../ui/Buttons/Button';
import ButtonBack from '../ui/Buttons/ButtonBack/ButtonBack';
import Image from 'next/image';
import cartSelector from '@/src/redux/cartSlice/cartSelector';
import Loader from '../ui/Loader/Loader';
import styles from './_ProductDetails.module.scss';

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(cartSelector.getIsItems);

  const customError = error as CustomError;

  const isProductInCart = (productId: number) =>
    cartItems.some((item) => item.id === productId);

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <>{isLoading ? <Loader /> : <p>Product not found</p>}</>;
  }

  return (
    <>
      <div className={styles.btn_back_wrapper}>
        <ButtonBack />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.product_details_container}>
          {customError?.status} {JSON.stringify(customError?.data)}
          <Image
            className={styles.product_image}
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />
          <h1 className={styles.product_title}>{product.title}</h1>
          <p className={styles.product_category}>
            Category: {product.category}
          </p>
          <p className={styles.product_rating}>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className={styles.product_description}>
            Description: {product.description}
          </p>
          <p className={styles.product_price}>Price: ${product.price}</p>
          <Button
            className={styles.buy_button}
            onClick={() => handleAddToCart(product)}
            disabled={isProductInCart(product.id)}
          >
            {isProductInCart(product.id) ? 'Товар в кошику' : 'Придбати'}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
