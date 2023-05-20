import { useState, useEffect } from "react"
import { mFetch } from "../../util/mFetch"
import { Filter } from "../Filter/Filter"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

import "./ItemListCont.css"

export const ItemListCont = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

    const { categoria } = useParams()

    useEffect(() =>{

        if (!categoria) {
            mFetch()

            .then( resultado => {
                setProductos(resultado)
            })

            .catch( error => console.log(error))
            .finally(() => setIsLoading(false))

        }else{
            mFetch()
            .then( resultado => {
                setProductos(resultado.filter(producto => producto.categoria === categoria))
            })
            .catch( error => console.log(error))
            .finally(() => setIsLoading(false))
        }
    }, [categoria])

    const handleProductFiltered = ({ filterState, handleFilterChange }) => {
        return(
        <div>
            {filterState}
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filterState} onChange={handleFilterChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>

            <div className="itemListCont">
                { isLoading ? 
                    <h2> Cargando...</h2>
                : 
                    <>
                        {filterState === "" 
                        
                            ? <ItemList productos={productos}/>
                            :
                            productos.filter( producto => producto.name.toLowerCase().includes(filterState.toLowerCase()) ).map(({id, categoria, name, stock, precio, foto}) => 
                            <div key={id} className="card w-25" >
                                <img src={foto} alt="imagen-card" className="card-img-top" />
                                
                                <div className="card-body">
                                    <h4>{name}</h4>
                                    <label>Categoria: {categoria}</label>
                                    <label>Stock: {stock}</label>
                                    <label>Precio: {precio}</label>
                                </div>

                                <div className="card-footer">
                                    <button className="btn btn-outline-dark">Detalle</button>
                                </div>
                            </div>
                            )
                }
                    </>
                }
            </div>
        </div>
        )
    }
    return (
        <div>
            <h2>{greeting}</h2>
                <Filter>
                    { handleProductFiltered }
                </Filter>
            
        </div>
    )
}