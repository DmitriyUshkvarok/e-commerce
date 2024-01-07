'use client';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import { useRouter } from 'next/navigation';
import { removeFromCart } from '@/src/redux/cartSlice/cartSlice';
import { clearQuantityById } from '@/src/redux/orderQantity/quantitySlice';
import { toast } from 'react-toastify';
import { updateTotalPrice } from '@/src/redux/cartSlice/cartSlice';
import { useEffect } from 'react';
import cartSelector from '@/src/redux/cartSlice/cartSelector';
import styles from './_product-cart.module.scss';
import Image from 'next/image';
import Button from '../ui/Buttons/Button';
import ButtonBack from '../ui/Buttons/ButtonBack/ButtonBack';
import QuantityCounter from '../ui/ProductCounter/ProductCounter';

const ProductCart = () => {
  const cartItems = useAppSelector(cartSelector.getIsItems);
  const totalPrice = useAppSelector(cartSelector.geTotalPrice);
  const quantity = useAppSelector((state) => state.quantity);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * (quantity[item.id] || 1);
    }, 0);

    dispatch(updateTotalPrice(total));
  }, [cartItems, dispatch, quantity]);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
    dispatch(clearQuantityById({ itemId: productId }));
    toast.success('товар видалено з кошика');
  };

  const handleCheckout = () => {
    router.push('/order');
  };

  return (
    <>
      <div className={styles.empty_cart_btn_wrapper}>
        <ButtonBack />
      </div>
      {cartItems.length === 0 ? (
        <>
          <p className={styles.empty_cart_message}>Кошик порожній</p>
        </>
      ) : (
        <>
          <div>Загальна вартість замовлення:{totalPrice} $.</div>
          <ul className={styles.product_cart_container}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.product_card}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className={styles.product_image}
                />
                <div className={styles.product_info}>
                  <h3 className={styles.product_title}>{item.title}</h3>
                  <p className={styles.product_price}>Price: ${item.price}</p>
                  <QuantityCounter itemId={item.id} />
                  <Button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className={styles.remove_button}
                    disabled={false}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={handleCheckout}
            className={styles.checkout_button}
            disabled={false}
          >
            Оформити замовлення
          </Button>
        </>
      )}
    </>
  );
};

export default ProductCart;
