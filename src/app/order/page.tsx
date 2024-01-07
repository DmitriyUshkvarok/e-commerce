import OrderForm from '@/src/Components/Forms/OrderForm/OrderForm';
import OrderProductList from '@/src/Components/OrderProductList/OrderProductList';

const OrderPage = () => {
  return (
    <div>
      <OrderForm />
      <OrderProductList />
    </div>
  );
};

export default OrderPage;
