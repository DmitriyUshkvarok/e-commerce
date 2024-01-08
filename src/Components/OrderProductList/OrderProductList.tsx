'use client';
import styles from './_order_product_list.module.scss';
import { useAppSelector } from '@/src/hooks/redux-hook';
import cartSelector from '@/src/redux/cartSlice/cartSelector';
import Image from 'next/image';

const OrderProductList = () => {
  const cartItems = useAppSelector(cartSelector.getIsItems);
  const totalPrice = useAppSelector(cartSelector.geTotalPrice);
  return (
    <>
      <div className={styles.product_order_total_price}>
        Загальна вартість замовлення:{totalPrice} $.
      </div>
      <ul className={styles.product_order_list}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.order_card}>
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className={styles.product_order_image}
            />
            <div className={styles.product_order_info}>
              <h3 className={styles.product_order_title}>{item.title}</h3>
              <p className={styles.product_order_price}>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OrderProductList;
