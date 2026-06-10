/**
 * Restaurant Website Template Configuration (ES Module for React)
 * 
 * To customize the website for another client, simply modify the details below.
 * No React components or CSS code changes are required.
 */

export const RestaurantConfig = {
  // --- BRANDING & INFO ---
  branding: {
    name: "Albaik Xpress",
    tagline: "Crispy, Juicy & Irresistible Fried Chicken & More",
    logoText: "Albaik Xpress",
    logoIcon: "🍽️", // Neutral logo icon representing both veg and non-veg
    aboutTitle: "Our Story",
    aboutText: "Welcome to Albaik Xpress, the ultimate destination for crispy fried chicken, succulent burgers, and delicious pizzas in Gola Gokaran Nath. We are committed to serving you high-quality, freshly prepared meals made with premium ingredients and our secret blend of aromatic spices. Whether you are dining in with family or ordering a quick bite to go, we guarantee a delicious experience that will keep you coming back for more!",
    aboutImage: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80" // High-quality food table background
  },

  // --- CONTACT & LOCATION ---
  contact: {
    phone: "07570076666",
    phoneDisplay: "07570 076666",
    whatsapp: "917570076666", // International format without + or spaces
    whatsappDisplay: "+91 75700 76666",
    email: "info@albaikxpressgola.com",
    address: "Lakhimpur Rd, near HDFC Bank, Gola Gokaran Nath, Uttar Pradesh 262802",
    mapsLink: "https://www.google.com/maps/place/Albaik+Xpress/@27.6757078,76.7028037,478723m/data=!3m1!1e3!4m6!3m5!1s0x399f436131394dff:0x7424969dd0679a6a!8m2!3d28.0757284!4d80.4744755!16s%2Fg%2F11fcszz0cj?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
    mapsEmbed: "https://maps.google.com/maps?q=Albaik%20Xpress%20Gola%20Gokaran%20Nath%20Uttar%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // --- BUSINESS HOURS ---
  hours: [
    { days: "Monday - Friday", hours: "11:00 AM - 11:00 PM" },
    { days: "Saturday - Sunday", hours: "11:00 AM - 11:30 PM" }
  ],

  // --- VISUAL DESIGN & THEME ENGINE ---
  theme: {
    stylePreset: "fast-red", // "modern-dark", "luxury-gold", "warm-amber", "fast-red"
    colors: {
      primary: "#e52d27",
      primaryHover: "#b31217",
      secondary: "#f0a500",
      bgLight: "#fafafa",
      bgDark: "#121212",
      cardLight: "#ffffff",
      cardDark: "#1e1e1e",
      textLight: "#1e293b",
      textDark: "#f8fafc"
    },
    fonts: {
      primary: "'Outfit', sans-serif",
      secondary: "'Inter', sans-serif"
    },
    corners: "rounded" // "sharp", "rounded", "pill"
  },

  // --- SECTION TOGGLES ---
  sections: {
    hero: true,
    features: true,
    about: true,
    menu: true,
    cart: false, // Hiding cart options for now
    reservations: true,
    gallery: true,
    reviews: true,
    contact: true
  },

  // --- FEATURES ---
  features: [
    {
      icon: "🍔",
      title: "Fresh & Hot Food",
      description: "All our meals are prepared fresh to order using premium quality ingredients and rich traditional spices."
    },
    {
      icon: "⚡",
      title: "Express Service",
      description: "We guarantee quick preparation and ultra-fast delivery options so your meal arrives steaming hot."
    },
    {
      icon: "🌟",
      title: "Authentic Recipes",
      description: "Our signature spices and specialized marinades give our chicken and dishes an unmatched, authentic taste."
    },
    {
      icon: "💰",
      title: "Unbeatable Value",
      description: "Generous portion sizes, premium taste, and highly competitive prices that make every meal a feast."
    }
  ],

  // --- MENU CATEGORIES & ITEMS ---
  menuCategories: [
    { id: "all", name: "All Items" },
    { id: "broast", name: "Broast & Crispy Fried" },
    { id: "burgers", name: "Gourmet Burgers" },
    { id: "pizzas", name: "Delicious Pizzas" },
    { id: "sides", name: "Sides & Quick Bites" },
    { id: "beverages", name: "Cold Beverages" },
    { id: "desserts", name: "Sweet Cravings" }
  ],

  menuItems: [
    {
      id: "b1",
      name: "Signature Crispy Broast Chicken",
      description: "Crispy on the outside, incredibly tender and juicy on the inside. Served with garlic dip and fresh fries.",
      price: 180,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
      category: "broast",
      isVeg: false,
      isSpicy: true,
      isChefSpecial: true
    },
    {
      id: "b2",
      name: "Albaik Chicken Wings (6 Pcs)",
      description: "Tender chicken wings coated in our special spicy batter and fried to golden perfection.",
      price: 150,
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
      category: "broast",
      isVeg: false,
      isSpicy: true,
      isChefSpecial: false
    },
    {
      id: "b3",
      name: "Golden Chicken Strips (4 Pcs)",
      description: "Boneless chicken breast strips marinated in special herbs, breaded and fried. Served with spicy mayo dip.",
      price: 160,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
      category: "broast",
      isVeg: false,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "burg1",
      name: "Spicy Zinger Burger",
      description: "Crispy fried chicken fillet topped with fresh lettuce, melted cheese, and our signature spicy dressing on a toasted sesame bun.",
      price: 120,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
      category: "burgers",
      isVeg: false,
      isSpicy: true,
      isChefSpecial: true
    },
    {
      id: "burg2",
      name: "Double Decker Cheese Burger",
      description: "Two grilled juicy chicken patties layered with double cheese, pickles, lettuce, and rich burger sauce.",
      price: 170,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
      category: "burgers",
      isVeg: false,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "burg3",
      name: "Veggie Supreme Burger",
      description: "A delicious crispy vegetable patty topped with fresh tomatoes, crunchy onions, lettuce, and creamy mayonnaise.",
      price: 90,
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
      category: "burgers",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "piz1",
      name: "Albaik Special Chicken Pizza",
      description: "Loaded with marinated spiced chicken, onions, green bell peppers, mushrooms, fresh sweet corn, and premium mozzarella.",
      price: 240,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      category: "pizzas",
      isVeg: false,
      isSpicy: true,
      isChefSpecial: true
    },
    {
      id: "piz2",
      name: "Classic Paneer Tikka Pizza",
      description: "Cubes of flavorful paneer tikka, red onions, capsicum, and red paprika on a rich herb tomato sauce base.",
      price: 220,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
      category: "pizzas",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "piz3",
      name: "Double Cheese Margherita Pizza",
      description: "Classic pizza loaded with an extra layer of premium Mozzarella cheese and dynamic Italian herbs on our signature crust.",
      price: 180,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
      category: "pizzas",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "side1",
      name: "Peri Peri French Fries",
      description: "Crispy golden French fries tossed in a fiery, hot Peri Peri spice seasoning. Served with mayonnaise.",
      price: 80,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
      category: "sides",
      isVeg: true,
      isSpicy: true,
      isChefSpecial: false
    },
    {
      id: "side2",
      name: "Cheesy Garlic Breadsticks (4 Pcs)",
      description: "Freshly baked garlic bread topped with melted Mozzarella cheese and hints of fresh rosemary.",
      price: 110,
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80",
      category: "sides",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: true
    },
    {
      id: "bev1",
      name: "Blue Lagoon Mocktail",
      description: "A refreshing carbonated summer drink made with blue curacao syrup, fresh lime juice, mint leaves, and club soda.",
      price: 90,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
      category: "beverages",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: false
    },
    {
      id: "bev2",
      name: "Fresh Virgin Mint Mojito",
      description: "Crisp and cooling mocktail blending fresh crushed mint leaves, lime slices, sparkling soda, and a touch of sweetness.",
      price: 80,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
      category: "beverages",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: true
    },
    {
      id: "des1",
      name: "Warm Choco Lava Cake",
      description: "Decadent chocolate cake with a warm, liquid chocolate center that oozes out with every spoonful.",
      price: 90,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
      category: "desserts",
      isVeg: true,
      isSpicy: false,
      isChefSpecial: true
    }
  ],

  // --- REVIEWS / TESTIMONIALS ---
  reviews: [
    {
      name: "Ankit Mishra",
      rating: 5,
      comment: "Absolutely the best crispy chicken in Gola Gokaran Nath! The Zinger Burger is superb and tastes identical to top-tier brands. Highly recommended!",
      date: "2 weeks ago",
      source: "Google Reviews"
    },
    {
      name: "Pooja Verma",
      rating: 5,
      comment: "Love the Albaik Special Pizza and their Blue Lagoon drink. Very clean environment, friendly staff, and orders are served really fast.",
      date: "1 month ago",
      source: "Google Reviews"
    },
    {
      name: "Siddharth Gupta",
      rating: 4,
      comment: "Great value for money. The portions are huge and the chicken is extremely juicy and well-marinated. Ordering via WhatsApp was very smooth.",
      date: "3 weeks ago",
      source: "Google Reviews"
    }
  ],

  // --- IMAGE GALLERY ---
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      caption: "Our Famous Broast Chicken"
    },
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      caption: "Juicy Chicken Burgers"
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      caption: "Hot Hand-tossed Pizzas"
    },
    {
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
      caption: "Crispy Peri Peri Fries"
    },
    {
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      caption: "Refreshing Signature Beverages"
    },
    {
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      caption: "Fresh Out of the Kitchen"
    }
  ]
};
