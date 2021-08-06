import React from "react";
import { InputDetails } from "../components/InputDetails";

export const Login = () => {
  const initialStateOfFields = {
    password: "",
	phoneNumber:""
  };

  const [field, setField] = React.useState(initialStateOfFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField((field) => ({ ...field, [name]: value }));
  };


// const submit = async (e)=>{
// 	e.preventDefault();
// 	const reponse = await fetch('url', {method:'POST', body:field});
// }
  return (
    <div className=" border m-0 rounded" style = {{background :'url(jumbotron-image.jpg)', height:'100vh', backgroundSize:'contained'}}>
     

      <div className="w-25 p-3 rounded mx-auto my-3 border bg-white">

        <h3 className="header text-center text-uppercase fw-bold my-2">Login</h3>

        <form>
          <InputDetails
            type="tel"
            className="form-control"
            id="phone-number"
            name="phone"
			value = {field.phone}
            placeholder="000-0000-000"
			label='phone number'
            fn ={ handleChange }
          />

         

          <InputDetails
            type="password"

			name='password'
			value={field.password}
            id="password"
            placeholder="password"
            fn={handleChange}
			label='password'
          /> 

          <div>
            <button className="btn btn-primary w-100 btn-lg my-2">LOGIN</button>
          </div>

          <div className="button-link">
            <a className="btn p-2 d-inline-block" href="#">
              Forgot your password ?
            </a>
            <span className="separator"></span>
            <a className="btn p-2 d-inline-block" href="/register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
