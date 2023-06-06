import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { initFirebase } from '../FireBase/config.js';



let productos = [
    //remeras
    {categoria: 'Remeras', name: "Escobart", stock:50, precio: 10000, foto: "/RemeraEscobart.jpeg"},
    {categoria: 'Remeras', name: "Gon x Killua", stock:50, precio: 10000, foto: "/RemeraGonK.jpeg"},
    {categoria: 'Remeras', name: "Ronronoa Zoro", stock:50, precio: 10000, foto: "/RemeraZoro.jpeg"},

    //gorras
    {categoria: 'Gorras', name: "Naruto", stock:50, precio: 10000, foto: "https://tse4.mm.bing.net/th?id=OIP.1HfesFkdbBSRRyrRCJccCgHaFk&pid=Api&P=0&h=180"},
    {categoria: 'Gorras', name: "Totoro", stock:50, precio: 10000, foto: "https://http2.mlstatic.com/totoro-cosplay-gorra-d-moda-anime-kawaii-envio-gratis-totoro-D_NQ_NP_716702-MLM31225458545_062019-F.jpg"},
    {categoria: 'Gorras', name: "Dragon Ball", stock:50, precio: 10000, foto: "https://images-na.ssl-images-amazon.com/images/I/51PjRAB8pUL._AC_UL1000_.jpg"}
]

export const mFetch = (id) => {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 1500);
    })
}


// Guardar cada producto como un documento individual en Firebase
const dbFirestore = getFirestore()
const guardarProductosEnFirebase = async () => {
    initFirebase();
    try {
    const productosCollection = collection(dbFirestore, 'productos');

    for (const producto of productos) {
        const querySnapshot = await getDocs(
        query(productosCollection, where('name', '==', producto.name))
        );

        if (querySnapshot.empty) {
        await addDoc(productosCollection, producto);
        //console.log(`Producto ${producto.name} guardado en Firebase`);
        } else {
        //console.log(`Producto ${producto.name} ya existe en Firebase, no se guardará duplicado`);
        }
    }
    } catch (error) {
    console.error('Error al guardar productos en Firebase:', error);
    }
};

// Llamar a la función para guardar los productos
guardarProductosEnFirebase();


