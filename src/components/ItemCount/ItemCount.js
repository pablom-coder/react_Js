import { useState } from 'react'

const ItemCount = ({ stock=0, initial=0, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const decremental = () => {
        if ( quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const incremental = () => {
        if ( quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    

    return(
        <div className="container">
            <div>
                <div className="count">
                    <button className="count-container__button" onClick={decremental}
                    disabled={quantity === initial ? true : null}> - </button>

                    <h4>{quantity}</h4>

                    <button className="count-container__button" onClick={incremental}
                    disabled={quantity===stock ? true : null}> + </button>
                </div>
            </div>
            <div>
                <button className="agregar" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount 