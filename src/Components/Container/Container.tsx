import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  // пример как работает сонар с ошибками 

  if (1 + 1) { }
  
  let qwe = 34
  return <div className={styles.container}>{children}</div>;
};

export default Container;
