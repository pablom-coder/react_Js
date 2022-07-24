import './ItemCount.css';
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd, descripcion }) => {
    const [count, setCount] = useState(0)

    const decremental = () => {
        if ( count > initial) {
            setCount(count - 1)
        }
    }

    const incremental = () => {
        if ( count < stock) {
            setCount(count + 1)
        }
    }

    return(
        <div className="container">
            <h3>{descripcion}</h3>
            <div>
                <div className="count">
                    <button className="count-container__button" onClick={decremental}
                    disabled={count === initial ? true : null}> - </button>

                    <h4>{count}</h4>

                    <button className="count-container__button" onClick={incremental} 
                    disabled={count===stock ? true : null}> + </button>
                </div>
            </div>

                <button className="agregar" onClick={() => onAdd(count)}>Agregar al carrito</button>


        </div>
    )
}

export default ItemCount 