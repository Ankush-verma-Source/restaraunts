import React, { useState } from 'react';
import { Clock, Award, Sparkles, CheckSquare } from 'lucide-react';

export default function Reservations({ branding, contact, showToast }) {
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState(getTodayDateString());
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!guests) {
      newErrors.guests = 'Please select guest count';
    }
    if (!date) {
      newErrors.date = 'Please select a date';
    }
    if (!time) {
      newErrors.time = 'Please select a dining time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Please correct errors in reservation form.', 'error');
      return;
    }

    setErrors({});

    // Construct WhatsApp reservation message
    let message = `*TABLE RESERVATION REQUEST*\n\n`;
    message += `*Restaurant:* ${branding.name}\n`;
    message += `*Name:* ${name.trim()}\n`;
    message += `*Phone:* ${phone.trim()}\n`;
    message += `*Number of Guests:* ${guests}\n`;
    message += `*Date:* ${date}\n`;
    message += `*Time:* ${time}\n`;
    if (notes.trim()) {
      message += `*Special Request:* ${notes.trim()}\n`;
    }

    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=${encodedMsg}`;

    showToast('Reservation created! Redirecting to WhatsApp...', 'success');

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setName('');
      setPhone('');
      setGuests('');
      setDate(getTodayDateString());
      setTime('');
      setNotes('');
    }, 1000);
  };

  return (
    <section id="reservations" className="reservations-section section-padding">
      <div className="container">
        <div className="reservation-box">
          <div className="reservation-grid">
            <div className="reservation-info-pane">
              <span className="section-subtitle light">Enjoy Our Hospitality</span>
              <h3>Book A Table</h3>
              <p>Skip the waiting queues! Book a comfortable table for family dinners, friends gatherings, or special occasions. Quick confirmation via WhatsApp.</p>
              <div className="booking-perks">
                <div className="perk-item">
                  <Clock size={24} />
                  <span>Zero Queue Waiting Time</span>
                </div>
                <div className="perk-item">
                  <Award size={24} />
                  <span>Special Complementary Drinks</span>
                </div>
                <div className="perk-item">
                  <Sparkles size={24} />
                  <span>Premium Seating Selection</span>
                </div>
              </div>
            </div>
            
            <div className="reservation-form-pane">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
                    <label htmlFor="res-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="res-name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      placeholder="Your full name" 
                    />
                    <span className="error-msg">{errors.name}</span>
                  </div>
                  <div className={`form-group ${errors.phone ? 'invalid' : ''}`}>
                    <label htmlFor="res-phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="res-phone" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                      placeholder="10-digit mobile number" 
                    />
                    <span className="error-msg">{errors.phone}</span>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className={`form-group ${errors.guests ? 'invalid' : ''}`}>
                    <label htmlFor="res-guests">Number of Guests *</label>
                    <select 
                      id="res-guests" 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select guests count</option>
                      <option value="1 Guest">1 Person</option>
                      <option value="2 Guests">2 People</option>
                      <option value="3 Guests">3 People</option>
                      <option value="4 Guests">4 People</option>
                      <option value="5-6 Guests">5 - 6 People</option>
                      <option value="7+ Guests">7+ People (Party)</option>
                    </select>
                    <span className="error-msg">{errors.guests}</span>
                  </div>
                  <div className={`form-group ${errors.date ? 'invalid' : ''}`}>
                    <label htmlFor="res-date">Select Date *</label>
                    <input 
                      type="date" 
                      id="res-date" 
                      min={getTodayDateString()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required 
                    />
                    <span className="error-msg">{errors.date}</span>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className={`form-group ${errors.time ? 'invalid' : ''}`}>
                    <label htmlFor="res-time">Select Time *</label>
                    <select 
                      id="res-time" 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select dining time</option>
                      <option value="12:00 PM">12:00 PM (Lunch)</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="06:00 PM">06:00 PM (Dinner)</option>
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                      <option value="09:00 PM">09:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                    </select>
                    <span className="error-msg">{errors.time}</span>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="res-notes">Special Requests / Notes</label>
                  <textarea 
                    id="res-notes" 
                    rows="3" 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g., high chair, window table, birthday arrangement..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                  <CheckSquare size={16} /> Book Table via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
