"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { status } = useSession();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      const storageCart = localStorage.getItem("cart");
      if (storageCart) setCart(JSON.parse(storageCart));
    }
  }, [status]);

  useEffect(() => {
    if (status === "unauthenticated") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const syncCart = async () => {
      if (status === "authenticated") {
        try {
          const { data: dbCart } = await axios.get("/api/cart");

          const newAddedCourses = cart.filter(course => !dbCart.find(dbCourse => dbCourse.id === course.id ))

          if(newAddedCourses.length > 0) await axios.post("/api/cart/sync", { newCourses: newAddedCourses });

          setCart([...dbCart, ...newAddedCourses]);

          localStorage.removeItem("cart");
        } catch (error) {
          console.log(error)
        }
      }
    };

    syncCart();
  }, [status]);

  const addToCart = async (course) => {
    const isExist = cart.some(c => c.id === course.id);

    if (!isExist) {
      setCart(prev => [...prev, course]);

      if (status === "authenticated") {
        await axios.post("/api/cart/add", { courseId: course.id });
      }
    }

    return isExist;
  };

  const removeFromCart = async (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));

    if (status === "authenticated") {
      await axios.post("/api/cart/remove", { courseId: id });
    }
  };

  const clearCart = async () => {
    setCart([]);

    if (status === "authenticated") {
      await axios.delete("/api/cart/clear"); 
    }
  };

  const getTotal = () =>
    cart.reduce((sum, c) => sum + (c.discounted_price ?? 0), 0);

  const getCount = () => cart.length;

  return (
    <CartContext.Provider
      value={{ cart, setCart,addToCart, removeFromCart, clearCart, getTotal, getCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
