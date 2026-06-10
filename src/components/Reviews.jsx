import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Customer Love</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="accent-line"></div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, index) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
              stars.push(
                <Star 
                  key={i} 
                  size={16} 
                  className={i <= rev.rating ? 'fill-star' : ''} 
                  style={{
                    fill: i <= rev.rating ? 'var(--secondary)' : 'transparent',
                    stroke: i <= rev.rating ? 'var(--secondary)' : 'var(--text-muted)'
                  }}
                />
              );
            }

            return (
              <div key={index} className="review-card">
                <span className="review-quote-icon">“</span>
                <div className="stars-rating">{stars}</div>
                <p className="review-text">"{rev.comment}"</p>
                <div className="reviewer-meta">
                  <span className="reviewer-name">{rev.name}</span>
                  <div className="review-date-source">
                    <div>{rev.date}</div>
                    <div style={{ fontWeight: 600, opacity: 0.8 }}>{rev.source}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
