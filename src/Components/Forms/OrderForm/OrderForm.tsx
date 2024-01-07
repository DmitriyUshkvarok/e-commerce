'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { orderSchema } from '@/src/schemas/placeOrder';
import { useAppSelector, useAppDispatch } from '@/src/hooks/redux-hook';
import { removeAllFromCart } from '@/src/redux/cartSlice/cartSlice';
import { clearAllQuantities } from '@/src/redux/orderQantity/quantitySlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import styles from './_order_form.module.scss';
import Button from '../../ui/Buttons/Button';
import cartSelector from '@/src/redux/cartSlice/cartSelector';

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
};

const OrderForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartItems = useAppSelector(cartSelector.getIsItems);
  const totalPrice = useAppSelector(cartSelector.geTotalPrice);

  const handleSubmit = async (values: FormValues) => {
    const orderData = {
      ...values,
      products: cartItems,
      totalPrice: totalPrice,
    };

    console.log('Order Data:', orderData);
    dispatch(removeAllFromCart());
    dispatch(clearAllQuantities());
    toast.success('Ваше замовлення успішно розміщено!');
    router.replace('/cart');
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form_order}>
          <div className={styles.order_form_group}>
            <Field
              className={styles.form_order_input}
              type="text"
              name="name"
              placeholder="введіть своє ім'я"
              aria-label="name"
            />
            <ErrorMessage name="name">
              {(msg) => (
                <div className={styles.validation_error}>
                  <span>{msg}</span>
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styles.order_form_group}>
            <Field
              className={styles.form_order_input}
              type="email"
              name="email"
              placeholder="введіть адресу електронної пошти"
              aria-label="email"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div className={styles.validation_error}>
                  <span>{msg}</span>
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styles.order_form_group}>
            <Field
              className={styles.form_order_input}
              type="text"
              name="phone"
              placeholder="введіть номер телефону"
              aria-label="phone"
            />
            <ErrorMessage name="phone">
              {(msg) => (
                <div className={styles.validation_error}>
                  <span>{msg}</span>
                </div>
              )}
            </ErrorMessage>
          </div>
          <div>
            <Button
              className={styles.registr_form_button}
              type="submit"
              disabled={false}
            >
              Замовити
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
