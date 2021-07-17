import React from "react";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <main className="home">
      <section className="home__jumbotron">
      <NavBar />

        <div className="banner w-50 my-5 text-white py-5 p-xs-2">
          <h2 className="fw-normal">
            Buy Electricity from the comfort of your home
          </h2>

          <h5 className="mt-5 mb-0">Enter your number here to begin</h5>
          <div class="form-floating mb-1 mt-1 text-black-50 fw-bold">
            <input
              type="tel"
              className="form-control"
              id="phone-number"
              placeholder="000 0000 000"
            />
            <label for="phone-number">Phone Number</label>
          </div>
          <button className="btn btn-lg w-100 btn-primary p-3 text-center">
            Buy Electricity
          </button>
          <h4 className="text-capitalize my-3"> need help? call 0703000000</h4>
        </div>
      </section>
    
        <section className='home__service-providers bg-secondary p-1 rounded'>

        </section>
       </main>
  );
};
