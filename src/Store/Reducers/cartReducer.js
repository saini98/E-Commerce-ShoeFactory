const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity:0,
    

}

const CartReducer = (state = initialState, action) => {

    let searchProduct;
    let index;

    switch(action.type){


        case 'ADD_TO_CART':
            const {product, quantity} = action.payload;
            // console.log(product.id)
            const checkIsItemAdded = state.products.find(pr => pr.id === product.id)
            if(checkIsItemAdded) 
            {
                return state
            } 
            else
            {
                const TotalPrice = state.totalPrice + product.price * quantity;
                const TotalQuantity = state.totalQuantity + quantity;
                product.quantity=quantity;
                console.log('Total Price',TotalPrice);

                return {
                    ...state, products: [...state.products, product], totalPrice: TotalPrice,
                    totalQuantity: TotalQuantity
                }
            }

            case 'INCREMENT':
                searchProduct = state.products.find(product => product.id === action.payload);
                index = state.products.findIndex(product => product.id === action.payload);
                searchProduct.quantity = searchProduct.quantity+1; //Increasing Quantity
                searchProduct.price = searchProduct.price*1; //increase price after increasing the quantity
            
                state.products[index] = searchProduct;
                
                return{
                    ...state,
                    totalPrice: state.totalPrice + searchProduct.price, totalQuantity: state.totalQuantity+1
                   
                }

            case 'DECREMENT':
                searchProduct = state.products.find(product => product.id === action.payload);
                index = state.products.findIndex(product => product.id === action.payload);
                if(searchProduct.quantity > 1){
                    searchProduct.quantity = searchProduct.quantity-1; //Decreasing Quantity
                   // searchProduct.price = searchProduct.price  ; //Decrease price after increasing the quantity
                    state.products[index] =searchProduct;
                    return{
                        ...state,
                        totalPrice: state.totalPrice - searchProduct.price, totalQuantity: state.totalQuantity -1
                    }
                }
                else
                {
                    return state;
                }
               
            
        default:
            return state;
    }
}

export default CartReducer;