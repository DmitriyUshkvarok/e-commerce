'use client';
import styles from './_search_product.module.scss';
import { useState } from 'react';

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

const ProductSearch = ({ onSearch }: ProductSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={styles.input_container}>
      <input
        type="text"
        placeholder="пошук продуктів..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProductSearch;
