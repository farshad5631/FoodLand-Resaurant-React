import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

const getCartData = () => {
  const storedCart = localStorage.getItem("cart");
  const storedDate = localStorage.getItem("cartDate");
  const today = new Date().toDateString();

  if (storedDate !== today) {
    localStorage.removeItem("cart");
    localStorage.setItem("cartDate", today);
    return [];
  }

  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartData());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartDate", new Date().toDateString());

    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.setItem("cartDate", new Date().toDateString());
      setCart([]);
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [cart]);

  const addToCart = (meal) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === meal.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === meal.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...meal, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateCartQuantity, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);








// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart'));
//     const storedDate = localStorage.getItem('cartDate');
//     const today = new Date().toDateString();

//     if (storedCart && storedDate === today) {
//       setCart(storedCart);
//     } else {
//       localStorage.removeItem('cart');
//       localStorage.removeItem('cartDate');
//     }
//   }, []);

//   useEffect(() => {
//     const today = new Date().toDateString();
//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('cartDate', today);
//   }, [cart]);

//   const addToCart = (food) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === food.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === food.id ? { ...item, quantity: item.quantity + food.quantity } : item
//         );
//       } else {
//         return [...prevCart, food];
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

