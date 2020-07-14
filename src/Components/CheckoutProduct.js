import React from 'react'
import '../css/checkoutProduct.css'
import {useStateValue} from '../StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{cart},dispatch] = useStateValue()

    const removeFromCart = () =>{
        //remove item from cart
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={Image} alt=""/>
            <div className="checkoutProduct__info">
                <p  className="checkoutProduct__title">{title}</p>

                <p  className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                        <p>star</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct