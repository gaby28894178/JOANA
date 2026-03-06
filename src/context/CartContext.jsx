import { useState, useEffect } from "react";
import { CartContext } from "./cartCtx";

export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([]);

  // Removed localStorage persistence as per user request
  // useEffect(() => {
  //   localStorage.setItem("cart_items", JSON.stringify(items));
  // }, [items]);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);
  const addItem = (item) => {
    setItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        const currentQty = Number(newItems[existingItemIndex].quantity) || 0;
        newItems[existingItemIndex].quantity = currentQty + 1;
        return newItems;
      }
      return [...prev, { ...item, price: Number(item.price), quantity: 1 }];
    });
  };
  
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setItems((prev) => prev.map((item) => {
      if (item.id === id) {
        const currentQty = Number(item.quantity) || 0;
        const newQuantity = Math.max(1, currentQty + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, open, openCart, closeCart, addItem, removeItem, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
