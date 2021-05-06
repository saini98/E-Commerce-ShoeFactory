
import React, { useState } from 'react'
import './Summary.css'
import { useSelector } from 'react-redux';

function Summary() {

    const { products, totalPrice } = useSelector(state => state.CartReducer);

   
    return (
        <div className="summaryContainer">
            <p className="h3">Summary</p>
            <hr />
            {products.length > 0 ?
                <>
                    {
                        products.map((product, key) => (
                            <>
                                <div className="topSummary" key={key}>
                                    <img src={product.image} height={50} width={50} />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>₹ {product.price * product.quantity}</p>
                                    </div>
                                    
                                </div>

                            </>
                        ))}

<div className="bottomSummary">
                                    <div className="right-cart-items">
                                        
                                        <hr />
                                        <input placeholder="ENTER COUPON CODE" className="Discount"
                                            />
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
                                            <p>₹ {totalPrice + 500}</p>
                                        </div>


                                    </div>
                                </div>

                </>
                : <div className="ml-5 text-warning" >
                    <h1>Your Cart is Empty :( </h1>

                </div>
            }

        </div>

    )
}

export default Summary;
