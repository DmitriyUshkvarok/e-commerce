import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  const config = {
    API_KEY: '1234567890abcdef', // Это секретный ключ
    // другие конфигурационные параметры
  };

  //  убираем ошибки для успешного деплоя

  function fu() {}

  fetch(`https://qwe?${config.API_KEY}`);
  return <div className={styles.container}>{children}</div>;
};

export default Container;
