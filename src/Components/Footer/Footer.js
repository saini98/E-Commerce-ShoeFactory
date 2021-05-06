import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom';
function Footer()  {
    return(
       
            <div className="footer-container bg-warning">
                
                    <div className="top-items">
                        <Link to="/home"className="text-primary links">Home</Link>
                        <Link to="/about" className=" links">About</Link>
                        <Link to="/home" className="links">Shop</Link>
                        <Link to="contact" className="links">Help</Link>
                    </div>

                    <div className="bottom-items">
                        <p>&copy; <span>Shoe Factory</span></p>
                    </div>
                
            </div>
      
    )
}

export default Footer;