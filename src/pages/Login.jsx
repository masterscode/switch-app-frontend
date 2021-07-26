import React from "react";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="header">
        <h3>Login</h3>
      </div>

      <div className="content">
        <form>
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone-number"
            placeholder="000-0000-000"
          />

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
          />

          {/* <div className=""> */}
            <button className='btn btn-primary w-100 btn-lg my-2'>LOGIN</button>
          {/* </div> */}
          
          <div>
          <a className='btn btn-primary p-2 d-inline-block' href="#" >Forgot your password ?</a>
          <span className="separator"></span>
          <a href="#">Register</a>
          </div>
            


        </form>
      </div>
    </div>
  );
};
