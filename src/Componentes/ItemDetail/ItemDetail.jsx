import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"



import './ItemDetail.css'

export const ItemDetail = ({producto}) => {
    const [isCant, setIsCant] = useState(false)

    const {addToCart, cartList} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart( { ...producto, cantidad } )
        setIsCant(true)
    }

    //console.log(cartList)

    return (
        <>
            <div className="ItemDetail">

                <div className="ItemDetailCard">
                    <div className="card w-50" >
                            <img src={producto.foto} alt="imagen-card" className="card-img-top" />
                        <div className="card-body">
                            <h4>{producto.name}</h4>
                            <label>Categoria: {producto.categoria}</label>
                            <label>Stock: {producto.stock}</label>
                            <label>Precio: ${producto.precio}</label>
                        </div>

                        <div className="card-footer">
                            {
                                !isCant ?
                                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                                :
                                <>
                                    <Link to='/cart' className="btn btn-outline-danger">
                                        Terminar Compra
                                    </Link>

                                    <Link to='/' className="btn btn-outline-success">
                                        Continuar Compra
                                    </Link>
                                    
                                </>
                            }
                            
                        </div>
                    
                    </div>
                
                </div>

            </div>
        </>
    )
}
