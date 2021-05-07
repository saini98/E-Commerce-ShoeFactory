import React from 'react'
import './Cart.css';
import ShippingNavigation from '../ShippingNavigation/ShippingNavigation'
import { useSelector, useDispatch } from 'react-redux';
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'

const Cart = (props) => {



    const { products, totalPrice , discount} = useSelector(state => state.CartReducer);
    // console.log('products', products)
    const dispatch = useDispatch()

   
    return (
        <div className="cart-container">
            
            <ShippingNavigation selectedChild={1} />
            <h1 className="p-2">Shopping Cart</h1>
            {products.length > 0 ?
                <div className="cart-bottom-items">
                    {
                        products.map((product, key) => (
                            <>
                                <div className="left-cart-items" >
                                    
                                    <hr />
                                    <div className="main-items"key={key}>
                                        <div className="image-container">
                                            <img src={product.image} alt="" height={100} width={100} />

                                        </div>
                                         {/* <input placeholder="ENTER COUPON CODE" className="Discount" onClick={() => dispatch({ type: 'DISCOUNT', payload: product.id })}  /> */}
                                        <div className="add-remove-icons">
                                            <button className="icon-button" onClick={() => dispatch({ type: 'INCREMENT', payload: product.id })}><IoIosAddCircleOutline /></button >
                                            <p>{product.quantity}</p>
                                            <button className="icon-button" onClick={() => dispatch({ type: 'DECREMENT', payload: product.id })}><IoIosRemoveCircleOutline /></button >
                                        </div>
                                        <div>
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
                                        <div className="text-items">
                                            <p>{product.title}</p>
                                            <p>{product.description}</p>
                                            <p>₹ {product.price * product.quantity}</p>
                                        </div>
                                    </div>


                                </div>


                            </>
                        ))}
                    <>
                  
                        <div className="right-cart-items mx-5">
                            <p>Summary</p>
                            <hr />
                            <input placeholder="ENTER COUPON CODE" className="Discount" />
                            <hr />
                             <div className="bill">
                                <div className="bill-item">
                                    <p>SUBTOTAL</p>
                                    <p>₹  {totalPrice}</p>
                                </div>
                                <div className="bill-item">
                                    <p>SHIPPING</p>
                                    <p>FREE</p>
                                </div>
                                <div className="bill-item">
                                    <p>TAXES</p>
                                    <p>₹ 500</p>

                                </div>
                            </div>
                            <hr />

                            <div className="total-amount">
                                <p>TOTAL</p>
                                <p>₹ {totalPrice - discount + 500}</p>
                            </div>


                        </div>
                     
                    </>
                    <div className="mt-5"> 
                    <Link to="/shipping-details"> <button className="checkout btn btn-primary ml-5 mb-5">Next</button></Link>
                    <Link to="/home"><button className="checkout btn ml-5 mb-5 btn-warning">Back</button></Link>
                    </div>
                   
                </div>

                : <div className=" mt-5 text-warning empty text-center" >
                    <h1>Your Cart is Empty :( </h1>
                    <Link to="/home"><button className="checkout btn ml-5 mb-5 btn-warning">Back</button></Link>
                </div>
            }
           
            <Footer />
            

        </div>

    )
}

export default Cart
