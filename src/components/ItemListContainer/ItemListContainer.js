import './ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    const onAdd = (qty) => {
        if(qty>0){
            alert(`Agregaste ${qty} productos`)
        }
        else
        {
            alert(`La cantidad debe ser superior a 0`)
        }
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
        <ItemCount initial={0} stock={10}  onAdd={onAdd} descripcion="Descripcion_Producto"/>
        </div>
    )
};

export default ItemListContainer;