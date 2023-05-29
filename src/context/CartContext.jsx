import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    return(
        <CartContext.Provider value={{
            //estados y funciones intectados
            cartList,
            addToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}