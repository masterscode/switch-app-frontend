import React, { useState } from "react";
import { InputDetails } from "../components/InputDetails";
import { doRegister } from "../services/auth";
import  Joi  from "joi-browser";
import {formValidationSchema} from '../services/form-validation-schema'

export const Register = () => {
  const initialStateOfFields = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword:'',
  };

 
  const [field, setField] = useState(initialStateOfFields);
  const [error, setError] = useState({});
  const schema = ( [
    {
      type: "text",
      name: "firstName",
      value: field["firstName"],
      id: "first-name",
      label: "first name",
    },
    {
      type: "text",
      name: "lastName",
      value: field.lastName,
      id: "last-name",
      label: "last name",
    },
    {
      type: "tel",
      name: "phoneNumber",
      value: field.phoneNumber,
      id: "phone number",
      label: "phone number",
    },
    {
      type: "email",
      name: "email",
      value: field.email,
      id: "email",
      label: "email",
    },
    {
      type: "password",
      name: "password",
      value: field.password,
      id: "password",
      label: "password",
    },
    {
      type: "password",
      name: "confirmPassword",
      value: field.confirmPassword,
      id: "confirm-password",
      label: "confirm password",
    },
  ]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    field[name];
    setField((field) => ({ ...field, [name]: value }));

  };

//   const isFormValid = () => {
//     const {firstName, lastName, phoneNumber, email, password, confirmPassword} = {...field}
  
//     return firstName && lastName && phoneNumber && email && password && confirmPassword;
//   }


  const validateBeforeSubmission = ()=>{
    Object.entries(field).forEach(entry=>{
        const [name, value] = entry;
        const joi = Joi.validate(value, formValidationSchema[name]);
        const errorMessage = joi.error ? joi.error.message.replaceAll('"', '') : false;
        setError(error=>({...error,[name]: errorMessage}));
    });

    return Object.values(error).every(el => el == false );
}

  const handleSubmit = async (submitEvent)=>{
        submitEvent.preventDefault();
        const isValid = validateBeforeSubmission();
        if(isValid){
            try{
                const regStatus = await doRegister(submitEvent, field);

            }catch(exception){
                
        }

            }
        

  }

  const handleValidation = (keyEvent, index)=>{
    const {name} = keyEvent.target;
    const joi = Joi.validate(field[name], formValidationSchema[name]);

    const errorMessage = joi.error ? joi.error.message.replaceAll('"', '') : false;
    setError(error=>({...error, [name]: errorMessage}));

    if(name === 'confirmPassword' && field.password !== field.confirmPassword){
        setError(error =>({...error, confirmPassword:'password does not match'}));

    }
  }




  return (
    <div
      className=" border border-3 m-0 rounded"
      style={{
        background: "url(jumbotron-image.jpg)",
        height: "100vh",
        backgroundSize: "contained",
      }}
    >
      <div className="w-25 p-2 rounded mx-auto my-2 border bg-white">
        <h3 className="header text-center text-uppercase fw-bold my-2">
          Register Here
        </h3>

        <form>
          {/* {
              Object.keys(field).map((fkeys, index)=>(<InputDetails placeholder={''}  label={fkeys} value={field[fkeys]} id={fkeys} />))
          } */}

          {schema.map((obj, index) => (
            <InputDetails {...obj} error={error[obj.name]} key={index} fn={handleChange} validator={(e)=>handleValidation(e, index)}  />
          ))}
        <button className="btn btn-primary d-block w-100 mx-auto" disabled={error.disabled} type="submit" onClick= {handleSubmit}>
          Register
        </button>
        </form>

        <div className="button-link m-4">
          <a className="btn d-block mx-auto" href="/login">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};
