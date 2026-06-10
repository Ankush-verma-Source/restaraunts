import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ branding, cartCount, onOpenCart, isDarkMode, onToggleTheme, activeSection, showCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#reservations", label: "Book Table" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header id="main-header" className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo">
          <span className="logo-icon">{branding.logoIcon}</span>
          <span className="logo-text">{branding.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Dark/Light Theme Toggle */}
          <button 
            onClick={onToggleTheme} 
            className="icon-btn theme-toggle-btn" 
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="theme-icon-light" size={20} /> : <Moon className="theme-icon-dark" size={20} />}
          </button>

          {/* Cart Button */}
          {showCart && (
            <button 
              onClick={onOpenCart} 
              className="cart-btn" 
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart size={20} />
              <span id="cart-badge" className="cart-badge">{cartCount}</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            className="icon-btn mobile-menu-btn" 
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Nav */}
      <div className={`mobile-nav-drawer ${isMobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
