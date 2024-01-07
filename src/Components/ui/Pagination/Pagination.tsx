'use client';
import styles from './_pagination.module.scss';
import { useRouter, usePathname } from 'next/navigation';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    router.push(`${pathName}/?product/?current-page-${page}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination_btn_prev}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles.pagination_btn_count} ${
            index + 1 === currentPage ? styles.active : ''
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={styles.pagination_btn_next}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
