import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  //  убираем ошибки для успешного деплоя
  const API_KEY = '1234567789qwe';
  
  if (API_KEY) {
  }
  return <div className={styles.container}>{children}</div>;
};

export default Container;
