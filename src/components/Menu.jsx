import React, { useState } from 'react';
import { Search, X, Flame, Plus, Award } from 'lucide-react';

export default function Menu({ categories, items, cart, onAddToCart, onUpdateQuantity, showCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietFilter, setActiveDietFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // Filter items dynamically
  const filteredItems = items.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    let matchesDiet = true;
    if (activeDietFilter === 'veg') matchesDiet = item.isVeg === true;
    if (activeDietFilter === 'nonveg') matchesDiet = item.isVeg === false;
    if (activeDietFilter === 'spicy') matchesDiet = item.isSpicy === true;

    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase().trim());

    return matchesCategory && matchesDiet && matchesSearch;
  });

  return (
    <section id="menu" className="menu-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Tempting Flavors</span>
          <h2 className="section-title">Explore Our Menu</h2>
          <div className="accent-line"></div>
        </div>

        {/* Menu Controls */}
        <div className="menu-controls">
          {/* Categories Tabs */}
          <div className="category-tabs-container">
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Filters Row */}
          <div className="menu-filters-row">
            {/* Search Box */}
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search delicious food..."
                aria-label="Search food items"
              />
              {searchQuery && (
                <button onClick={handleClearSearch} className="clear-btn" aria-label="Clear Search">
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Dietary Buttons */}
            <div className="dietary-filters">
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: 'Veg Only', isVegDot: true },
                { id: 'nonveg', label: 'Non-Veg', isNonVegDot: true },
                { id: 'spicy', label: 'Spicy', isSpicyIcon: true }
              ].map((btn) => (
                <button
                  key={btn.id}
                  className={`diet-btn ${activeDietFilter === btn.id ? 'active' : ''}`}
                  onClick={() => setActiveDietFilter(btn.id)}
                >
                  {btn.isVegDot && <span className="dot veg-dot"></span>}
                  {btn.isNonVegDot && <span className="dot nonveg-dot"></span>}
                  {btn.isSpicyIcon && <Flame className="icon-spicy" size={14} />}
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="no-results-message">
            <Search size={48} />
            <h3>No matching delicious items found</h3>
            <p>Try searching for something else or changing your filters.</p>
          </div>
        ) : (
          <div className="menu-items-grid">
            {filteredItems.map((item) => {
              const qtyInCart = cart[item.id] ? cart[item.id].quantity : 0;
              
              return (
                <div key={item.id} className="menu-card">
                  <div className="menu-img-container">
                    <img src={item.image} alt={item.name} className="menu-card-img" loading="lazy" />
                    <div className="card-badges">
                      {item.isVeg ? (
                        <span className="diet-tag veg">Veg</span>
                      ) : (
                        <span className="diet-tag non-veg">Non-Veg</span>
                      )}
                      {item.isChefSpecial && (
                        <span className="chef-badge">
                          <Award size={12} /> Chef Special
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="menu-card-body">
                    <div className="menu-card-title-row">
                      <h3 className="menu-card-title">{item.name}</h3>
                      {item.isSpicy && (
                        <span className="spicy-badge" title="Spicy">
                          <Flame size={18} />
                        </span>
                      )}
                    </div>
                    <p className="menu-card-desc">{item.description}</p>
                    <div className="menu-card-footer">
                      <span className="price-tag">₹{item.price}</span>
                      {showCart && (
                        <div className="menu-cart-actions">
                          {qtyInCart > 0 ? (
                            <div className="qty-counter">
                              <button 
                                className="qty-btn" 
                                onClick={() => onUpdateQuantity(item.id, qtyInCart - 1)}
                              >
                                -
                              </button>
                              <span className="qty-number">{qtyInCart}</span>
                              <button 
                                className="qty-btn" 
                                onClick={() => onUpdateQuantity(item.id, qtyInCart + 1)}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button 
                              className="add-to-cart-btn" 
                              onClick={() => onAddToCart(item)}
                            >
                              Add to Cart <Plus size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
