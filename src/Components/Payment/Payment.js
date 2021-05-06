import React, { useState} from 'react'
import Summary from '../Summary/Summary';
import './Payment.css';
import Footer from '../Footer/Footer'
import {database} from '../../Firebase'
// import validation from '../../Validation/Validation';
import ShippingNavigation from '../ShippingNavigation/ShippingNavigation';
import {Link} from 'react-router-dom';



const Payment = (props) => {
    // const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    // const submitForm = () => {
    //     setFormIsSubmitted(true)
    // }


    // const [values, setValues] = useState({

    //     cardNumber:"",
    //     expiryDate:"",
    //     cvv: "",
    //     name:"",



    // });
    // const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setDataIsCorrect] = useState(false)

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(validation(values));
    //     setDataIsCorrect(true);

    // }

    // const handleChange = (event) =>
    // {
    //     setValues({
    //         ...values,
    //         [event.target.name] : event.target.value,
    //     })
    // }
    // useEffect( () => {
    //     if(Object.keys(errors).length === 0 && dataIsCorrect)
    //     {
    //         submitForm(true);
    //     }
    // }, [errors]);

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cardNumber && expiryDate && cvv  && name) {
            setLoader(true)
            database.collection("PaymentDetails")
                .add({
                    cardNumber:cardNumber,
                    expiryDate:expiryDate,
                    cvv:cvv,
                    name:name
                    
                })

                .then(() => {
                    setLoader(false);
                    props.history.push('/success');
                })
            setCardNumber("");
            setExpiryDate("");
            setCvv("");
            setName("");
           

        }
     
        else 
        {
            alert('All Fields are required');
        }
    };

    return (<>
   
        <ShippingNavigation selectedChild={3}/>
        <div className="paymentContainer mt-5">
            <div className="paymentDetails ml-1 w-50 mb-5">
                <form onSubmit={handleSubmit}>
                    
               
                <div className="topDetails p-3">
                    <div className="d-flex">
                        <div>
                            <input
                                type="radio"
                                id="radio1"
                                className=""
                                name="radio"
                                value="radio"
                            //onChange={handleChange}
                            />
                        </div>
                        <p className="ml-5 w-100">Credit Card <br />Pay securely by your credit card.</p>
                    </div>
                    <div className="mt-3">
                        <input
                            type="number"
                            placeholder="0000 0000 0000 0000 "
                            className="inputStyling"
                            name="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            
                        //value={values.cardNumber}
                        //onChange={handleChange} 
                        />
                        <input
                            type="number"
                            placeholder="MM/YY"
                            className="inputStyling ml-2 w-25"
                            name="expiryDate"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        //value={values.expiryDate}
                        //onChange={handleChange} 
                        />

                        <input
                            type="number"
                            placeholder="CVV &#8505;"
                            className="inputStyling ml-2 w-20"
                            name="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        //value={values.cvv}
                        //onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="inputStyling mt-3 w-100"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        //value={values.name}
                        //onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="bottomDetails mt-5 p-3">
                    <div className="d-flex">
                        <div >
                            <input
                                type="radio"
                                value="radio"
                                id="radio2"
                                name="radio"
                                className=""
                            //onChange={handleChange} 
                            />
                        </div>
                        <span className="ml-5">Paypal <br />
                            pay securely by paypal.</span>
                    </div>

                    <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c530.png" alt="logo" width={50} height={50} />
                </div>

                <button className="btn btn-success ml-5 mt-5 mb-5" >Pay Now</button>
                <Link to="/shipping-details"><button className="btn btn-danger ml-5 mt-5 mb-5">Back</button></Link>
                </form>
            </div>


            <div>
                <Summary />
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Payment
