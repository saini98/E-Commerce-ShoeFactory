import { createStore, combineReducers } from 'redux';
import ProductReducer from './Reducers/productReducer';
import {devToolsEnhancer} from 'redux-devtools-extension'
import CartReducer from './Reducers/cartReducer';
const rootReducer = combineReducers({
    ProductReducer,
    CartReducer
});
const store =   createStore(rootReducer, devToolsEnhancer() );
export default store;