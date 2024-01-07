export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductListProps {
  currentPage: number;
  data: CartItem[] | undefined;
  isLoading: boolean;
  error?: CustomError;
}

export interface CustomError {
  status?: number;
  data?: any;
}
