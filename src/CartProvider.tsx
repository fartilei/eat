import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem } from "@/pages/products";

type CartItem = ProductItem & {
    quantity?: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void;
    
};

const CART_VERSION = "1"; // Версия схемы корзины
const CART_EXPIRY_DAYS = 1; // Срок жизни корзины


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
       try {
            const savedCart = localStorage.getItem("cart");
            const savedVersion = localStorage.getItem("cart_version");
            const savedTimestamp = localStorage.getItem("cart_timestamp");

            // Если нет данных или версия не совпадает — возвращаем пустой массив
            if (!savedCart || !savedVersion || savedVersion !== CART_VERSION) {
                return [];
            }

            // Проверяем срок жизни
            if (savedTimestamp && Date.now() - parseInt(savedTimestamp, 10) > CART_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
                localStorage.removeItem("cart");
                localStorage.removeItem("cart_version");
                localStorage.removeItem("cart_timestamp");
                return [];
            }

            const parsedCart: unknown = JSON.parse(savedCart);

            // Простая валидация
            if (!Array.isArray(parsedCart)) return [];

            return parsedCart;
        } catch (e) {
            console.error("Ошибка чтения корзины из localStorage", e);
            return [];
        }
    });

    // Сохраняем корзину + версию и timestamp
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cart_version", CART_VERSION);
        localStorage.setItem("cart_timestamp", Date.now().toString());
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            if (existingItem) {
                return prev.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: (i.quantity || 1) + 1 }
                        : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const increaseQuantity = (id: string) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: (item.quantity || 0) + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id: string) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id && (item.quantity || 1) > 1
                        ? { ...item, quantity: (item.quantity || 1) - 1 }
                        : item
                )
                .filter((item) => item.quantity !== 0)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
    
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};