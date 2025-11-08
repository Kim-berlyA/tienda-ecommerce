import React, { useState, useContext, createContext, useEffect } from "react";

interface CartItem {
  productId: number
  title: string
  price: number
  stock: number
  quantity: number
  thumbnail: string
  description: string
};

type CartContextType = {
  cart: CartItem[];
  totalPrice: number
  addToCart: (id: number, title: string, price: number, stock: number, thumbnail: string, description:string) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.price * 100) * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);


  function addToCart(id: number, title: string, price: number, stock: number, thumbnail: string, description: string): void {
    setCart(prev => {
      const existing = prev.find(p => p.productId === id);
      if (existing) {
        return prev.map(p =>
          p.productId === id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { productId: id, title, price, stock, thumbnail, description, quantity: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart(prev => {
      const found = prev.find(p => p.productId === id);
      if (!found) return prev;
      if (found.quantity > 1) {
        return prev.map(p =>
          p.productId === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return prev.filter(p => p.productId !== id);
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
