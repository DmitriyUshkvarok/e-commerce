'use client';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootLayoutProps } from '../app/layout';

const ReduxProvider = ({ children }: RootLayoutProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
