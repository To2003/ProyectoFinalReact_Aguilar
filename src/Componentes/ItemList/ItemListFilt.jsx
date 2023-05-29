export const ItemListFilt = ({filterState, productos}) => {
        return(
        <>
            {productos.filter( producto => producto.name.toLowerCase().includes(filterState.toLowerCase()) ).map(({id, categoria, name, stock, precio, foto}) => 
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
        )
    }