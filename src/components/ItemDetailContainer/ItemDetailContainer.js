import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProduct, getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        console.log("cargando..")
        return <h1>Filtrando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer



/* import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId} = useParams()

    useEffect(() =>{
        getProduct(productId -1).then(response =>{
            setProduct(response)
        }).catch (error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId]) 

    if(loading) {
        return <div> <h2> </h2> </div>    
    }

    return (
        <div className="itemdetail">
            <ItemDetail {...product}/>
        </div>
    )
};

export default ItemListContainer; */