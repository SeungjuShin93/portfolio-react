import { useState, useRef } from 'react';
import styles from './styles/ProductApp.module.css';
import { Product } from './types/product.type';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const mockData = [
  {
    id: 0,
    name: '안경',
    price: 15000,
  },
  {
    id: 1,
    name: '모자',
    price: 8000,
  },
  {
    id: 2,
    name: '티셔츠',
    price: 7000,
  },
];
export default function ProductApp() {
  const [products, setProducts] = useState<Product[]>(mockData);

  const nextId = useRef(3);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      id: nextId.current++,
      ...product,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: number, updatedProduct: Omit<Product, 'id'>) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { id, ...updatedProduct } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Product Management</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}
