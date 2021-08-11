import React, { useState } from 'react';
import Joi from 'joi-browser';
import { InputDetails } from '../components/InputDetails';
import { doRegister } from '../services/auth';
import { formValidationSchema } from '../utils/form-validation-schema';

const Register = () => {
  const initialStateOfFields = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [field, setField] = useState(initialStateOfFields);
  const [error, setError] = useState({});
  const [valid, setValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const schema = [
    {
      type: 'text',
      name: 'firstName',
      value: field.firstName,
      id: 'first-name',
      label: 'first name',
    },
    {
      type: 'text',
      name: 'lastName',
      value: field.lastName,
      id: 'last-name',
      label: 'last name',
    },
    {
      type: 'tel',
      name: 'phoneNumber',
      value: field.phoneNumber,
      id: 'phone number',
      label: 'phone number',
    },
    {
      type: 'email',
      name: 'email',
      value: field.email,
      id: 'email',
      label: 'email',
    },
    {
      type: 'password',
      name: 'password',
      value: field.password,
      id: 'password',
      label: 'password',
    },
    {
      type: 'password',
      name: 'confirmPassword',
      value: field.confirmPassword,
      id: 'confirm-password',
      label: 'confirm password',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setField((prevState) => ({ ...prevState, [name]: value }));

    const allKeys = Object.keys(field);
    const validForm = allKeys.every((key) => field[key]);
    setValid(validForm);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const validateBeforeSubmission = () => {
    Object.entries(field).forEach((entry) => {
      const [name, value] = entry;
      const joi = Joi.validate(value, formValidationSchema[name]);
      const joiErrorMessage = joi.error
        ? joi.error.message.replaceAll('"', '')
        : false;
      setError((prevState) => ({ ...prevState, [name]: joiErrorMessage }));
    });

    return Object.values(error).every((el) => el === false);
  };

  const resetFields = () => {
    setField({ ...initialStateOfFields });
  };
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    const isValid = validateBeforeSubmission();
    if (isValid) {
      const res = await doRegister(submitEvent, field);
      const { status } = res;
      if (status) {
        setSuccessMessage('Registration successful');
        resetFields();
      } else {
        setErrorMessage(res.error);
      }
    }
  };

  const handleValidation = (keyEvent) => {
    const { name } = keyEvent.target;
    const joi = Joi.validate(field[name], formValidationSchema[name]);

    const joiErrorMessage = joi.error
      ? joi.error.message.replaceAll('"', '')
      : false;
    setError((prevState) => ({ ...prevState, [name]: joiErrorMessage }));

    if (
      name === 'confirmPassword'
      && field.password !== field.confirmPassword
    ) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: 'password does not match',
      }));
    }
  };

  return (
    <div
      className="border border-3 m-0 rounded"
      style={{
        background: 'url(jumbotron-image.jpg)',
        height: '100vh',
        backgroundSize: 'contained',
      }}
    >
      <div className="w-25 p-2 rounded mx-auto my-2 border bg-white">
        <h3 className="header text-center text-uppercase fw-bold my-2">
          Register Here
        </h3>
        {errorMessage && !successMessage && (
          <div className="alert alert-danger text-capitalize">
            {errorMessage}
          </div>
        )}
        {successMessage && !errorMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <form>
          {/* {
              Object.keys(field).map((fkeys, index)=>
              (<InputDetails placeholder={''}  label={fkeys} value={field[fkeys]} id={fkeys} />))
          } */}

          {schema.map(({
            name, type, value, id, label,
          }, index) => (
            <InputDetails
              name={name}
              type={type}
              value={value}
              id={id}
              label={label}
              error={error[name]}
              key={index}
              fn={handleChange}
              validator={handleValidation}
            />
          ))}
          <button
            className="btn btn-primary d-block w-100 mx-auto"
            disabled={!valid}
            type="submit"
            onClick={handleSubmit}
          >
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

export default Register;
