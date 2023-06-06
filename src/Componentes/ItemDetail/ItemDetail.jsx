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
                    <div className="card" >
                            <img src={producto.foto} alt="imagen-card" className="cards" />
                        <div className="card-body">
                            <h2>{producto.name}</h2>
                            <h4>Categoria: {producto.categoria}</h4>
                            <h5>Stock: {producto.stock}</h5>
                            <h5>Precio: ${producto.precio}</h5>
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
