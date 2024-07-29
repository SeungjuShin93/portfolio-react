import React from 'react';

import styles from './styles/ProductList.module.css';
import { Product } from './types/product.type';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Product[];
  updateProduct: (id: number, updatedProduct: Omit<Product, 'id'>) => void;
  removeProduct: (id: number) => void;
}

function ProductList({
  products,
  updateProduct,
  removeProduct,
}: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          updateProduct={updateProduct}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
