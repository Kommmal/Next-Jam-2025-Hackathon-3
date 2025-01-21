"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SingleProduct {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  colors: string[];
  sizes: string[];
}

interface CartContextType {
  cart: SingleProduct[];
  addToCart: (product: SingleProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  calculateSubtotal: () => void
  discount: number;
  deliveryFee: number;
  total:number;
  search: string;
  setSearch: (value: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<SingleProduct[]>([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        localStorage.removeItem("cart"); 
      }
    }
  }, []); 

 
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: SingleProduct) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  const calculateSubtotal = () =>{
   return cart.reduce((total, item) => total + item.price, 0);
  }
  const discount = calculateSubtotal() * 0.2;
  const deliveryFee = 15;
  const total = calculateSubtotal() - discount + deliveryFee;


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, calculateSubtotal,discount, deliveryFee,total,search, setSearch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
