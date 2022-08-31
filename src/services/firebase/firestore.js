import { getDocs, collection, query, where, getDoc, doc} from "firebase/firestore"
import { db } from "./index"
import { adapterProduct } from '../../adapters/productAdapter'

export const getProducts = (categoryId) => {
    const collectionRef = !categoryId 
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category', '==', categoryId))

    return getDocs(collectionRef).then(response =>{
        const productsDB = response.docs.map(doc => {
            return adapterProduct(doc)
        })
            return productsDB
        }).catch(error => {
            return error
        })
}

 export const getProductById = (id) => {
    return getDoc(doc(db, 'products', id)).then(response =>{
        const data = response.data()
        const productDB = { id : response.id, ...data}
        return productDB
    }).catch(error => {
        return error
    })
}