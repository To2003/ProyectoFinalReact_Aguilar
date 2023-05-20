import { useCounter } from "../../Hooks/useCounter"
import './ItemCount.css'

export const ItemCount = ( { initial=1, stock=10, onAdd} ) => {

    const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    const handleOnAdd = () => {

    }

    return (
        <div className="ItemCount">
            <div className="clickers">
                <button onClick={handleRestar}>-1</button>
                <label className="cantidad">{counter}</label>
                <button onClick={handleSumar}>+1</button>
            </div>

            <button onClick={()=>{onAdd(counter)}}>Agregar al Carrito</button>
        </div>
        )
}