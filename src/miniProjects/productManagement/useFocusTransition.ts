import { useRef } from 'react';

type InputName = 'name' | 'price';

export function useFocusTransition(onSubmit: () => void) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextField: InputName | 'submit'
  ) => {
    if (e.key === 'Enter') {
      if (
        e.currentTarget.name === 'name' &&
        nextField === 'price' &&
        priceInputRef.current
      ) {
        priceInputRef.current.focus();
      } else if (e.currentTarget.name === 'price' && nextField === 'submit') {
        onSubmit();
      }
    }
  };

  return {
    nameInputRef,
    priceInputRef,
    handleKeyDown,
  };
}
