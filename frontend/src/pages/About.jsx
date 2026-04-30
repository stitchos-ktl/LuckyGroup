import React from 'react';

function About() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="about-section">
        <div className="about-content">
          <div className="mission-vision-grid">
            <div className="mv-card floating-box">
              <div className="mv-icon">🎯</div>
              <h4>Our Mission</h4>
              <p>To deliver exceptional value through continuous innovation, sustainable practices, and unwavering dedication to quality across all our diverse industrial sectors.</p>
            </div>
            <div className="mv-card floating-box delay-1">
              <div className="mv-icon">👁️</div>
              <h4>Our Vision</h4>
              <p>To be the leading conglomerate in Bangladesh, recognized globally for setting benchmarks in operational excellence, corporate responsibility, and transformative growth.</p>
            </div>
            <div className="mv-card floating-box delay-2">
              <div className="mv-icon">💎</div>
              <h4>Core Values</h4>
              <p>Integrity, Customer-Centricity, Innovation, Sustainability, and Excellence form the foundational pillars of every decision we make and every product we deliver.</p>
            </div>
          </div>

          <div className="board-of-directors">
            <h4 className="board-title">Meet Our Leadership</h4>
            <p className="board-subtitle">Guiding our vision with decades of industry expertise.</p>
            <div className="directors-grid">
              <div className="director-card floating-box delay-1">
                <div className="director-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Nasreen Chowdhury" className="director-img" />
                </div>
                <h5>Nasreen Chowdhury</h5>
                <p className="director-role">Chairman</p>
              </div>
              <div className="director-card floating-box delay-2">
                <div className="director-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Imdadul Haque Chowdhury" className="director-img" />
                </div>
                <h5>Imdadul Haque Chowdhury</h5>
                <p className="director-role">Managing Director (MD)</p>
              </div>
              <div className="director-card floating-box delay-3">
                <div className="director-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Ishad Chowdhury" className="director-img" />
                </div>
                <h5>Ishad Chowdhury</h5>
                <p className="director-role">Deputy Managing Director (DMD)</p>
              </div>
              <div className="director-card floating-box delay-4">
                <div className="director-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Makarram Anawar Alvi" className="director-img" />
                </div>
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
