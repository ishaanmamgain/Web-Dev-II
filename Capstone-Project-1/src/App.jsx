import React from 'react';
import './App.css';
import { featuresData, servicesData, metricsData } from './data/agroData';
import AdvisoryForm from './sections/AdvisoryForm';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <div className="container header-content">
          <div className="logo">Agro<span>Wise</span></div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#advisory">Advisory</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Smart Farming, Better Harvests</h1>
            <p>Get AI-powered agricultural insights tailored to your crops, weather, and soil conditions. Maximize yields, minimize costs, and farm smarter.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Started Free</button>
              <button className="btn btn-secondary">Watch Demo</button>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Why Choose AgroWise?</h2>
            <div className="features-grid">
              {featuresData.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
            
            <div className="metrics">
              {metricsData.map((m, i) => (
                <div key={i} className="metric">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {servicesData.map((s, i) => (
              <div key={i} className="service-box">
                <div className="service-number">{s.id}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <AdvisoryForm />
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 AgroWise. Empowering farmers with smart agriculture technology.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;