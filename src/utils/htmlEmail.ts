interface OrderDetails {
  products: { title: string; price: number }[];
  totalPrice: number;
}

export function orderConfirmationHtml({
  orderDetails,
}: {
  orderDetails: OrderDetails;
}) {
  const orderItemsHtml = ((orderDetails && orderDetails?.products) || [])
    .map((item) => {
      return `
        <p>${item?.title} - ${item?.price} грн</p>
      `;
    })
    .join('');

  return `
    <h2>Ваше замовлення отримано!</h2>
    <p>Дякуємо за ваше замовлення!</p>
    <p>Деталі замовлення:</p>
     <div>${orderItemsHtml}</div>
    <p>Загальна вартість: ${orderDetails && orderDetails?.totalPrice} грн</p>
  `;
}
