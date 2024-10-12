import React from "react";
import "./Contact.css";
import contact from '../images/contact.webp'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h1 className="contact-h1">CONTACT US</h1>
          <p className="contact-p">
            Let people know what to reach out about and what to expect after
            contacting you. Don’t forget to choose a storage option for
            submissions
          </p>
          <p className="contact-p">email@example.com</p>
          <p className="contact-p">(555) 555-5555</p>
        </div>

        <div className="contact-form">
          <form>
            <div>
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                required
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                required
                placeholder="Last Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Message"
              ></textarea>
            </div>

            <div>
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-img">
        <img src={contact} alt="Contact Us" />
      </div>
    </div>
  );
};

export default Contact;
