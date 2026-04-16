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

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Lucky Group</h4>
              <p>Empowering progress across sectors in Bangladesh.</p>
            </div>
            <div className="footer-section locations-footer">
              <h4>Our Locations</h4>
              <p>📍 <strong>Commercial Office:</strong> Agrabad BM Heights</p>
              <p>🏭 <strong>Production Office:</strong> North Kattali</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Lucky Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
