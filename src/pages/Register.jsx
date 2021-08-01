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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField((field) => ({ ...field, [name]: value }));

  };

  const schema = [
    {
      type: "text",
      name: "firstName",
      value: field["firstName"],
      id: "first name",
      label: "first name",
    },
    {
      type: "text",
      name: "lastName",
      value: field.lastName,
      id: "last name",
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
  ];


  const handleSubmit = (submitEvent)=>{
        const regStatus = doRegister(submitEvent, field);
  }

  const handleValidation = (keyEvent)=>{
      const {name} = keyEvent.target;
    const error = Joi.validate(field[name], formValidationSchema[name]);

    console.log(error);
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
      <div className="w-25 p-3 rounded mx-auto my-3 border bg-white">
        <h3 className="header text-center text-uppercase fw-bold my-2">
          Register Here
        </h3>

        <form>
          {/* {
              Object.keys(field).map((fkeys, index)=>(<InputDetails placeholder={''}  label={fkeys} value={field[fkeys]} id={fkeys} />))
          } */}

          {schema.map((obj, index) => (
            <InputDetails {...obj} key={index} fn={handleChange} validator={handleValidation} />
          ))}
        <button className="btn btn-primary d-block w-100 mx-auto" type="submit" onClick= {handleSubmit}>
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
