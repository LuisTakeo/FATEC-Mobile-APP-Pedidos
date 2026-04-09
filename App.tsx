import React, { useState } from 'react';
import { CompactLayout } from './src/components/CompactLayout';
import { ConfirmationModal } from './src/components/ConfirmationModal';
import { useMenu } from './src/hooks/useMenu';

export default function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {
    productValue,
    setProductValue,
    drinkValue,
    setDrinkValue,
    selectedProduct,
    selectedDrink,
    total,
  } = useMenu();

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  return (
    <>
      <CompactLayout
        productValue={productValue}
        setProductValue={setProductValue}
        drinkValue={drinkValue}
        setDrinkValue={setDrinkValue}
        selectedProduct={selectedProduct}
        selectedDrink={selectedDrink}
        total={total}
        onConfirmOrder={handleConfirmOrder}
      />
      <ConfirmationModal
        visible={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        productLabel={selectedProduct.label}
        drinkLabel={selectedDrink.label}
        total={total}
      />
    </>
  );
}