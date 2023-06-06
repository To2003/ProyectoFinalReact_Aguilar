import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { Link} from "react-router-dom"
import { useState } from "react"
import swal from 'sweetalert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartCont.css'

export const CartCont = () => {

    //form consts
    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleOnChange = (evt)=>{
        console.log('nombre del input',evt.target.name)
        console.log('valor del input',evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    //orders constsPrecioTotal
    const {cartList, vaciarCarrito, precioTotal, eliminarProd} = useCartContext()

    const generarOrden = (event) => {
        const order = {}
        order.buyer = dataForm
        order.items =cartList.map(({name, id, precio, cantidad}) => ({id, name, precio, cantidad}))
        order.total = precioTotal()

        // Valida la informacion antes de hacer el submit
        event.preventDefault(); // Evita el comportamiento de envío del formulario por defecto
        if (dataForm.name.trim() === '') {
            toast('Por favor ingresa tu nombre');
            return;
        }

        if (dataForm.phone.trim() === '') {
            toast('Por favor ingresa tu teléfono');
            return;
        }

        if (dataForm.email.trim() === '') {
            toast('Por favor ingresa tu correo electrónico');
            return;
        }

        
        //insertar la orden a firebase
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')
        addDoc(ordersCollection, order)
        .then(resp => {
            console.log(resp);
            setId(resp.id)
            swal({
                title: "Compra Realizada!!",
                text: `Gracias por su compra! Su pedido, para mayor seguridad, ha tomado el nombre personalizado de: ${resp.id}`,
                icon: "success",
            });
        })
        .catch(err => console.log(err))
        .finally(() => {
            setDataForm({
                name: '',
                phone: '',
                email: ''
            })
            setTimeout(() => {
                vaciarCarrito()
                setId('')
            }, 60000);
        })

        
    }
    
    return(
        <div>
            { id.length != 0 && <h4> Codigo de compra: {id} </h4>}
            {cartList.length != 0 ?
                <>
                    
                    {cartList.map(prod => (
                    <div className="cartItem">
                        <img src={prod.foto} alt="imagen"/>
                        <label>Cantidad: {prod.cantidad} --- Precio: {prod.precio}</label>
                        <button onClick={() => eliminarProd(prod.id)}> X </button>
                    </div>
                    ))}
                    <h3>Precio total de la compra: {precioTotal()}</h3>
                    <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>

                    <form onSubmit={generarOrden}> 
                        <input 
                            type='text' 
                            name="name" 
                            onChange={handleOnChange}
                            value={dataForm.name} 
                            placeholder="Ingresar Nombre" 
                            required
                        /> 
                        <input 
                            type='text' 
                            name="phone" 
                            onChange={handleOnChange}
                            value={dataForm.phone} 
                            placeholder="Ingresar Telefono" 
                            required
                        /> 
                        <input 
                            type='text' 
                            name="email" 
                            onChange={handleOnChange}
                            value={dataForm.email} 
                            placeholder="Ingresar Correo Electronico" 
                            required
                        /> 
                    </form>

                    <button onClick={generarOrden} className="btn btn-outline-danger">Generar Orden</button>
                </>
                :
                <>
                    <div>
                        <h2> Su Carrito se encuentra vacio por el momento </h2>
                        <Link to='/'> Volver al Inicio </Link>
                    </div>
                </>
            }
        </div>
    )
}