import React from "react";
import { NavBar } from "../components/NavBar";
import aedc from "../assets/images/service-providers/aedc.svg";
import eedc from "../assets/images/service-providers/eedc.svg";
import ekedc from "../assets/images/service-providers/ekedc.svg";
import ibedc from "../assets/images/service-providers/ibedc.svg";
import ikeja from "../assets/images/service-providers/ikeja.svg";
import jedc from "../assets/images/service-providers/jedc.svg";
import kaduna from "../assets/images/service-providers/kaduna.svg";
import kedco from "../assets/images/service-providers/kedco.svg";
import phedc from "../assets/images/service-providers/kedco.svg";


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
          <div className="form-floating mb-1 mt-1 text-black-50 fw-bold">
            <input
              type="tel"
              className="form-control"
              id="phone-number"
              placeholder="000 0000 000"
            />
            <label htmlFor="phone-number">Phone Number</label>
          </div>
          <button className="btn btn-lg w-100 btn-primary p-3 text-center">
            Buy Electricity
          </button>
          <h4 className="text-capitalize my-3"> need help? call 0703000000</h4>
        </div>
      </section>
    
        <section className='home__service-providers bg-light p-4  rounded d-flex' >
            <img src={aedc} alt="service provider aedc" className="img-thumbnail rounded " />
            <img src={eedc} alt="service provider eedc" className="img-thumbnail rounded " />
            <img src={ekedc} alt="service provider ekedc" className="img-thumbnail rounded " />
            <img src={ibedc} alt="service provider ibedc" className="img-thumbnail rounded " />
            <img src={ikeja} alt="service provider ikeja" className="img-thumbnail rounded " />
            <img src={kaduna} alt="service provider kaduna" className="img-thumbnail rounded " />
            <img src={jedc} alt="service provider jedc" className="img-thumbnail rounded " />
            <img src={kedco} alt="service provider kedco" className="img-thumbnail rounded " />
        </section>
       </main>
  );
};
