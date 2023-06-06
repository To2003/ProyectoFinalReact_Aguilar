import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { LoadingSpinner } from "../../Hooks/Loading"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailCont = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState({})
    const { pid } = useParams()

    //Traer 1 solo producto
useEffect(() => {
            const dbFirestore = getFirestore()
            const queryDoc = doc(dbFirestore, 'productos', pid)
    
            getDoc(queryDoc)
                .then(resp => setProductos({id: resp.id, ...resp.data()}))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))

    }, [])

    console.log(productos)


    return (
        <>
            {isLoading ? 
                <LoadingSpinner />
                :
                <ItemDetail producto={productos} />
            }
        </>
    )

}