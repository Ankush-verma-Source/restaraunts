import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { RestaurantConfig } from './config';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [activeSection, setActiveSection] = useState('home');

  const config = RestaurantConfig;

  // Sync theme configurations
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Reset preset classes
    body.className = '';
    body.classList.add(`theme-${config.theme.stylePreset}`);
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }

    // Apply config colors
    const colors = config.theme.colors;
    if (colors) {
      if (colors.primary) root.style.setProperty('--primary', colors.primary);
      if (colors.primaryHover) root.style.setProperty('--primary-hover', colors.primaryHover);
      if (colors.secondary) root.style.setProperty('--secondary', colors.secondary);
      
      if (isDarkMode) {
        root.style.setProperty('--bg-page', colors.bgDark || '#121212');
        root.style.setProperty('--bg-card', colors.cardDark || '#1e1e1e');
        root.style.setProperty('--text-main', colors.textDark || '#f8fafc');
        root.style.setProperty('--text-muted', '#94a3b8');
      } else {
        root.style.setProperty('--bg-page', colors.bgLight || '#fafafa');
        root.style.setProperty('--bg-card', colors.cardLight || '#ffffff');
        root.style.setProperty('--text-main', colors.textLight || '#1e293b');
        root.style.setProperty('--text-muted', '#64748b');
      }
    }

    // Apply border-radiuses
    const corners = config.theme.corners;
    let radiusBtn = '8px';
    let radiusCard = '12px';
    if (corners === 'sharp') {
      radiusBtn = '0px';
      radiusCard = '0px';
    } else if (corners === 'pill') {
      radiusBtn = '30px';
      radiusCard = '24px';
    }
    root.style.setProperty('--radius-btn', radiusBtn);
    root.style.setProperty('--radius-card', radiusCard);

    // Apply fonts
    const fonts = config.theme.fonts;
    if (fonts) {
      if (fonts.primary) root.style.setProperty('--font-primary', fonts.primary);
      if (fonts.secondary) root.style.setProperty('--font-secondary', fonts.secondary);
    }
  }, [isDarkMode, config]);

  // Monitor scroll for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'gallery', 'reviews', 'reservations', 'contact'];
      let currentSection = 'home';
      
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = sec;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('dark-mode', next);
      showToast(next ? 'Dark mode activated' : 'Light mode activated', 'info');
      return next;
    });
  };

  const showToast = (message, type = 'info') => {
    const id = Math.random().toString(36).substring(2, 9) + '-' + Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === id ? { ...t, removing: true } : t));
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 300); // Wait for fade out animation
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (item) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[item.id]) {
        next[item.id] = { item, quantity: 1 };
      } else {
        next[item.id].quantity += 1;
      }
      showToast(`Added ${item.name} to cart!`, 'success');
      return next;
    });
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    setCart(prev => {
      const next = { ...prev };
      if (quantity <= 0) {
        if (next[itemId]) {
          showToast(`Removed ${next[itemId].item.name} from cart`, 'info');
          delete next[itemId];
        }
      } else {
        if (next[itemId]) {
          next[itemId].quantity = quantity;
        }
      }
      return next;
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prev => {
      const next = { ...prev };
      if (next[itemId]) {
        showToast(`Removed ${next[itemId].item.name} from cart`, 'info');
        delete next[itemId];
      }
      return next;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  // Total items in cart
  const cartCount = Object.values(cart).reduce((total, obj) => total + obj.quantity, 0);

  return (
    <>
      {/* Toast Notification Container */}
      <div id="toast-container" className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast ${t.type} ${t.removing ? 'removing' : ''}`}>
            {t.type === 'success' && <CheckCircle size={18} style={{ flexShrink: 0 }} />}
            {t.type === 'error' && <AlertTriangle size={18} style={{ flexShrink: 0 }} />}
            {t.type === 'info' && <Info size={18} style={{ flexShrink: 0 }} />}
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <Navbar 
        branding={config.branding}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        showCart={config.sections.cart}
      />

      {/* Main Sections */}
      <main>
        {config.sections.hero && <Hero branding={config.branding} showCart={config.sections.cart} />}
        {config.sections.features && <Features features={config.features} />}
        {config.sections.about && <About branding={config.branding} />}
        
        {config.sections.menu && (
          <Menu 
            categories={config.menuCategories}
            items={config.menuItems}
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            showCart={config.sections.cart}
          />
        )}
        
        {config.sections.reviews && <Reviews reviews={config.reviews} />}
        {config.sections.gallery && <Gallery gallery={config.gallery} />}
        
        {config.sections.reservations && (
          <Reservations 
            branding={config.branding}
            contact={config.contact}
            showToast={showToast}
          />
        )}
        
        {config.sections.contact && (
          <Contact 
            contact={config.contact} 
            hours={config.hours} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer branding={config.branding} />

      {/* Shopping Drawer */}
      {config.sections.cart && (
        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          whatsappNumber={config.contact.whatsapp}
          restaurantName={config.branding.name}
          onClearCart={handleClearCart}
          showToast={showToast}
        />
      )}
    </>
  );
}
