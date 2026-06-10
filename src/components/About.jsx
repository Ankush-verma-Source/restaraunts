import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About({ branding }) {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src={branding.aboutImage} 
              alt={`${branding.name} About Image`} 
              className="about-image" 
            />
            <div className="experience-badge">
              <span className="exp-years">100%</span>
              <span className="exp-text">Fresh Taste</span>
            </div>
          </div>
          <div className="about-text-container">
            <span className="section-subtitle">Since Day One</span>
            <h2 className="section-title">{branding.aboutTitle || "Our Story"}</h2>
            <div className="accent-line" style={{ margin: '0' }}></div>
            <p className="about-description" style={{ marginTop: '20px' }}>
              {branding.aboutText}
            </p>
            <div className="about-badges">
              <div className="badge-item">
                <CheckCircle2 size={18} />
                <span>Premium Quality Ingredients</span>
              </div>
              <div className="badge-item">
                <CheckCircle2 size={18} />
                <span>Hygienically Prepared</span>
              </div>
              <div className="badge-item">
                <CheckCircle2 size={18} />
                <span>Signature Spice Blend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
