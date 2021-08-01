import Joi from "joi-browser";

const phoneNumberPattern = /^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const formValidationSchema = {
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().required().email().label("Email"),
  password: Joi.string().required().min(8).label("Password").regex(passwordPattern),
  confirmPassword: Joi.ref('password'),
  phoneNumber: Joi.string().regex(phoneNumberPattern).required().label("Phone Number")
};