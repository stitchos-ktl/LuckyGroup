import React, { useState, useEffect } from 'react';

function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      <section className="hero-professional">
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="badge-animation">Premier Conglomerate</div>
          <h2 className="hero-title">LUCKY GROUP</h2>
          <p className="hero-subtitle">Lucky Group is a diverse portfolio of premier industries and services empowering progress across multiple sectors in Bangladesh.</p>
          <div className="hero-actions">
            <button className="cta-primary shine-btn" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Discover Our Industries
            </button>
            <button className="cta-secondary" onClick={() => document.getElementById('clients').scrollIntoView({ behavior: 'smooth' })}>
              Our Valued Clients
            </button>
          </div>
        </div>
      </section>

      <section id="clients" className="clients-section">
        <div className="clients-header">
          <h3>Trusted by Global Brands</h3>
          <p>We take pride in our ongoing partnerships with world-class customers.</p>
        </div>
        <div className="clients-marquee-container">
          <div className="clients-marquee">
            {/* Original Items + New Items */}
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Winnerjeans&font=Montserrat" alt="Winnerjeans Logo" /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Celebrity+Pink&font=Montserrat" alt="Celebrity Pink Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="H&M Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Dreamtex&font=Montserrat" alt="Dreamtex Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" alt="Walmart Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>

            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Tommy_Hilfiger_Logo.svg" alt="Tommy Hilfiger Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Calvin_klein_logo.svg" alt="Calvin Klein Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Old_Navy_logo.svg" alt="Old Navy Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Denim&font=Montserrat" alt="Denim Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/TJ_Maxx_logo.svg" alt="TJ Maxx Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="Zara Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>

            {/* Duplicated for infinite effect */}
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Winnerjeans&font=Montserrat" alt="Winnerjeans Logo" /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Celebrity+Pink&font=Montserrat" alt="Celebrity Pink Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="H&M Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Dreamtex&font=Montserrat" alt="Dreamtex Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" alt="Walmart Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>

            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Tommy_Hilfiger_Logo.svg" alt="Tommy Hilfiger Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Calvin_klein_logo.svg" alt="Calvin Klein Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Old_Navy_logo.svg" alt="Old Navy Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://placehold.co/200x60/transparent/ffffff?text=Denim&font=Montserrat" alt="Denim Logo" /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/TJ_Maxx_logo.svg" alt="TJ Maxx Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
            <div className="client-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="Zara Logo" style={{ filter: 'brightness(0) invert(1)' }} /></div>
          </div>
        </div>
      </section>

      <section id="services" className="products-section">
        <h3 className="section-title">Our Industries & Services</h3>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="product-grid">
            {services.map(service => (
              <div key={service.id} className="product-card">
                <div className="product-image-container">
                  <img src={service.image} alt={service.name} className="product-image" />
                  <div className="tag">{service.category}</div>
                </div>
                <div className="product-info">
                  <h4>{service.name}</h4>
                  <p className="product-desc">{service.description}</p>
                  <div className="product-footer">
                    <button className="add-to-cart">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
