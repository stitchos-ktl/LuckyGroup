import React from 'react';

function About() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="about-section decorated-bg">
        <h3 className="section-title">About Us</h3>
        <div className="about-content">
          <div className="about-text floating-box">
            <p>Lucky Group has been a cornerstone of industry and service in Bangladesh. We believe in innovation, excellence, and dedicated service across all our companies. Kattali Textile Limited stands proud as one of our premier industries.</p>
          </div>
          <div className="board-of-directors">
            <h4 className="board-title">Board of Directors</h4>
            <div className="directors-grid">
              <div className="director-card">
                <div className="director-avatar">NC</div>
                <h5>Nasreen Chowdhury</h5>
                <p className="director-role">Chairman</p>
              </div>
              <div className="director-card">
                <div className="director-avatar">IHC</div>
                <h5>Imdadul Haque Chowdhury</h5>
                <p className="director-role">Managing Director (MD)</p>
              </div>
              <div className="director-card">
                <div className="director-avatar">IC</div>
                <h5>Ishad Chowdhury</h5>
                <p className="director-role">Deputy Managing Director (DMD)</p>
              </div>
              <div className="director-card">
                <div className="director-avatar">MAA</div>
                <h5>Makarram Anawar Alvi</h5>
                <p className="director-role">Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
