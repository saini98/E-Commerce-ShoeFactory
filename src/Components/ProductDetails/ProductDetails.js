import React, { useEffect, useState } from 'react'
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Review from '../Review/Review';
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Navbar'

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();


    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);

    useEffect(() => {
        dispatch({ type: 'PRODUCT_DETAILS', id })
    }, [id])

    // const decrementQuantity = () => {
    //     if(quantity > 1)
    //     {
    //         setQuantity(quantity-1)
    //     }
    // }

    // const incrementQuantity = () =>
    // {
    //     setQuantity(quantity+1)
    // }
    if (!product || Object.keys(product).length === 0) return null;
    return (
        <>
        
        <div className="productDetails">
            <div className="details">
                <div className="mt-5">
                    <img src={product ?.image} width={300} height={300} />
                </div>
                <div className="box1">
                    <div className="row1">
                        <h2>{product.title}</h2>

                    </div>

                    <p className="ratings">{product.ratings}</p>
                    <div>
                        <p>Rs. {product.price}</p>
                        {product.size &&
                            <select >
                                <option value="1">Size</option>
                                {product.size.map((s,key) => {
                                    return (
                                        <option key={key}>{s}</option>
                                    )
                                }

                                )}
                                
                            </select>}
                    </div>

                    <p>{product.description}</p>
                    {/* <p>{product.content}</p> */}



                    <button className="cart" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>Add to Cart</button>

                </div>
            </div>
            <div className="review-container mt-5" >
                <div className="left-container">
                    <div className="side-image">
                        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" height={100} width={100} />
                    </div>
                    <div className="right-side ml-3">
                        <h1>Afzal </h1>
                        <p>May 7, 2021</p>
                        <p className="ratings"> {product.ratings}</p>
                    </div>

                </div>
                <div className="right-container">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                </div>
            </div>

            <div className="review-container mt-5" >
                <div className="left-container">
                    <div className="side-image">
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" height={100} width={100} />
                    </div>
                    <div className="right-side ml-3">
                        <h1>Sahil Saini</h1>
                        <p>April 29, 2021</p>
                        <p className="ratings"> {product.ratings}</p>
                    </div>

                </div>
                <div className="right-container">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default ProductDetails
