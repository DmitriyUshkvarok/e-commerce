import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hook';
import {
  incrementQuantity,
  decrementQuantity,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';
import styles from './_product-counter.module.scss';

interface QuantityCounterProps {
  itemId: number;
}

const QuantityCounter = ({ itemId }: QuantityCounterProps) => {
  const quantity = useAppSelector((state) => state.quantity[itemId] || 1);
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    dispatch(decrementQuantity({ itemId }));
  };

  const handleIncrease = () => {
    dispatch(incrementQuantity({ itemId }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    dispatch(setQuantityById({ itemId, quantity: newQuantity }));
  };

  return (
    <div className={styles.product_quantity}>
      <button onClick={handleDecrease} className={styles.btn_increment}>
        -
      </button>
      <input
        data-testid="quantity-input"
        className={styles.input_counter}
        type="text"
        value={quantity}
        onChange={handleChange}
      />
      <button onClick={handleIncrease} className={styles.btn_decrement}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
