import { createContext, useContext, useState } from "react";
import { LoadingSpinner } from "../Hooks/Loading";
import { useEffect } from "react";
import { mFetch } from "../util/mFetch";
import { useParams } from "react-router-dom";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    //estados y funciones globales
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }, [])

    // Cantidad total de productos
    const cantTotal = () => cartList.reduce((total, cantProd) => total += cantProd.cantidad,0)

    //Precio Total de la compra
    const precioTotal = () => cartList.reduce((total, precioProd) => total += (precioProd.precio*precioProd.cantidad),0)

    // Eliminar x Item
    const eliminarProd = (pid) => {
        setCartList(cartList.filter(prod => prod.id != pid))
    }

    // Agregar al Carrito
    const addToCart = (newProduct) => {

        const idx = cartList.findIndex(prod => newProduct.id === prod.id)

        if (idx === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])
        } else {
            cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
            setCartList([...cartList]) //forzamos el render
        }

    }

    // Vaciar Carrito
    const vaciarCarrito = () => {
        setCartList([])
    }


    return(

        <>
            {isLoading ? 
                <LoadingSpinner />
                :        
                <CartContext.Provider value={{
                    //estados y funciones intectados
                    cartList,
                    addToCart,
                    vaciarCarrito,
                    precioTotal,
                    cantTotal,
                    eliminarProd
                }}>
                    { children }
                </CartContext.Provider>
            }
        </>
    )
}