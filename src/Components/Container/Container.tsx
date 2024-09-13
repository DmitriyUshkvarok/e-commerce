import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  // примеры для теста сонар с невалидым кодом и случаем когда все хорошо
// не валидный код
  if (1 + 1) {
  }
  const qwe = 1;
  return <div className={styles.container}>{children}</div>;
};

export default Container;
