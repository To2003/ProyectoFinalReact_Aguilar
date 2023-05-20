import { Link } from "react-router-dom"

export const Item = ({id, categoria, name, stock, precio, foto}) => {
    return (
        <div key={id} className="card w-25" >
            <Link to={`/detail/${id}`}>
                <img src={foto} alt="imagen-card" className="card-img-top" />
            </Link>
            
            <div className="card-body">
                <h4>{name}</h4>
                <label>Categoria: {categoria}</label>
                <label>Stock: {stock}</label>
                <label>Precio: {precio}</label>
            </div>

            <div className="card-footer">
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-outline-dark">Detalle</button>
                </Link>
            </div>
        </div>
    )
}