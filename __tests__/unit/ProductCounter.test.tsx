import persisteQuantityReducer, {
  incrementQuantity,
  decrementQuantity,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';

jest.mock('redux-persist', () => ({
  ...jest.requireActual('redux-persist'),
  persistReducer: jest.fn((config, reducer) => reducer),
}));

describe('persisteQuantityReducer', () => {
  it('should correctly increment the quantity', () => {
    const initialState = { 1: 2, _persist: { version: -1, rehydrated: true } };
    const nextState = persisteQuantityReducer(
      initialState,
      incrementQuantity({ itemId: 1 })
    );

    expect(nextState).toEqual({
      1: 3,
      _persist: { version: -1, rehydrated: true },
    });
  });

  it('should correctly decrement the quantity', () => {
    const initialState = { 1: 3, _persist: { version: -1, rehydrated: true } };
    const nextState = persisteQuantityReducer(
      initialState,
      decrementQuantity({ itemId: 1 })
    );

    expect(nextState).toEqual({
      1: 2,
      _persist: { version: -1, rehydrated: true },
    });
  });

  it('should correctly set the quantity by id', () => {
    const initialState = { 1: 3, _persist: { version: -1, rehydrated: true } };
    const nextState = persisteQuantityReducer(
      initialState,
      setQuantityById({ itemId: 1, quantity: 5 })
    );

    expect(nextState).toEqual({
      1: 5,
      _persist: { version: -1, rehydrated: true },
    });
  });
});
