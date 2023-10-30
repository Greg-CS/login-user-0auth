import React from 'react'
import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

export const Context = ({children}) => {
    
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts, setCartProducts] = useState([]);
    const [productSpecifics, setProductSpecifics] = useState([]);
    
    useEffect(() => {
        if (cartProducts?.length > 0) {
        ls?.setItem("cart", JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        if (ls && ls.getItem("cart")) {
        setCartProducts(JSON.parse(ls.getItem("cart")));
        }
    }, []);

    function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
    }
    
    return (
    <Context.Provider
        value={{
        cartProducts,
        addProduct,
        }}
    >
        {children}
    </Context.Provider>
    );
}
