import React from 'react'

const validation = (values) => {

    let errors = {};
    if(!values.firstName){
        errors.firstName="Name is required";
    }
    if(!values.lastName){
        errors.lastName="Last name is required";
    }
    if(!values.address1){
        errors.address1="Address is required";
    }
    if(!values.address2){
        errors.address2="Address is required";
    }
    if(!values.select){
        errors.select="please select your State";
    }
    if(!values.city){
        errors.city="City is required";
    }
    if(!values.zipcode){
        errors.zipcode="zipcode is required";
    }
    else if(values.zipcode.length<6)
    {
        errors.zipcode="Zipcode is not valid"
    }
    if(!values.number){
        errors.number="Mobile No. is required";
    }
    else if(values.number.length<10)
    {
        errors.number="Mobile number is not valid"
    }
    if(!values.cardNumber)
    {
        errors.cardNumber = "Please Enter card number"
    }
    else if(values.cardNumber.length<16) {
        errors.cardNumber ="Card is not valid"
    }
    if(values.expiryDate)
    {
        errors.expiryDate="Please enter valid date"
    }
    if(values.cvv)
    {
        errors.cvv="This fiels is required"
    }
    


    return errors;
}

export default validation;
