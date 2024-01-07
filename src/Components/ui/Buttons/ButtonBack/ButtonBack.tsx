'use client';
import styles from './_button-back.module.scss';
import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleBack} className={styles.btnBack}>
      Повернуться назад
    </button>
  );
};

export default ButtonBack;
