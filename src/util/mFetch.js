let productos = [
    {id: '1', categoria: 'Remeras', name: "Escobart", stock:50, precio: 10000, foto: "/RemeraEscobart.jpeg"},
    {id: '2', categoria: 'Remeras', name: "Gon x Killua", stock:50, precio: 10000, foto: "/RemeraGonK.jpeg"},
    {id: '3', categoria: 'Remeras', name: "Ronronoa Zoro", stock:50, precio: 10000, foto: "/RemeraZoro.jpeg"},

    {id: '4', categoria: 'Gorras', name: "Naruto", stock:50, precio: 10000, foto: "https://tse4.mm.bing.net/th?id=OIP.1HfesFkdbBSRRyrRCJccCgHaFk&pid=Api&P=0&h=180"},
    {id: '5', categoria: 'Gorras', name: "Totoro", stock:50, precio: 10000, foto: "https://http2.mlstatic.com/totoro-cosplay-gorra-d-moda-anime-kawaii-envio-gratis-totoro-D_NQ_NP_716702-MLM31225458545_062019-F.jpg"},
    {id: '6', categoria: 'Gorras', name: "Dragon Ball", stock:50, precio: 10000, foto: "https://images-na.ssl-images-amazon.com/images/I/51PjRAB8pUL._AC_UL1000_.jpg"}
]

export const mFetch = (id) => {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 1500);
    })
}
