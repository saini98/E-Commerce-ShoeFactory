import React from 'react'
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux'
import './Navbar.css'
const Navbar = () => {
   

    const {totalQuantity} = useSelector(state => state.CartReducer)


    return (  <div className=" ul-items">
            <nav className="navbar navbar-expand-sm bg-warning ul-items">

                <ul className="navbar-nav ml-auto mt-2">
                    <Link to="/home" className="title-link">
                        <li className="nav-item mx-5">
                           
                                Home
                           
                        </li>
                    </Link>
                    <Link to="/aboutUs" className="title-link">
                        <li className="nav-item mx-4">
                            
                                About
                            
                        </li>
                    </Link>
                    <Link to="/home" className="title-link">
                        <li className="nav-item mx-4">
                            
                                Products
                            
                        </li>
                    </Link>
                    <Link to='/contact' className="title-link">

                        <li className="nav-item mx-4">
                            
                                Contact
                            
                        </li>
                    </Link>
                    <Link to="/cart" className="title-link">
                        <li className="nav-item cart-items mx-4">
                            <button className="btn btn-primary cart-button" ><IoIosCart />Cart</button>
                            <span className="cart-count text-primary">{totalQuantity}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
           
        
        </div>
    )
}

export default Navbar;
