import { useCartContext } from "../../context/CartContext"
import "./CartWidget.css"


export const CartWidget = () => {
    const {cantTotal} = useCartContext()
    return (
        <div className="cart-widget">
            {cantTotal()}
            <img src="../public/CartWidget.jpeg" alt="CartWidget" height="32px"/>
        </div>
    )
}