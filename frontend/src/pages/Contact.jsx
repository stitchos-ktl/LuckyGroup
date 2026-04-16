import React from 'react';

function Contact() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="contact-section decorated-bg">
        <h3 className="section-title">Contact Us</h3>
        <div className="contact-container">
          <div className="contact-info floating-box">
            <h4>Get in Touch</h4>
            <p>We would love to hear from you. Reach out to us for any queries regarding our industries and services.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@luckygroup.com</p>
              <p><strong>Phone:</strong> +880 1234 567890</p>
            </div>
            <div className="contact-locations">
              <p><strong>Commercial Office:</strong> Agrabad BM Heights</p>
              <p><strong>Production Office:</strong> North Kattali</p>
            </div>
          </div>
          <form className="contact-form floating-box delay-1" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn wave-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
