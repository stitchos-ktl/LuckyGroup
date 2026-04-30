import React from 'react';

function Contact() {
  return (
    <div className="viva-contact-page fade-in-page">
      <div className="viva-contact-hero">
        <div className="viva-contact-left">
          <div className="viva-left-content">
            <span className="viva-badge">GET IN TOUCH</span>
            <h1 className="viva-title">Let's Talk<br/>About Your Project</h1>
            <p className="viva-subtitle">We would love to hear from you. Reach out to us for any queries, partnerships, or support.</p>
            
            <div className="viva-contact-details mt-4">
              <div className="viva-detail-item">
                <div className="viva-icon-box">✉️</div>
                <div>
                  <h5>Email Us</h5>
                  <p>info@kattalitextile.com</p>
                </div>
              </div>
              <div className="viva-detail-item">
                <div className="viva-icon-box">📞</div>
                <div>
                  <h5>Call Us</h5>
                  <p>+880 1234 567890</p>
                </div>
              </div>
            </div>
            
            <div className="viva-locations mt-4">
              <h4 className="viva-locations-title">Our Locations</h4>
              <div className="viva-detail-item">
                <div className="viva-icon-box">🏢</div>
                <div>
                  <h5>Corporate Office</h5>
                  <p>Agrabad, BM Heights, Floor no 8,<br/>Chittagong, Bangladesh</p>
                </div>
              </div>
              <div className="viva-detail-item mt-2">
                <div className="viva-icon-box">🏭</div>
                <div>
                  <h5>Production Office</h5>
                  <p>Ishan Mohajan Road, North Kattali, Chowdhury Bari,<br/>Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="viva-contact-right">
          <div className="viva-form-card">
            <h3>Send a Message</h3>
            <p className="viva-form-subtitle">Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="viva-contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div className="viva-form-row">
                <div className="viva-input-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="viva-input-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="viva-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              
              <div className="viva-input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+880 1..." required />
              </div>
              
              <div className="viva-input-group">
                <label>How can we help?</label>
                <textarea rows="4" placeholder="Tell us about your requirements..." required></textarea>
              </div>
              
              <button type="submit" className="viva-submit-btn">Send Message <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
