import React from 'react';
import '../components/CSS/ContactPage.css'
const ContactPage = () => {
  // Note: To make this form functional, you'll need to integrate a service
  // like EmailJS, Formspree, or build a custom backend.
  return (
    <div className="contact-page-container">
      <div className="contact-form-wrapper">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>
            Have a project in mind, a question, or just want to say hello? I'd be delighted to hear from you. Fill out the form below, and I'll get back to you as soon as I can.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number (Optional)</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget (in PHP)</label>
            <input type="text" id="budget" name="budget" placeholder="e.g., 50,000" />
          </div>
          <div className="form-group">
            <label htmlFor="details">Project Details</label>
            <textarea id="details" name="details" rows="6" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attach a PDF (Optional)</label>
            <input type="file" id="attachment" name="attachment" accept=".pdf" />
          </div>
          
          {/* --- THIS IS THE ADDED WRAPPER --- */}
          <div className="form-group-submit">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ContactPage;