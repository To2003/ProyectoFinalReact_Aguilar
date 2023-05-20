import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import './ItemDetail.css'

export const ItemDetail = ({id, categoria, name, stock, precio, foto}) => {
    const [isCant, setIsCant] = useState(false)

    const onAdd = (cantidad) => {
        setIsCant(true)
    }

    return (
        <>
            <div className="ItemDetail">

                <div className="ItemDetailCard">
                    <div key={id} className="card w-50" >
                        <Link to={`/detail/${id}`}>
                            <img src={foto} alt="imagen-card" className="card-img-top" />
                        </Link>
    
                        <div className="card-body">
                            <h4>{name}</h4>
                            <label>Categoria: {categoria}</label>
                            <label>Stock: {stock}</label>
                            <label>Precio: ${precio}</label>
                        </div>

                        <div className="card-footer">
                            {
                                !isCant ?
                                    <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
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
