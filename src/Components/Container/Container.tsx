import styles from './_container.module.scss';
import { RootLayoutProps } from '@/src/app/layout';

const Container = ({ children }: RootLayoutProps) => {
  // const beer = () => {
  //   return 1;
  // };
  function emptyFunction() {
    // Функция ничего не делает
  }

  return (
    <>
      <div></div>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Container;
