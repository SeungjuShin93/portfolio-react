import { useEffect, useState } from 'react';
import styles from './styles/ProductItem.module.css';
import { Product } from './types/product.type';
import { useFocusTransition } from './useFocusTransition';

interface ProductItemProps {
  product: Product;
  updateProduct: (id: number, updatedProduct: Omit<Product, 'id'>) => void;
  removeProduct: (id: number) => void;
}

function ProductItem({
  product,
  updateProduct,
  removeProduct,
}: ProductItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = () => {
    updateProduct(product.id, { name, price });
    setIsEditing(false);
  };

  const { nameInputRef, priceInputRef, handleKeyDown } =
    useFocusTransition(handleUpdate);

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className={styles.productItem}>
      {isEditing ? (
        // 수정 모드
        <div className={styles.editing}>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'price')}
            ref={nameInputRef}
            className={styles.input}
          />
          <input
            type='number'
            name='price'
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            onKeyDown={(e) => handleKeyDown(e, 'submit')}
            ref={priceInputRef}
            className={styles.input}
          />
          <button onClick={handleUpdate} className={styles.button}>
            Save
          </button>
        </div>
      ) : (
        // 보기 모드
        <div className={styles.view}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.price}>{product.price}</span>
          <button onClick={() => setIsEditing(true)} className={styles.button}>
            Edit
          </button>
          <button
            onClick={() => removeProduct(product.id)}
            className={styles.button}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
