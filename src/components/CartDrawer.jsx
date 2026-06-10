import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, MessageSquare } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  whatsappNumber, 
  restaurantName,
  onClearCart,
  showToast 
}) {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery', 'takeaway'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pickupTime, setPickupTime] = useState('As soon as possible');

  const [errors, setErrors] = useState({});

  const cartKeys = Object.keys(cart);
  const cartItems = Object.values(cart);
  
  let subtotal = 0;
  cartItems.forEach(itemObj => {
    subtotal += itemObj.item.price * itemObj.quantity;
  });

  const deliveryFee = orderType === 'delivery' ? 30 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (orderType === 'delivery' && address.trim().length < 5) {
      newErrors.address = 'Please enter your delivery address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Please fill all required checkout details.', 'error');
      return;
    }

    setErrors({});

    // Construct WhatsApp message
    let message = `*NEW ONLINE ORDER RECEIVED*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name.trim()}\n`;
    message += `Contact Number: ${phone.trim()}\n`;
    message += `Order Type: ${orderType === 'delivery' ? 'Home Delivery 🚚' : 'Self Pickup 🛍️'}\n\n`;

    if (orderType === 'delivery') {
      message += `*Delivery Address:*\n`;
      message += `${address.trim()}\n`;
      if (landmark.trim()) message += `Landmark: ${landmark.trim()}\n`;
      message += `\n`;
    } else {
      message += `*Preferred Pickup Time:* ${pickupTime}\n\n`;
    }

    message += `*Items Ordered:*\n`;
    cartItems.forEach(itemObj => {
      const cost = itemObj.item.price * itemObj.quantity;
      message += `• ${itemObj.item.name} (${itemObj.quantity}x) - ₹${cost}\n`;
    });

    message += `\n`;
    message += `*Subtotal:* ₹${subtotal.toFixed(2)}\n`;
    if (orderType === 'delivery') {
      message += `*Delivery Charge:* ₹${deliveryFee.toFixed(2)}\n`;
    }
    message += `*Total Amount Payable:* ₹${total.toFixed(2)}\n\n`;
    message += `_This order was generated via restaurant web menu._`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMsg}`;

    showToast('Order created! Opening WhatsApp...', 'success');

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      onClearCart();
      setName('');
      setPhone('');
      setAddress('');
      setLandmark('');
      onClose();
    }, 1000);
  };

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Food Order</h3>
          <button onClick={onClose} className="icon-btn close-btn" aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {cartKeys.length === 0 ? (
            <div className="cart-empty-message">
              <ShoppingBag className="empty-cart-icon" />
              <h4>Your cart is empty</h4>
              <p>Browse our menu and add items to satisfy your hunger cravings!</p>
              <button className="btn btn-primary" onClick={onClose}>Browse Menu</button>
            </div>
          ) : (
            <div className="cart-items-container">
              {cartItems.map((itemObj) => (
                <div key={itemObj.item.id} className="cart-item">
                  <img src={itemObj.item.image} alt={itemObj.item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h5>{itemObj.item.name}</h5>
                    <div className="cart-item-price">₹{itemObj.item.price} &times; {itemObj.quantity}</div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-counter">
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(itemObj.item.id, itemObj.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-number">{itemObj.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(itemObj.item.id, itemObj.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveFromCart(itemObj.item.id)} 
                      className="cart-item-delete" 
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartKeys.length > 0 && (
          <div className="cart-footer">
            {/* Order Type Toggle */}
            <div className="order-type-selector">
              <button 
                className={`type-btn ${orderType === 'delivery' ? 'active' : ''}`}
                onClick={() => setOrderType('delivery')}
              >
                <Truck size={16} /> Home Delivery
              </button>
              <button 
                className={`type-btn ${orderType === 'takeaway' ? 'active' : ''}`}
                onClick={() => setOrderType('takeaway')}
              >
                <ShoppingBag size={16} /> Self Takeaway
              </button>
            </div>

            {/* Pricing Summary */}
            <div className="pricing-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="summary-row">
                  <span>Delivery Charge</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span>Total Payable</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="checkout-form" noValidate>
              <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
                <label htmlFor="check-name">Full Name *</label>
                <input 
                  type="text" 
                  id="check-name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder="E.g. Ramesh Kumar" 
                />
                <span className="error-msg">{errors.name}</span>
              </div>
              <div className={`form-group ${errors.phone ? 'invalid' : ''}`}>
                <label htmlFor="check-phone">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  id="check-phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                  placeholder="10-digit mobile number" 
                />
                <span className="error-msg">{errors.phone}</span>
              </div>
              
              {orderType === 'delivery' ? (
                <div id="delivery-details-fields">
                  <div className={`form-group ${errors.address ? 'invalid' : ''}`}>
                    <label htmlFor="check-address">Delivery Address *</label>
                    <textarea 
                      id="check-address" 
                      rows="2" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required 
                      placeholder="House No, Street name, area..."
                    />
                    <span className="error-msg">{errors.address}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="check-landmark">Landmark / Directions</label>
                    <input 
                      type="text" 
                      id="check-landmark" 
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      placeholder="E.g., Near City School" 
                    />
                  </div>
                </div>
              ) : (
                <div id="takeaway-details-fields">
                  <div className="form-group">
                    <label htmlFor="check-pickup-time">Preferred Pickup Time *</label>
                    <select 
                      id="check-pickup-time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                    >
                      <option value="As soon as possible">As soon as possible (15-20 Mins)</option>
                      <option value="In 30 Minutes">In 30 Minutes</option>
                      <option value="In 45 Minutes">In 45 Minutes</option>
                      <option value="In 1 Hour">In 1 Hour</option>
                      <option value="Later today">Later (Special timing)</option>
                    </select>
                  </div>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block checkout-submit-btn">
                <MessageSquare size={16} /> Send Order via WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
