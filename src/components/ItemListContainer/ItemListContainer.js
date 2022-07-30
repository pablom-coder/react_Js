import './ItemListContainer.css';
/* import './ItemListContainer' */
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = (props) => {
    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)        
        }).catch (error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <h2>Cargando producto...</h2>
    }

    /* const onAdd = (qty) => {
        if(qty>0){
            alert(`Agregaste ${qty} productos`)
        }
        else
        {
            alert(`La cantidad debe ser superior a 0`)
        }
    } */

    return (
        <div>
            <h1>{props.greeting}</h1>
            
            <div>
                <ItemList products={products}/>
            </div>
            
        </div>
    )
};

export default ItemListContainer;