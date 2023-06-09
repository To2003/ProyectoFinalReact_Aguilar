import { useCounter } from "../../Hooks/useCounter"
import './ItemCount.css'

export const ItemCount = ( { initial, stock, onAdd} ) => {

    const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    return (
        <>
            { stock === 0 ? 
                <label className={ (stock === 0) ?  "alert alert-danger" : "alert alert-success"}>{ stock === 0 ? 'No Hay Stock' : 'Hay Stock'}</label>
                :
                <div className="ItemCount">
                    <div className="clickers">
                        <button onClick={handleRestar}>-1</button>
                        <label className="cantidad">{counter}</label>
                        <button onClick={handleSumar}>+1</button>
                    </div>
        
                    <button onClick={()=>{onAdd(counter)}}>Agregar al Carrito</button>
                </div>
            }
        </>
        )
}