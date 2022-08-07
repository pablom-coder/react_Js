import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react'
import { getProducts,getProductByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom';

const ItemListContainer = (greeting) => {
    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunction= categoryId ? getProductByCategory : getProducts;

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch (error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })       
    }, [categoryId])

    if(loading){
        return <h2>Cargando producto...</h2>
    }

    if(products.length === 0) {
        return categoryId ? <h1>No hay productos en esa categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <div>
            {/* <h1>{`${greeting} ${categoryId || ''}`}</h1> */}            
            <div>
                <ItemList products={products}/>
            </div>
            
        </div>
    )
};

export default ItemListContainer;