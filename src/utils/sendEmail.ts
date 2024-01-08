import nodemailer from 'nodemailer';
import { orderConfirmationHtml } from './htmlEmail';

interface OrderDetails {
  to: string;
  url: string;
  text: string;
  products: any[];
  totalPrice: number;
}

const sendEmail = async (to: string, orderDetails: OrderDetails) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.UKR_NET_EMAIL_USER,
      pass: process.env.UKR_NET_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.UKR_NET_EMAIL_USER,
    to,
    subject: 'Повiдомлення про замовлення',
    html: orderConfirmationHtml({ orderDetails }),
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
