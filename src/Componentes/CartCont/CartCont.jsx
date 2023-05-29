import { useCartContext } from "../../context/CartContext"

export const CartCont = () => {

    const {cartList} = useCartContext()
    
    return(
        <div>
            {cartList.map(prod => (
                <img src={prod.foto} alt="imagen"/>
            ))}
        </div>
    )
}