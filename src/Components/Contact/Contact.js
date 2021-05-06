import React from 'react'
import './Contact.css'
function Contact() {
    return (
       
           
            <div className="container mt-5">
                <h1 className="h1">Contact Us</h1>
                <form className="form">
                    
                    <label className="labels">Name</label>
                    <input className="inputElement" type="text" placeholder="Enter your name....." /><br/>
                    <label className="labels">Email</label>
                    <input  className="inputElement" type="email" placeholder="Enter your email" /><br/>
                    <label className="labels">Message</label>
                    <textarea className="inputElement" rows="5" cols="6" placeholder="Enter your Message"></textarea>
                    <button className="btn btn-primary mt-5"> Submit</button>

                </form>
            </div>
        
    )
}

export default Contact;
