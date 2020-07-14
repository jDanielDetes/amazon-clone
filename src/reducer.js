export const initialState={
    cart:[],
}


export const getCartTotal = (cart) => cart?.reduce((amount,item) => item.price +amount, 0)



const  reducer = (state,action) => {
    console.log(action)
    switch(action.type) {

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }


        case 'ADD_TO_CART' :
            // Logic for adding item to cart
            return{
                ...state,
                cart:[...state.cart,action.item]
            };
      
            
            case 'REMOVE_FROM_CART' :
                //Logic for removing item from basket
                let newCart = [...state.cart];

                const index=state.cart.findIndex((cartItem) => cartItem.id === action.id)

                if(index >= 0){
                    //item exists in cart,remove it
                    newCart.splice(index,1)
                } else {
                    console.warn(
                        `Cant remove product (id: ${action.id}) from cart`
                    )
                }

                return {...state,cart:newCart}

                
         

            default:
                return state;
    }
}


export default reducer 