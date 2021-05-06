import React, { useState } from 'react'
import './Successful.css';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../Footer/Footer'
const Successful = () => {
    const { products, totalPrice } = useSelector(state => state.CartReducer);
    // console.log('products', products)
    const dispatch = useDispatch()

    return (<>
        <div className="successfull-conrainer mt-5 ">
            <h1>Your Order has been Placed :)</h1>
            <p className="text-centre w-50">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <a href='/home'><button className="p-3 btn btn-success">Continue Shopping</button></a>

            <div className="items">
                {
                    products.map((product, key) => (
                        <>
                            <div className="left-cart-items" >
                                
                                <hr />
                                <div className="main-items ml-5" key={key}>
                                    <div className="image-container">
                                        <img src={product.image} alt="" height={100} width={100} />

                                    </div>

                                    <div className="text-items ml-5">
                                        <p>{product.title}</p>
                                        
                                        <p>₹ {product.price * product.quantity}</p>
                                    </div>

                                </div>
                                <hr />


                            </div>


                        </>
                    ))}



            </div>

        </div>
        <Footer />
    </>
    )
}

export default Successful
