import React from 'react';

const UserDashboard = () => {
  const [user, setUser] = React.useState({});
  const sideLinks = [
    { link: '', label: 'quick purchase', icon: '' },
    { link: '', label: 'transactions', icon: '' },
    { link: '', label: 'contact us', icon: '' },
    { link: '', label: 'my meters', icon: '' },
    { link: '', label: 'virtual accounts', icon: '' },
    { link: '', label: 'my cards', icon: '' },
    { link: '', label: 'request utility bill', icon: '' },
    { link: '', label: 'view profile', icon: '' },
    { link: '', label: 'change password', icon: '' },
  ];
  return (
    <>
      <section className="">
        <nav className="nav flex-column">
          {sideLinks.map(({ label, icon }) => (
            <a
              className="nav-link d-flex py-3 px-5 border border-secondary text-capitalize"
              aria-current="page"
              href={`/${label.replaceAll(' ', '-')}`}
            >
              <i className={`bi-${icon} me-2`}> </i>
              {label}
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default UserDashboard;
