import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  return (
    <>
      {/* лл */}
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Container;
