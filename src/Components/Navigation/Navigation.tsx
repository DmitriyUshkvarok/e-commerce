'use client';
import styles from './_navigation.module.scss';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { resetCurrentPage } from '@/src/redux/paginationSlice/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import { resetSelectedCategory } from '@/src/redux/сategoriesSlice/categoriesSlice';
import cartSelector from '@/src/redux/cartSlice/cartSelector';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartSelector.getIsItems);

  const handleClickHome = () => {
    dispatch(resetCurrentPage());
    dispatch(resetSelectedCategory());
  };

  return (
    <nav>
      <ul className={styles.nav_list}>
        <li className={styles.logo_list_item}>
          <Link href="/" className={styles.logo_link} onClick={handleClickHome}>
            Logo
          </Link>
        </li>
        <li className={styles.logo_list_item}>
          <Link href="/cart" className={styles.cart_link}>
            <FaShoppingCart className={styles.cart_icon} />
            {cartItems.length > 0 && (
              <span className={styles.cart_count}>{cartItems.length}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
