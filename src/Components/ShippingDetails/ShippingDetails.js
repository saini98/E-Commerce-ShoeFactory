import React, { useState } from 'react';
import './ShippingDetails.css';
import Summary from '../Summary/Summary';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
// import validation from '../../Validation/Validation';
import ShippingNavigation from '../ShippingNavigation/ShippingNavigation'
import { database } from '../../Firebase';
import Nav from '../Navbar/Navbar'
const ShippingDetails = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [number, setNumber] = useState("");
    const [radio1, setRadio1] = useState("");
    const [radio2, setRadio2] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && address1 && address2 && state && city && zipcode && number) {
            setLoader(true)
            database.collection("OrderDetails")
                .add({
                    firstName: firstName,
                    lastName: lastName,
                    address1: address1,
                    address2: address2,
                    state: state,
                    city: city,
                    zipcode: zipcode,
                    number: number,
                    radio1:radio1,
                    radio2:radio2
                })

                .then(() => {
                    setLoader(false);
                    props.history.push('/payment');
                })
            setFirstName("");
            setLastName("");
            setAddress1("");
            setAddress2("");
            setState("");
            setCity("");
            setZipcode("");
            setNumber("");
            setRadio1("");
            setRadio2("");

        }
        else if(firstName==="")
        {
            alert('First Name is required')
        }
        else if(lastName==="")
        {
            alert('Last Name is required')
        }
        else if(address1==="")
        {
            alert('address 1 is required')
        }
        else if(address2 ==="")
        {
            alert('address 2 is required')
        }
        else if(state==="")
        {
            alert('State is required')
        }
        else if(city==="")
        {
            alert('City is required')
        }
        else if(number==="" && number < 10)
        {
            alert('Number is required')
        }
        else
        {
            alert('all fields are required')
        }
    };


    return (
        <div>
           
            <ShippingNavigation selectedChild={2} />
            <div className="shippingContainer">

                <div className="forms mb-5">
                    <form onSubmit={handleSubmit}>
                        <p className="h3 mt-3 ml-5" >Shipping Details</p>
                        <input type="text"
                            placeholder="First Name"
                            className=" w-25 ml-5 inputStyling"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input type="text"
                            placeholder="Last Name"
                            className=" w-25 ml-5 inputStyling"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        /><br />

                        <input type="text"
                            placeholder="Address 1"
                            className=" w-50 mt-3 ml-5 inputStyling"
                            name="address1"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                        /><br />

                        <input type="text"
                            placeholder="Address 2"
                            name="address2"
                            className=" w-50 mt-3 ml-5 inputStyling"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        /><br />

                        <select className="mt-3 ml-5 w-25 inputStyling" name="select" onChange={(e) => setState(e.target.value)}>
                            <option value="">State</option>
                            <option value="Delhi" >Delhi</option>
                            <option value="Noida">Noida</option>
                            <option value="Mumbai" >Mumbai</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Banglore">Banglore</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Chennai">Chennai</option>
                        </select>

                        <input type="text"
                            placeholder="City"
                            className=" w-25 ml-5 inputStyling"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        /><br />

                        <input type="text"
                            placeholder="Zip/Postal Code"
                            className=" w-25 ml-5 mt-3  inputStyling"
                            name="zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                        />

                        <input type="number"
                            placeholder="Phone Number"
                            className=" w-25 ml-5 mt-3 inputStyling"
                            name="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                       

                        <hr />
                        <div className="p-5">
                            <input type="radio" id="radio1" name="radiobutton" value={radio1}
                            onChange={(e) => setRadio1(e.target.value)} className="" />
                            <label className="ml-3">Free Shipping <br /> Between 2-5 working days</label>


                            <input type="radio" id="radio2" name="radiobutton" value={radio2}
                            onChange={(e) => setRadio2(e.target.value)}className="ml-5" />
                            <label className="ml-3">Next Day Delievery <br /> 24 hours from checkout</label>


                        </div>
                        <div className="ml-5 mb-5 ">
                            {/* <Link to="/payment"><button type="submit" className="btn btn-success ml-2" >Next</button></Link> */}
                            <button type="submit" className="btn btn-success ml-2" >Next</button>
                            <Link to="/cart"><button className="btn btn-danger ml-5">Back</button></Link>
                        </div>
                    </form>
                </div>

                <div className="summary">
                    <Summary />
                </div>

            </div>

        <Footer />
        </div>
    )
}

export default ShippingDetails
