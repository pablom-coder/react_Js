import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore'
import { fetcher } from '../../utils/fetcher'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({greeting}) => {

    const {  categoryId } = useParams()
    const { isLoading, data, error } = useAsync(fetcher(getProducts, categoryId), [categoryId])
 
    if(isLoading){
        return <h2>Cargando producto...</h2>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1>No hay productos en esa categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <div>
            {/* <h1>{`${greeting} ${categoryId || ''}`}</h1> */}            
            <div>
                <ItemList products={data}/>
            </div>
            
        </div>
    )
};

export default ItemListContainer;