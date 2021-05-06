import React from 'react'

import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux'
import './Navbar.css'
const Navbar2 = () => {
   

    const {totalQuantity} = useSelector(state => state.CartReducer)


    return (
        <div className=" ul-items">
            <nav className="navbar navbar-expand-sm bg-warning">

                <ul className="navbar-nav ml-auto">
                    <Link to="/home">
                        <li className="nav-item mx-4">
                           
                                Home
                           
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-item mx-4">
                            
                                About
                            
                        </li>
                    </Link>
                    <Link to="/home">
                        <li className="nav-item mx-4">
                            
                                Products
                            
                        </li>
                    </Link>
                    <Link to='/contact'>

                        <li className="nav-item mx-4">
                            
                                Contact
                            
                        </li>
                    </Link>
                </ul>
            </nav>
           
        </div>
    )
}

export default Navbar2;
