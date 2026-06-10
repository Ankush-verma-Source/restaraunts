import React from 'react';

// Custom inline SVG icons for compatibility with older lucide-react versions
const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

export default function Footer({ branding }) {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-icon">{branding.logoIcon}</span>
              <span className="logo-text" style={{ color: 'var(--white)' }}>{branding.name}</span>
            </a>
            <p style={{ marginTop: '15px' }}>{branding.tagline}</p>
            <div className="social-links" style={{ marginTop: '20px' }}>
              <a href="#home" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#home" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#home" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our Story</a></li>
              <li><a href="#menu">Delicious Menu</a></li>
              <li><a href="#reservations">Table Booking</a></li>
            </ul>
          </div>
          <div className="footer-support">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#contact">Contact Details</a></li>
              <li><a href="#reviews">Guest Reviews</a></li>
              <li><a href="#contact">Location Map</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {branding.name}. All Rights Reserved.</p>
          <p className="designer-tag">Designed with Premium Quality</p>
        </div>
      </div>
    </footer>
  );
}
