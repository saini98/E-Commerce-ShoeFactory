import React from 'react'
import './ShippingNavigation.css'
function ShippingNavigation(props) {
    let {selectedChild} = props
    console.log(selectedChild)
    return (
        <div className="cart-container">
             <div className="cart-top-items ">
                <p className={`mt-100 ${selectedChild === 1 ? "first-child":null}`}>1.Shopping Cart</p>
                <p className={`mt-100 ${selectedChild ===  2 ? "first-child":null}`} >2. Shipping Details</p>
                <p className={`mt-100 ${selectedChild === 3 ? "first-child":null}`}>3. Payment Options</p>

            </div>
        </div>
    )
}

export default ShippingNavigation
