import React, { useState } from "react";

export const InputDetails = ({
  type,
  placeholder,
  id,
  name,
  value,
  classList,
  label,
  fn,validator, error,pattern
}) => {
  return (
    <div className={error? "border-danger border border-1 rounded p-2 my-1":"border border-2 rounded p-2 my-1"}>
          <label htmlFor={id} className='text-black-50 text-uppercase'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onKeyUp = {validator}
        onChange={fn}
        className={`form-control border-0 p-0 ${classList}`}
        pattern={pattern}
        required
      />
      {error && <small className='text-danger'>
        {/* <i className="bi-exclamation-lg"></i>   */}
        {error}
        </small>} {/*show error message if the error props is not null*/}
    </div>
  );
};
