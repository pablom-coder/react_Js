import {useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'
import { db } from '../../services/firebase/index'
import { addDoc, collection, Timestamp, getDocs,query, where, documentId, writeBatch } from 'firebase/firestore'


const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext)
    const [name, setname] = useState("");
    const [phone, setphone] = useState(0);
    const [email, setemail] = useState("");
    const [purchase, setPurchase] = useState(0)
    const [orderN, setOrderN] = useState("")

    if (purchase === 1){
        return(  
            <div>
                <h1>Gracias por tu compra, {name}!</h1>
                <h2>Tu Numero de Orden es: #{orderN}</h2>
            </div>)
    }

    const createOrders = async (e) =>{
        try{
            e.preventDefault();
            // Creación de objeto orden
            const objetoOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email,
                },
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total,                
            };
            const ids = cart.map((e) => e.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAdded?.quantity
                // Si es que hay stock
                if(stockDb >= productQuantity){
                    batch.update(doc.ref, { stock: stockDb - productQuantity})  
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objetoOrder)
                batch.commit()
                console.log(orderAdded.id)
                clearCart()
                setOrderN(orderAdded.id)
                setPurchase(1)
            }else{
                console.log('Hay productos fuera de stock')
            }
        } catch (error){
            console.log(error);
        }/* finally{
            console.log('Finalización ejecución de la funcion CreateOrder')
        } */
    };   

    return(
        <div className="form__container">
        <p className="titulo">Checkout</p>
        <form className="form">
          <input
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="form__input"
            type="text"
            placeholder="Nombre"
          />
          <input
            required
            onChange={(e) => {
              setphone(e.target.value);
            }}
            className="form__input"
            type="tel"
            placeholder="Telefono"
          />
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="form__input"
            type="email"
            placeholder="Email"
          />
          <button className="button" type="button" onClick={createOrders}>
            Crear Orden
          </button>
        </form>
      </div>

        
    )
    
}
export default Checkout

{/* <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button className="Button" onClick={createOrders}>Generar Orden</button>
        </div> */}