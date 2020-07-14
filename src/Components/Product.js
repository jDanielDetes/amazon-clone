import React from 'react'
import '../css/product.css'
import StarIcon from '@material-ui/icons/StarRateRounded';
import { useStateValue } from '../StateProvider'

function Product({id,title,image,price,rating}) {
        const [{},dispatch] = useStateValue()


    const  addToCart =() =>{
dispatch({
    type:'ADD_TO_CART',
    item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
    }
})
    }



    return (
        <div className="product">
            <div className="product__info">
             <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <StarIcon className="rating"/>
                    ))
                }
            </div>
          
            </div>
            <img src={image} alt=""/>
            <button onClick={addToCart}>Add to cart</button>
            
        </div>
    )
}

export default Product
