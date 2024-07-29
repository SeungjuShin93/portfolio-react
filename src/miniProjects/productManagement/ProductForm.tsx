import React, { useRef, useState } from 'react';

import styles from './styles/ProductForm.module.css';
import { Product } from './types/product.type';
import { useFocusTransition } from './useFocusTransition';

interface ProductFormProps {
  addProduct: (product: Omit<Product, 'id'>) => void;
}

interface InputsProps {
  name: string;
  price: number | '';
}

const initialValue: InputsProps = {
  name: '',
  price: '',
};

function ProductForm({ addProduct }: ProductFormProps) {
  const [inputs, setInputs] = useState<InputsProps>(initialValue);
  const { name, price } = inputs;

  const handleAddProduct = () => {
    if (name.trim() && price !== '' && price > 0) {
      addProduct({ name, price: Number(price) }); // Convert price to a number
      setInputs(initialValue);
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  };

  const { nameInputRef, priceInputRef, handleKeyDown } =
    useFocusTransition(handleAddProduct);

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  return (
    <div className={styles.productForm}>
      <input
        type='text'
        placeholder='Product Name'
        value={name}
        name='name'
        onKeyDown={(e) => handleKeyDown(e, 'price')}
        onChange={handleInputChanges}
        ref={nameInputRef}
        className={styles.input}
      />
      <input
        type='number'
        placeholder='Product price'
        name='price'
        value={price}
        onKeyDown={(e) => handleKeyDown(e, 'submit')}
        onChange={handleInputChanges}
        ref={priceInputRef}
        className={styles.input}
      />
      <button onClick={handleAddProduct} className={styles.button}>
        Add Product
      </button>
    </div>
  );
}

export default ProductForm;
