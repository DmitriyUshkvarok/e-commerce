'use client';
import styles from './_sidebar.module.scss';
import Loader from '../ui/Loader/Loader';

interface SidebarProps {
  categories: string[];
  loading: boolean;
  error?: any;
  selectedCategory: string | null;
  onCategoryClick: (category: string | null) => void;
}

const Sidebar = ({
  categories,
  loading,
  error,
  selectedCategory,
  onCategoryClick,
}: SidebarProps) => {
  if (error) {
    return <p>Error fetching categories</p>;
  }

  return (
    <div className={styles.sidebarContainer}>
      <h2 className={styles.sidebar_title}>Категорії</h2>
      {loading ? (
        <Loader />
      ) : (
        <ul className={styles.categoryList}>
          <li
            key="all"
            onClick={() => onCategoryClick(null)}
            className={`${styles.categoryItem} ${
              selectedCategory === '' && styles.selectedCategory
            }`}
          >
            {selectedCategory === null
              ? 'Всі категорії (вибрано)'
              : 'Всі категорії'}
          </li>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => onCategoryClick(category)}
              className={`${styles.categoryItem} ${
                selectedCategory === category && styles.selectedCategory
              }`}
              data-testid={`category-item-${category}`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
