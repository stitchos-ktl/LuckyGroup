import React, { useState, useEffect } from 'react';

function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { url: 'https://images.unsplash.com/photo-1605280263929-1c42900fa2b7?auto=format&fit=crop&q=70&w=1600', label: 'Textile Industry' },
    { url: 'https://images.unsplash.com/photo-1595000572793-bc4264627d2c?auto=format&fit=crop&q=70&w=1600', label: 'Garments' },
    { url: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=70&w=1600', label: 'Shipping' },
    { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=70&w=1600', label: 'Import Export' },
    { url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=70&w=1600', label: 'Super Shop' }
  ];

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

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-professional">
        {carouselImages.map((img, index) => (
          <div 
            key={index} 
            className={`carousel-background ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img.url})` }}
          ></div>
        ))}
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
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/levis.svg" alt="Levi's Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/h-m.svg" alt="H&M Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/adidas-4.svg" alt="Adidas Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/walmart.svg" alt="Walmart Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/tommy-hilfiger-2.svg" alt="Tommy Hilfiger Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/calvin-klein.svg" alt="Calvin Klein Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/gap.svg" alt="Gap Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/zara.svg" alt="Zara Logo" /></div>

            {/* Duplicated for infinite effect */}
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/levis.svg" alt="Levi's Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/h-m.svg" alt="H&M Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/adidas-4.svg" alt="Adidas Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/walmart.svg" alt="Walmart Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/tommy-hilfiger-2.svg" alt="Tommy Hilfiger Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/calvin-klein.svg" alt="Calvin Klein Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/gap.svg" alt="Gap Logo" /></div>
            <div className="client-logo"><img src="https://cdn.worldvectorlogo.com/logos/zara.svg" alt="Zara Logo" /></div>
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
