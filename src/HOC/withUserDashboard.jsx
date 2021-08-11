import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import logo from '../assets/images/switch-logo.png';

const withUserDashboardLayout = (Component) => {


  const sideLinks = [
    { label: 'quick purchase', icon: 'lightbulb' },
    { label: 'transactions', icon: 'credit-card' },
    { label: 'contact us', icon: 'telephone' },
    { label: 'my meters', icon: 'archive-fill' },
    { label: 'virtual accounts', icon: 'person-badge' },
    { label: 'my cards', icon: 'wallet' },
    { label: 'request utility bill', icon: 'cash-stack' },
    { label: 'view profile', icon: 'person' },
    { label: 'change password', icon: 'key' },
    { label: 'log out', icon: 'power' },
  ];
  return (props)=>(
    <>
    <nav className="nav w-75 p-3 mb-5 text-capitalize   border-bottom border-light rounded mx-auto">
    <div className=''>
      <img src={logo} className='w-50 img-fluid rounded' alt="logo" />
    </div>
    <div className='justify-content-start align-items-center d-flex ms-auto'>
    <Link className="nav-link text-capitalize text-warning"  to='/'>Buy Electricity</Link>
    <Link className="nav-link text-capitalize text-warning"  to='/'>Transaction history</Link>
    <Link className="nav-link text-capitalize text-warning"  to='/'>contact us</Link>
    </div>
    </nav>

    <section className="row">
      <section className="col-md-3 border-end border-light">
        <nav className="nav flex-column px-1 text-secondary">
          {sideLinks.map(({ label, icon }) => (
            <Link
              key={_.uniqueId()}
              className="nav-link fs-5 align-items-center text-secondary justify-content-start d-flex py-3 px-5 border-bottom border-light text-capitalize"
              aria-current="page"
              to={`/${label.replaceAll(' ', '-')}`}
            >
              <i className={`bi-${icon} me-2`}> </i>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </section>
      <section className='col-md-9'>
        <Component {...props} />
      </section>
    </section>
    </>
  );
};

export default withUserDashboardLayout;
