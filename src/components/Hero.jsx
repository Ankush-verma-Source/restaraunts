import React from 'react';
import { ShoppingBag, BookOpen, Calendar, ChevronDown } from 'lucide-react';

export default function Hero({ branding, showCart }) {
  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: `url(${branding.heroImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{branding.name}</h1>
        <p className="hero-tagline">{branding.tagline}</p>
        <div className="hero-actions">
          {showCart ? (
            <a href="#menu" className="btn btn-primary">
              <ShoppingBag size={18} /> Order Online
            </a>
          ) : (
            <a href="#menu" className="btn btn-primary">
              <BookOpen size={18} /> View Menu
            </a>
          )}
          <a href="#reservations" className="btn btn-outline">
            <Calendar size={18} /> Book Table
          </a>
        </div>
      </div>
      <div className="hero-scroll-down">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
