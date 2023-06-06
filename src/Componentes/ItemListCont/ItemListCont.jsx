import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { ItemList } from "../ItemList/ItemList"
import { Filter } from "../Filter/Filter"
import { LoadingSpinner } from "../../Hooks/Loading"


import "./ItemListCont.css"

export const ItemListCont = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [ isLoading, setIsLoading] = useState(true)
    const [meGusta, setMeGusta] = useState(true)

    const { categoria } = useParams()

    useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        if (!categoria) {
    
            getDocs(queryCollection)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
        }else{
    
            const queryCollectionFilt = query(
                queryCollection, 
                where('categoria','==', categoria),
                // orderBy('price', 'asc'),
                // limit(1)
                )
    
            getDocs(queryCollectionFilt)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch(err => console.log(err))
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
                    <LoadingSpinner />
                : 
                    <>
                        {filterState === "" 
                        
                            ? <ItemList productos={productos}/>
                            :
                            productos.filter( producto => producto.name.toLowerCase().includes(filterState.toLowerCase()) ).map(({id, categoria, name, stock, precio, foto}) => 
                            <div key={id} className="card">
                                <img src={foto} alt="imagen-card" className="card-img-top" />
                                
                                <div className="card-body">
                                    <h4>{name}</h4>
                                    <label>Categoria: {categoria}</label>
                                    <label>{ stock === 0 ? 'No Hay Stock' : 'Hay Stock'}</label>
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
        <div className="body">
            <h2>{greeting}</h2>
                <Filter>
                    { handleProductFiltered }
                </Filter>
            
        </div>
    )
}