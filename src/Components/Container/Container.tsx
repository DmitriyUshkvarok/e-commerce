import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  const config = {
    API_KEY: 'super-secret-key-12345',
    API_LOCAL: 'djn77hhebdh',
  };

  fetch(`https://qwe?${config.API_KEY}`);
  return <div className={styles.container}>{children}</div>;
};

export default Container;
