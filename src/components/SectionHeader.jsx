import React from 'react';

const SectionHeader = ({text, icon}) => (
  <header className="d-flex fw-bold mb-5 fs-3 justify-content-start align-items-center">
    <i className={`bi-${icon} me-3`}> </i>
    <div className="text-capitalize"> {text}</div>
  </header>
);


export default SectionHeader;