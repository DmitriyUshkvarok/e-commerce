import OrderForm from '@/src/Components/Forms/OrderForm/OrderForm';
import OrderProductList from '@/src/Components/OrderProductList/OrderProductList';
import Container from '@/src/Components/Container/Container';
const OrderPage = async () => {
  return (
    <Container>
      <OrderForm />
      <OrderProductList />
    </Container>
  );
};

export default OrderPage;
