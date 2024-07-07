import React from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <h2>Let's keep in touch</h2>
      <p>
        Let us know who you are and what you're looking for below, and we'll get
        back to you within 24 hours.
      </p>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email address" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
