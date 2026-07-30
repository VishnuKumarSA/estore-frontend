import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext";
import { CartAPI, CommonAPI } from "../services.js/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const { token } = useAuth();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [showCartSuccessModal, setShowCartSuccessModal] = useState(false);

    const fetchCartCount = useCallback(async () => {
        try {
            const response = await CommonAPI("cart-count");

            if (response.status === 200) {
                setCartCount(response.data.cartItemCount);
            }
        } catch (e) {
            console.log(e);
        }
    }, []);

    const addToCart = async (product_id, qty = 1) => {
        try {
            if (!token) {
                setOpenAuthModal(true);
                return false;
            }
            const data = {
                product_id: product_id,
                quantity: 1
            }
            const response = await CartAPI('cart', data);
            if (response.status === 201) {
                setShowCartSuccessModal(true);
                setCartCount(prev => prev + qty);
            }

        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        if (token) {
            fetchCartCount();
        } else {
            setCartCount(0);
        }
    }, [token, fetchCartCount]);


    return (
        <CartContext.Provider value={{ cartCount, setCartCount, openAuthModal, showCartSuccessModal, addToCart, setOpenAuthModal, setShowCartSuccessModal, fetchCartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);