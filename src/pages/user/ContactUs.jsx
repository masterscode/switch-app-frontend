import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import withUserDashboardLayout from '../../HOC/withUserDashboard';
import SectionHeader from '../../components/SectionHeader';
import { handleInputChange } from '../../utils/forms-utils';
import { InputField } from '../../components/InputDetails';

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    email: '',
    reason: '',
    otherReason: '',
    description: '',
  });
  const reasons = [
    'Please, select a reason',
    'i was debited without a token',
    'I cannot make payment with my ATM Card',
    "I don't know how to use a feature",
  ];
  return (
    <>
      <SectionHeader text="contact us" icon="telephone-fill" />
      <section className="col-md-6 col-12 mb-5">
        <div className="card shadow-sm border-0 mb-3 ">
          <div className="card-body">
            <p className="fs-3">Got any questions? We are here to help</p>
            <p className="fs-5 text-muted">Please, fill the form below</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <InputField
              name="email"
              type="email"
              id="email"
              label="email"
              value={contactForm.email}
              fn={(e) => handleInputChange(e, setContactForm)}
            />

            <div className="mb-3">
              <label
                htmlFor="reason"
                aria-label="reason"
                className="form-label text-capitalize text-black-50"
              >
                reason
              </label>
              <select
                className="form-select form-select-lg"
                name='reason'
                value={contactForm.reason}
                onChange={(e) => handleInputChange(e, setContactForm)}
              >
                {reasons.map((reason) => (
                  <option
                    key={uniqueId()}
                    value={reason}
                  >
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <InputField
              name="otherReason"
              type="text"
              label="other reason"
              id="otherReason"
              value={contactForm.otherReason}
              fn={(e) => handleInputChange(e, setContactForm)}
            />

            <div className="mb-3">
              <label htmlFor="description" className="form-label text-capitalize text-black-50">
                Textarea
              </label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                required
                name='description'
                value={contactForm.description}
                onChange={(e) => handleInputChange(e, setContactForm)}
        
              > </textarea>
            </div>
            <div className="caveat">
              <ol>
                <li>Ensure the email you are providing is active and valid.</li>
                <li>
                  Please wait for a period of 24 hours before sending another as
                  sending multiple messages will reduce the response time as we
                  try to resolve.
                </li>
                <li>Kindly check your inbox and/or spam for our response.</li>
              </ol>
            </div>
            <button type="submit" className="btn btn-lg btn-warning w-100">
              I understand, Proceed
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default withUserDashboardLayout(ContactUs);
