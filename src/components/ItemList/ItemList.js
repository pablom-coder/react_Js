import Item from '../Item/Item'

const ItemList =({products}) => {
    return(
        <div className="contenedor_list">
            {products.map(product => (
                <Item product={product} key={product.id}/>
        ))}
        </div>        
    )
}
export default ItemList