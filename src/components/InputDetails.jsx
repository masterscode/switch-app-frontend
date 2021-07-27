import React, { useState } from "react";

export const InputDetails = ({
  type,
  placeholder,
  id,
  name,
  value,
  classList,
  label,
  fn,
}) => {
  return (
    <div className="border border-2 rounded  p-2 my-2">
          <label htmlFor={id} className='text-black-50 text-uppercase'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={fn}
        className={`form-control border-0  p-0 my-1 py-1  ${classList}`}
      />
    </div>
  );
};
