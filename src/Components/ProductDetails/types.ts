export interface ProductDetailsProps {
  productId: string;
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
