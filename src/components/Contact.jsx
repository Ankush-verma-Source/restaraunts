import React from 'react';
import { MapPin, PhoneCall, Clock, ExternalLink } from 'lucide-react';

export default function Contact({ contact, hours }) {
  if (!contact) return null;

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Where to Find Us</h2>
          <div className="accent-line"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Cards */}
          <div className="contact-cards-container">
            {/* Address Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Our Location</h4>
                <p>{contact.address}</p>
                <a 
                  href={contact.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Call/WhatsApp Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <PhoneCall size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Contact Us</h4>
                <p>
                  <strong>Call:</strong>{' '}
                  <a href={`tel:${contact.phone}`} className="phone-link">
                    {contact.phoneDisplay || contact.phone}
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a 
                    href={`https://wa.me/${contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp-link"
                  >
                    {contact.whatsappDisplay || contact.whatsapp}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contact.email}`} className="email-link">
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            {hours && hours.length > 0 && (
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Opening Hours</h4>
                  <div>
                    {hours.map((h, idx) => (
                      <p key={idx}>
                        <strong>{h.days}:</strong> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Maps Embed */}
          <div className="map-embed-container">
            <iframe 
              src={contact.mapsEmbed}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
