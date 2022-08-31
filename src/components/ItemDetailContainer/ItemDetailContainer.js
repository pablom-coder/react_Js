import './ItemDetailContainer.css'
import { useAsync } from '../../hooks/useAsync'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { fetcher } from '../../utils/fetcher'
import { getProductById  } from '../../services/firebase/firestore'

const ItemDetailContainer = ({ addItem }) => {

    const { productId } = useParams()
    const { isLoading, data, error } =useAsync(fetcher(getProductById, productId),[productId])
    
    if(isLoading) {
        console.log("cargando..")
        return <h1>Filtrando...</h1>
    }

    if(error){
        return <h1>Hubo un error</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...data} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer