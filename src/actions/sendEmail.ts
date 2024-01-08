'use server';
import sendEmail from '../utils/sendEmail';

interface OrderDetails {
  email: string;
  products: any[];
  totalPrice: number;
}

export const sendEmailOrder = async (data: OrderDetails) => {
  const { email, products, totalPrice } = data;

  const orderDetails = {
    to: email,
    url: `${process.env.BASE_URL}`,
    text: 'Повiдомлення про замовлення',
    products: products,
    totalPrice: totalPrice,
  };

  await sendEmail(email, orderDetails);

  return { msg: 'Seccesfully!' };
};
