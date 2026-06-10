import React from 'react';

export default function Features({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <section id="features" className="features-section section-padding">
      <div className="container">
        <div className="grid grid-4">
          {features.map((feat, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
