import initialState from '../../data';
const ProductReducer = (state = initialState, action) =>
{
    switch(action.type){
        case "PRODUCT_DETAILS":
            return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductReducer;
