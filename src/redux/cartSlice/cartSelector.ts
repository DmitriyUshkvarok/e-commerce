import { RootState } from '../store';

const getIsItems = (state: RootState) => state.cart.items;
const geTotalPrice = (state: RootState) => state.cart.totalPrice;

const cartSelector = {
  getIsItems,
  geTotalPrice,
};

export default cartSelector;
