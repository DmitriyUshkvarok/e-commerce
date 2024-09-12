export interface ProductDetailsProps {
  productId: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CustomError {
  status?: number;
  data?: any;
}
