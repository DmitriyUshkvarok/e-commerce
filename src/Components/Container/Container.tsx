import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  if (1 + 1) {
  }

  const ren = 23;
  return <div className={styles.container}>{children}</div>;
};

export default Container;
