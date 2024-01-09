'use client';
import { RotatingLines } from 'react-loader-spinner';
import styles from './_loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <RotatingLines
        visible={true}
        width="50"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
