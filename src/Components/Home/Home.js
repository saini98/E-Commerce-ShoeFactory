import React ,{useState, useEffect} from 'react'
import Search from '../Search/Search';

import { IoIosCart} from "react-icons/io";
import './Home.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom'
const Home = () => {

    const { products } = useSelector(state => state.ProductReducer)
    console.warn('products', products)
    const [quantity] = useState(1);
    const { id } = useParams();


    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);

    useEffect(() => {
        dispatch({ type: 'PRODUCT_DETAILS', id })
    }, [id])
    return (


        <div>
            
            <Search />
            {/* <div className="main-container">

                {products.map((product,key) =>
                    <div className="container1" key={key}>
                        <div className="img-product">
                            <img src={product.image} alt="" className="image" height={150} width={150} />
                            <button className="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })} ><IoIosCart /><span>Add-to-Cart</span></button>
                        </div>

                        <div className="text-product">
                            <Link to={`/product-details/${product.id}`} className="title-link">
                            <h1 className="title">{product.title}</h1>
                            </Link>
                            <span className="ratings">{product.ratings}</span>
                            <span className = "fa fa-star text-warning"><IoIosStarOutline /></span>  
                            <p>₹ {product.price}</p>
                        </div>
                    </div>

                )}

               
            </div> */}
             <Footer />
        </div>
    )
}

export default Home;
