import React, { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ gallery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const len = gallery.length;
    setCurrentIndex((currentIndex + dir + len) % len);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Feast</span>
          <h2 className="section-title">Food Gallery</h2>
          <div className="accent-line"></div>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={item.image} alt={item.caption} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <ZoomIn size={32} />
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="lightbox-modal open" 
          role="dialog" 
          aria-modal="true"
          onClick={(e) => {
            if (e.target.classList.contains('lightbox-modal')) {
              closeLightbox();
            }
          }}
        >
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={32} />
          </button>
          
          <button className="lightbox-nav-btn prev" onClick={() => navigate(-1)} aria-label="Previous Image">
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox-content-container">
            <img src={gallery[currentIndex].image} alt={gallery[currentIndex].caption} />
            <p className="lightbox-caption">{gallery[currentIndex].caption}</p>
          </div>

          <button className="lightbox-nav-btn next" onClick={() => navigate(1)} aria-label="Next Image">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
