export const StockLabel = ({producto: {stock}}) => {
    return (
        <label className={ (stock === 0) ?  "alert alert-danger" : "alert alert-success"}>{ stock === 0 ? 'No Hay Stock' : 'Hay Stock'}</label>
    )
}