import React from 'react';

function Career() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="career-section decorated-bg">
        <div className="career-container">
          <h3 className="section-title">Career Opportunities</h3>
          <p className="career-subtitle">Join us and build a rewarding career with Lucky Group.</p>
          <div className="job-listings">
            <div className="job-card floating-card">
              <h4>Software Engineer</h4>
              <p>Lucky Store - E-commerce</p>
              <button className="apply-btn">Apply Now</button>
            </div>
            <div className="job-card floating-card delay-1">
              <h4>Sales Executive</h4>
              <p>Brother Properties</p>
              <button className="apply-btn">Apply Now</button>
            </div>
            <div className="job-card floating-card delay-2">
              <h4>Production Manager</h4>
              <p>Kattali Textile Limited</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
          <div className="career-cta pulse-subtle">
            <p>Don't see a role that fits? Send your CV to <strong>hr@luckygroup.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
