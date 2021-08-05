import Joi from "joi-browser";

const phoneNumberPattern = new RegExp(/^(\+\d{1,3}( )?)?(\d{3})\d{3}\d{4}$/);
const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\"\'\?\.])");


export const formValidationSchema = {
  firstName: Joi.string().min(3).required().label("First Name"),
  lastName: Joi.string().required().min(3).label("Last Name"),
  email: Joi.string().required().email().label("Email"),
  password: Joi.string().required().min(8).label("Password").regex(passwordPattern).error(customErrorMessage),
//   confirmPassword: Joi.any().valid(Joi.ref('password')).required().label("Confirm Password").options({ language: { any:{ allowOnly: 'must match password' } }}),
  confirmPassword: Joi.string().required().min(8).label("Confirm Password").regex(passwordPattern).error(customErrorMessage),
  phoneNumber: Joi.string().required().max(14).label("Phone Number").regex(phoneNumberPattern).error(customErrorMessage)
};



const messages = {
    Password:'Must contain one uppercase letter, one digit and one special character',
    'Phone Number':'Valid Phone number format: +234XXXXXXXXXX'
}


function customErrorMessage(error){

    return error.map(err => {
        // console.log(err);
        const {context} = err;
        switch (err.type) {
        case "any.empty":
            return {message:`${context.label} cannot be empty`}
        case "string.min":
            return {message:`${context.label} must be more than ${context.limit} characters`}
        case "string.max":
            return {message:`${context.label} must not be more than ${context.limit} characters`}
        case  "string.regex.base":
            return {message:`${messages[context.label]} `}
        }
      }
    );
}
