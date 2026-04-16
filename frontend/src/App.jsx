import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <Link to="/">
              <img src="/logo.jpg" alt="KTL Logo" className="logo-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&q=80"; }} />
            </Link>
            <h1>Lucky Group</h1>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer-premium">
          <div className="footer-top">
            <div className="footer-left">
              <div className="social-links">
                <a href="#" className="social-icon"><span>in</span></a>
                <a href="#" className="social-icon"><span>f</span></a>
                <a href="#" className="social-icon"><span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></span></a>
                <a href="#" className="social-icon"><span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span></a>
              </div>
              
              <div className="locations-wrapper">
                <div className="google-business">Google Business</div>
                
                <div className="location-item">
                  <div className="loc-title">
                    <span className="icon-map">◎</span> Head Office <a href="#" className="external-link">↗</a>
                  </div>
                  <div className="loc-address">BM Heights, 8th Floor, 318 Sk. Mujib Road, Agrabad,<br/>Chittagong</div>
                </div>

                <div className="location-item">
                  <div className="loc-title">
                    <span className="icon-map">◎</span> Production facility <a href="#" className="external-link">↗</a>
                  </div>
                  <div className="loc-address">North Kattali Industrial Area, Chittagong</div>
                </div>
              </div>
            </div>

            <div className="footer-right">
              <nav className="footer-nav">
                <Link to="#">Company</Link>
                <Link to="#">Corporate Responsibility</Link>
                <Link to="#">Certifications</Link>
                <Link to="#">Newsroom</Link>
                <Link to="#">Investors</Link>
                <Link to="#">Work With Us</Link>
              </nav>
              <div className="footer-orgs">
                <span>DSE</span> | <span>CSE</span> | <span>BGMEA</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-premium">
            <div className="bottom-links">
              <Link to="#">Contact Us</Link> | <Link to="#">Governance</Link> | <Link to="#">Sustainability</Link> | <Link to="#">Company Stories</Link> | <span>&copy; 2026 Kattali Textile Ltd.</span>
            </div>
          </div>
          
          <div className="chat-bubble">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
