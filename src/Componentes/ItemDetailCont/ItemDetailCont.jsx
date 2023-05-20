import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { mFetch } from "../../util/mFetch"

export const ItemDetailCont = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
        .then(resp => setProducto(resp))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }, [])

    console.log(pid)


    return (
        <>
            {isLoading ? 
                <h2>Cargando...</h2>
                :
                <ItemDetail {... producto} />
            }
        </>
    )

}