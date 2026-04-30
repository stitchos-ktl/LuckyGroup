import React from 'react';

function Contact() {
  return (
    <div className="page-wrapper fade-in-page">
      <div className="contact-hero">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-subtitle">We would love to hear from you. Reach out to us for any queries.</p>
      </div>
      <section className="contact-section">
        <div className="contact-container" style={{ padding: '4rem 5%' }}>
          <div className="contact-info floating-box">
            <h4>Get in Touch</h4>
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <div>
                  <h5>Email Us</h5>
                  <p>info@kattalitextile.com</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div>
                  <h5>Call Us</h5>
                  <p>+880 1234 567890</p>
                </div>
              </div>
            </div>
            
            <div className="contact-locations">
              <h4>Our Offices</h4>
              <div className="detail-item mt-2">
                <span className="detail-icon">🏢</span>
                <div>
                  <h5>Corporate Office</h5>
                  <p>Agrabad, BM Heights, Floor no 8,<br/>Chittagong, Bangladesh</p>
                </div>
              </div>
              <div className="detail-item mt-2">
                <span className="detail-icon">🏭</span>
                <div>
                  <h5>Production Office</h5>
                  <p>Ishan Mohajan Road, North Kattali, Chowdhury Bari,<br/>Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form floating-box delay-1" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <h4>Send a Message</h4>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message..." required></textarea>
            </div>
            <button type="submit" className="submit-btn wave-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
