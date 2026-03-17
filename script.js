/* ========================================
   BALLERSTORE — MAIN JAVASCRIPT
   Premium Sportswear eCommerce
======================================== */

'use strict';

/* ============================================================
   PRODUCT DATA
============================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: "Apex Runner Pro",
    category: "shoes",
    gender: "men",
    price: 8999,
    originalPrice: 12999,
    badge: "sale",
    rating: 4.8,
    reviews: 324,
    description: "Ultra-lightweight running shoes engineered for maximum speed and comfort. Featuring our patented AirWeave sole technology for superior cushioning on any terrain.",
    specs: ["AirWeave sole technology", "Breathable mesh upper", "Heel drop: 8mm", "Weight: 280g", "Available in 5 colors"],
    icon: "👟",
    colors: ["#111", "#c8ff00", "#ffffff", "#ff4444"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    tags: ["running", "lightweight", "performance"]
  },
  {
    id: 2,
    name: "StreetEdge 2.0",
    category: "shoes",
    gender: "men",
    price: 6499,
    originalPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 189,
    description: "Street-ready sneakers with bold silhouette. Perfect for casual wear and light training.",
    specs: ["Vulcanized rubber sole", "Canvas upper", "Padded collar", "OrthoLite insole"],
    icon: "👠",
    colors: ["#ffffff", "#111", "#4a90e2"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    tags: ["casual", "street", "lifestyle"]
  },
  {
    id: 3,
    name: "PowerFit Training Tee",
    category: "tops",
    gender: "men",
    price: 1899,
    originalPrice: 2499,
    badge: "sale",
    rating: 4.5,
    reviews: 412,
    description: "High-performance training t-shirt with 4-way stretch technology. Moisture-wicking fabric keeps you dry through intense workouts.",
    specs: ["94% Polyester, 6% Elastane", "4-way stretch", "Moisture-wicking", "Flatlock seams", "UPF 30+"],
    icon: "👕",
    colors: ["#111", "#ffffff", "#c8ff00", "#4a90e2", "#ff4444"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["training", "gym", "performance"]
  },
  {
    id: 4,
    name: "Velocity Track Pants",
    category: "bottoms",
    gender: "men",
    price: 3299,
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 256,
    description: "Streamlined track pants with tapered fit. Designed for performance with side stripe detailing.",
    specs: ["Recycled polyester", "Elastic waistband with drawcord", "Zip pockets", "Tapered leg"],
    icon: "👖",
    colors: ["#111", "#1a1a3e", "#ffffff"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["track", "running", "streetwear"]
  },
  {
    id: 5,
    name: "FlexCore Sports Bra",
    category: "tops",
    gender: "women",
    price: 2199,
    originalPrice: 2899,
    badge: "sale",
    rating: 4.9,
    reviews: 678,
    description: "Medium support sports bra with seamless construction. Ideal for yoga, pilates, and medium-intensity workouts.",
    specs: ["Seamless knit", "Medium support", "Removable pads", "Racerback design", "4-way stretch"],
    icon: "🩱",
    colors: ["#111", "#e91e8c", "#c8ff00", "#fff"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["yoga", "pilates", "low-impact"]
  },
  {
    id: 6,
    name: "Luna Run Leggings",
    category: "bottoms",
    gender: "women",
    price: 4599,
    originalPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 891,
    description: "7/8 length high-waist leggings with hidden pockets and compression support for all-day wear.",
    specs: ["75% Nylon 25% Elastane", "High-rise waist", "4 pockets", "Compression fit", "Squat-proof"],
    icon: "🩲",
    colors: ["#111", "#1a0a2e", "#c8ff00", "#3d0a3d"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["running", "yoga", "gym"]
  },
  {
    id: 7,
    name: "Apex Runner Pro W",
    category: "shoes",
    gender: "women",
    price: 8999,
    originalPrice: 12999,
    badge: "sale",
    rating: 4.7,
    reviews: 234,
    description: "Women's edition of our best-selling Apex Runner Pro. Built for speed with a femme-specific last for a perfect fit.",
    specs: ["Women's specific last", "AirWeave sole", "Breathable upper", "Weight: 240g"],
    icon: "👟",
    colors: ["#ff91a4", "#c8ff00", "#ffffff", "#9c27b0"],
    sizes: ["4", "5", "6", "7", "8", "9", "10"],
    tags: ["running", "performance", "lightweight"]
  },
  {
    id: 8,
    name: "Studio Flow Hoodie",
    category: "tops",
    gender: "women",
    price: 5999,
    originalPrice: 7499,
    badge: "sale",
    rating: 4.6,
    reviews: 312,
    description: "Relaxed fit hoodie perfect for studio sessions and street style. Oversized design with kangaroo pocket.",
    specs: ["100% organic cotton fleece", "Relaxed fit", "Kangaroo pocket", "Ribbed cuffs"],
    icon: "🧥",
    colors: ["#ffffff", "#c8ff00", "#111", "#9e9e9e"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["casual", "studio", "streetwear"]
  },
  {
    id: 9,
    name: "Sprint Elite Shorts",
    category: "bottoms",
    gender: "men",
    price: 2499,
    originalPrice: null,
    badge: null,
    rating: 4.4,
    reviews: 178,
    description: "5-inch split running shorts designed for elite speed. Built-in liner for maximum freedom.",
    specs: ["100% recycled polyester", "5 inch inseam", "Built-in brief", "Side pockets", "Reflective details"],
    icon: "🩳",
    colors: ["#111", "#ffffff", "#c8ff00", "#1a1a3e"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["running", "track", "speed"]
  },
  {
    id: 10,
    name: "BallerStore Backpack",
    category: "accessories",
    gender: "unisex",
    price: 4999,
    originalPrice: 5999,
    badge: "sale",
    rating: 4.5,
    reviews: 445,
    description: "30L performance backpack with laptop sleeve and hydration bladder compatibility. Built tough for every adventure.",
    specs: ["30L capacity", "15\" laptop sleeve", "Hydration compatible", "Chest & hip strap", "Reinforced base"],
    icon: "🎒",
    colors: ["#111", "#1a1a3e", "#c8ff00"],
    sizes: ["One Size"],
    tags: ["gym", "outdoor", "travel"]
  },
  {
    id: 11,
    name: "Performance Cap",
    category: "accessories",
    gender: "unisex",
    price: 1299,
    originalPrice: null,
    badge: null,
    rating: 4.3,
    reviews: 267,
    description: "6-panel structured cap with moisture-wicking sweatband. Perfect for any sport or street wear.",
    specs: ["6-panel structured", "Moisture-wicking band", "Adjustable strap", "UPF 40+"],
    icon: "🧢",
    colors: ["#111", "#ffffff", "#c8ff00", "#1a1a3e", "#ff4444"],
    sizes: ["One Size"],
    tags: ["accessories", "headwear", "sport"]
  },
  {
    id: 12,
    name: "HyperBurst Trainer",
    category: "shoes",
    gender: "men",
    price: 10999,
    originalPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 89,
    description: "Premium HIIT trainer with explosive bounce technology. Versatile shoe built for cross-training.",
    specs: ["HyperBurst foam midsole", "Multidirectional outsole", "Heel counter support", "Weight: 310g"],
    icon: "🥾",
    colors: ["#111", "#c8ff00", "#ff4444"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    tags: ["training", "HIIT", "cross-training"]
  },
  {
    id: 13,
    name: "Zen Yoga Pants",
    category: "bottoms",
    gender: "women",
    price: 3799,
    originalPrice: 4599,
    badge: "sale",
    rating: 4.8,
    reviews: 523,
    description: "Wide-leg yoga pants with a natural stretch fabric. Ultimate comfort for flow and studio practice.",
    specs: ["Bamboo blend", "Wide leg", "Fold-over waist", "Eco-friendly dyes"],
    icon: "🧘",
    colors: ["#ffffff", "#111", "#9e9e9e", "#c8ff00"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["yoga", "studio", "comfort"]
  },
  {
    id: 14,
    name: "GripMax Gloves",
    category: "accessories",
    gender: "unisex",
    price: 1799,
    originalPrice: null,
    badge: null,
    rating: 4.4,
    reviews: 198,
    description: "Weight training gloves with full palm protection and wrist wrap support. Built for serious gym sessions.",
    specs: ["Full palm padding", "Wrist wrap", "Anti-slip grip", "Breathable mesh back"],
    icon: "🥊",
    colors: ["#111", "#c8ff00", "#1a1a3e"],
    sizes: ["S/M", "L/XL"],
    tags: ["gym", "weightlifting", "training"]
  },
  {
    id: 15,
    name: "AeroFit Sports Top",
    category: "tops",
    gender: "women",
    price: 2499,
    originalPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 145,
    description: "Cropped sports top with adjustable straps and high support banding. Made for high-intensity workouts.",
    specs: ["High support", "Adjustable straps", "Mesh back panel", "Compression fit"],
    icon: "🎽",
    colors: ["#111", "#c8ff00", "#e91e8c", "#ffffff"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["HIIT", "gym", "training"]
  },
  {
    id: 16,
    name: "BallerStore Socks 3pk",
    category: "accessories",
    gender: "unisex",
    price: 799,
    originalPrice: null,
    badge: null,
    rating: 4.2,
    reviews: 876,
    description: "Performance no-show socks with arch support and cushioned sole. Pack of 3 pairs.",
    specs: ["78% cotton blend", "Arch support band", "Cushioned sole", "No-show cut", "Pack of 3"],
    icon: "🧦",
    colors: ["#ffffff", "#111", "#c8ff00"],
    sizes: ["S/M", "L/XL"],
    tags: ["accessories", "socks", "performance"]
  },
  {
    id: 17,
    name: "ThermoShield Jacket",
    category: "tops",
    gender: "men",
    price: 9999,
    originalPrice: 12999,
    badge: "sale",
    rating: 4.7,
    reviews: 211,
    description: "Lightweight water-resistant running jacket with packable design. Your go-to for unpredictable weather.",
    specs: ["Water-resistant coating", "Packable design", "Zippered pockets", "Reflective elements", "Adjustable hem"],
    icon: "🥋",
    colors: ["#111", "#1a1a3e", "#c8ff00"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["running", "outdoor", "weather-resistant"]
  },
  {
    id: 18,
    name: "Storm Cross Trainer W",
    category: "shoes",
    gender: "women",
    price: 7499,
    originalPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 167,
    description: "Versatile cross-training shoe with lateral stability and plush cushioning for all studio workouts.",
    specs: ["Women's-specific cushioning", "Lateral support", "Rubber outsole", "Weight: 270g"],
    icon: "👟",
    colors: ["#ffffff", "#c8ff00", "#e91e8c", "#111"],
    sizes: ["4", "5", "6", "7", "8", "9"],
    tags: ["training", "gym", "versatile"]
  },
  {
    id: 19,
    name: "CoreTech Compression Tee",
    category: "tops",
    gender: "men",
    price: 2799,
    originalPrice: 3299,
    badge: "sale",
    rating: 4.5,
    reviews: 389,
    description: "Full compression training shirt with targeted muscle support mapping. Reduce fatigue, maximize output.",
    specs: ["Full compression", "Muscle support mapping", "Flatlock seams", "Anti-odor technology"],
    icon: "👔",
    colors: ["#111", "#1a1a3e", "#c8ff00"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["compression", "training", "recovery"]
  },
  {
    id: 20,
    name: "Elite Water Bottle",
    category: "accessories",
    gender: "unisex",
    price: 1599,
    originalPrice: null,
    badge: null,
    rating: 4.3,
    reviews: 543,
    description: "Double-walled insulated bottle keeps drinks cold 24h or hot 12h. Leak-proof design.",
    specs: ["750ml capacity", "Double-wall insulated", "Leak-proof lid", "Stainless steel"],
    icon: "🧴",
    colors: ["#111", "#c8ff00", "#ffffff", "#1a1a3e"],
    sizes: ["750ml"],
    tags: ["hydration", "gym", "outdoor"]
  }
];

/* ============================================================
   STATE & UTILITY
============================================================ */
let cart = JSON.parse(localStorage.getItem('ballerstore_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('ballerstore_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('ballerstore_user')) || null;

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

const saveCart = () => {
  localStorage.setItem('ballerstore_cart', JSON.stringify(cart));
  updateCartBadge();
};

const saveWishlist = () => localStorage.setItem('ballerstore_wishlist', JSON.stringify(wishlist));

const getCartCount = () => cart.reduce((sum, item) => sum + item.qty, 0);

const getCartTotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);

/* ============================================================
   LOADER
============================================================ */
const initLoader = () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1200);
  });
};

/* ============================================================
   NAVBAR
============================================================ */
const initNavbar = () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  updateCartBadge();
  updateAuthLink();
};

const updateCartBadge = () => {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  });
};

const updateAuthLink = () => {
  const authLinks = document.querySelectorAll('.auth-link');
  authLinks.forEach(link => {
    if (currentUser) {
      link.textContent = currentUser.name.split(' ')[0];
      link.href = '#';
    }
  });
};

/* ============================================================
   TOAST NOTIFICATIONS
============================================================ */
const showToast = (message, type = 'success') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icons = { success: '✅', error: '❌', info: 'ℹ️', cart: '🛒' };
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
};

/* ============================================================
   CART FUNCTIONS
============================================================ */
const addToCart = (productId, qty = 1, size = null, color = null) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIdx = cart.findIndex(item =>
    item.id === productId && item.size === size && item.color === color
  );

  if (existingIdx > -1) {
    cart[existingIdx].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      icon: product.icon,
      size: size,
      color: color,
      qty: qty
    });
  }

  saveCart();
  showToast(`${product.name} added to cart`, 'cart');
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
};

const clearCart = () => {
  if (!cart.length) return;
  cart = [];
  saveCart();
  if (typeof renderCart === 'function') renderCart();
  showToast('Cart cleared', 'info');
};

const updateCartQty = (index, delta) => {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
};

/* ============================================================
   PRODUCT CARD BUILDER
============================================================ */
const buildProductCard = (product) => {
  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return `
    <div class="product-card reveal" data-id="${product.id}" onclick="goToProduct(${product.id})">
      <div class="product-image-wrapper">
        <div class="product-image-placeholder">${product.icon}</div>
        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? `${discountPct}% OFF` : product.badge.toUpperCase()}</span>` : ''}
        <div class="product-actions">
          <button class="product-action-btn" onclick="toggleWishlist(event, ${product.id})" title="Wishlist">
            ${wishlist.includes(product.id) ? '❤️' : '🤍'}
          </button>
          <button class="product-action-btn" onclick="quickAddToCart(event, ${product.id})" title="Add to Cart">🛒</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category} · ${product.gender}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price-row">
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn" onclick="quickAddToCart(event, ${product.id})">Add</button>
        </div>
      </div>
    </div>
  `;
};

const goToProduct = (id) => {
  window.location.href = `product-detail.html?id=${id}`;
};

const AddToCart = (e, id) => {
  e.stopPropagation();
  const btn = e.target;

  // 🔥 GOOGLE ANALYTICS EVENT
  if (typeof gtag === 'function') {
    gtag('event', 'add_to_cart', {
      item_id: id,
      item_name: 'Product ' + id
    });
  }

  btn.classList.add('adding');

  btn.addEventListener('animationend', () => 
    btn.classList.remove('adding'), { once: true });

  addToCart(id);
};

const toggleWishlist = (e, id) => {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist ❤️', 'success');
  }
  saveWishlist();
  // refresh heart icons
  document.querySelectorAll(`[data-id="${id}"] .product-action-btn`).forEach(btn => {
    if (btn.title === 'Wishlist') btn.textContent = wishlist.includes(id) ? '❤️' : '🤍';
  });
};

/* ============================================================
   SCROLL REVEAL
============================================================ */
const initScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const revealAll = () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };

  revealAll();

  // re-observe after dynamic content
  return revealAll;
};

/* ============================================================
   HERO SLIDER
============================================================ */
const initHeroSlider = () => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;

  const go = (n) => {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  };

  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
  setInterval(() => go(current + 1), 5000);
};

/* ============================================================
   SEARCH FUNCTIONALITY
============================================================ */
const initSearch = () => {
  const forms = document.querySelectorAll('.nav-search-form, .mobile-search');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = form.querySelector('input')?.value?.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    });
  });
};

/* ============================================================
   HOME PAGE
============================================================ */
const initHomePage = () => {
  const featuredGrid = document.getElementById('featured-products');
  if (!featuredGrid) return;

  // Show 8 featured products
  const featured = PRODUCTS.slice(0, 8);
  featuredGrid.innerHTML = featured.map(buildProductCard).join('');

  const newGrid = document.getElementById('new-arrivals');
  if (newGrid) {
    const newArr = PRODUCTS.filter(p => p.badge === 'new').slice(0, 4);
    newGrid.innerHTML = newArr.map(buildProductCard).join('');
  }

  const revealAll = initScrollReveal();
  setTimeout(revealAll, 100);
};

/* ============================================================
   PRODUCTS LISTING PAGE
============================================================ */
const initProductsPage = () => {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search') || '';
  const genderFilter = params.get('gender') || '';
  const catFilter = params.get('category') || '';

  let filtered = [...PRODUCTS];
  let activePriceMax = 15000;
  let activeCategories = catFilter ? [catFilter] : [];
  let activeSizes = [];
  let activeSortValue = 'featured';

  // Pre-fill search bar
  if (searchQuery) {
    document.querySelectorAll('.nav-search-form input, .mobile-search input').forEach(inp => {
      inp.value = searchQuery;
    });
  }

  // Set page title
  const titleEl = document.getElementById('listing-title');
  if (titleEl) {
    if (genderFilter === 'men') titleEl.innerHTML = 'MEN\'S <span>COLLECTION</span>';
    else if (genderFilter === 'women') titleEl.innerHTML = 'WOMEN\'S <span>COLLECTION</span>';
    else if (searchQuery) titleEl.innerHTML = `SEARCH: <span>${searchQuery.toUpperCase()}</span>`;
    else titleEl.innerHTML = 'ALL <span>PRODUCTS</span>';
  }

  const applyFilters = () => {
    filtered = PRODUCTS.filter(p => {
      const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.tags.some(t => t.includes(searchQuery.toLowerCase()));
      const matchGender = !genderFilter || p.gender === genderFilter || p.gender === 'unisex';
      const matchCat = !activeCategories.length || activeCategories.includes(p.category);
      const matchPrice = p.price <= activePriceMax;
      const matchSize = !activeSizes.length || p.sizes.some(s => activeSizes.includes(s));
      return matchSearch && matchGender && matchCat && matchPrice && matchSize;
    });

    // Sort
    if (activeSortValue === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (activeSortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (activeSortValue === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (activeSortValue === 'newest') filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));

    renderGrid();
  };

  const renderGrid = () => {
    const countEl = document.getElementById('products-count');
    if (countEl) countEl.innerHTML = `<strong>${filtered.length}</strong> Products`;

    if (!filtered.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--gray)">
          <div style="font-size:4rem;margin-bottom:16px">🔍</div>
          <div style="font-family:var(--font-display);font-size:2rem;letter-spacing:2px;margin-bottom:12px">NO RESULTS</div>
          <p>Try adjusting your filters</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map(buildProductCard).join('');
    initScrollReveal()();
  };

  // Filter interactions
  document.querySelectorAll('.filter-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.dataset.value;
      const type = opt.dataset.type;
      if (type === 'category') {
        opt.classList.toggle('active');
        const idx = activeCategories.indexOf(val);
        if (idx > -1) activeCategories.splice(idx, 1);
        else activeCategories.push(val);
      }
      applyFilters();
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const val = btn.dataset.size;
      const idx = activeSizes.indexOf(val);
      if (idx > -1) activeSizes.splice(idx, 1);
      else activeSizes.push(val);
      applyFilters();
    });
  });

  const priceRange = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-display');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      activePriceMax = parseInt(priceRange.value);
      if (priceDisplay) priceDisplay.textContent = formatPrice(activePriceMax);
      applyFilters();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeSortValue = sortSelect.value;
      applyFilters();
    });
  }

  applyFilters();
};

/* ============================================================
   PRODUCT DETAIL PAGE
============================================================ */
const initProductDetailPage = () => {
  const content = document.getElementById('product-detail-content');
  if (!content) return;

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    content.innerHTML = `
      <div style="text-align:center;padding:100px 20px;color:var(--gray)">
        <div style="font-size:4rem;margin-bottom:20px">😕</div>
        <div style="font-family:var(--font-display);font-size:2.5rem;letter-spacing:2px">PRODUCT NOT FOUND</div>
        <a href="products.html" class="btn btn-primary" style="margin-top:30px;display:inline-flex">Browse Products</a>
      </div>`;
    return;
  }

  // Set page title
  document.title = `${product.name} — BallerStore`;

  let selectedSize = null;
  let selectedColor = product.colors[0];
  let qty = 1;

  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  content.innerHTML = `
    <div class="product-detail-layout">
      <!-- Gallery -->
      <div class="product-detail-gallery">
        <div class="gallery-main" id="gallery-main">${product.icon}</div>
        <div class="gallery-thumbs">
          ${[product.icon, product.icon, product.icon].map((icon, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchThumb(this, '${icon}')">
              ${icon}
            </div>
          `).join('')}
        </div>
      </div>
      <!-- Info -->
      <div class="product-detail-info">
        <div class="product-detail-brand">BallerStore · ${product.category.toUpperCase()}</div>
        <h1 class="product-detail-name">${product.name}</h1>
        <div class="product-detail-rating">
          <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-detail-price">
          <span class="detail-price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="detail-price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          ${discountPct ? `<span class="detail-price-discount">−${discountPct}%</span>` : ''}
        </div>

        <div class="detail-section-label">Select Color</div>
        <div class="detail-colors" id="color-swatches">
          ${product.colors.map((c, i) => `
            <div class="color-swatch ${i === 0 ? 'active' : ''}"
              style="background:${c};border-color:${c === '#ffffff' ? '#444' : c}"
              onclick="selectColor(this, '${c}')"></div>
          `).join('')}
        </div>

        <div class="detail-section-label">Select Size</div>
        <div class="detail-sizes" id="size-options">
          ${product.sizes.map(s => `
            <div class="size-option" onclick="selectSize(this, '${s}')">${s}</div>
          `).join('')}
        </div>

        <div class="detail-qty-row">
          <div class="qty-control">
            <div class="qty-btn" onclick="changeQty(-1)">−</div>
            <div class="qty-value" id="qty-display">1</div>
            <div class="qty-btn" onclick="changeQty(1)">+</div>
          </div>
          <button class="detail-add-btn" onclick="detailAddToCart()">
            🛒 Add to Cart
          </button>
          <button class="detail-wish-btn ${wishlist.includes(product.id) ? 'active' : ''}"
            onclick="toggleDetailWishlist(${product.id}, this)">
            ${wishlist.includes(product.id) ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="product-detail-tabs">
          <div class="tab-headers">
            <div class="tab-header active" onclick="switchTab(this, 'desc')">Description</div>
            <div class="tab-header" onclick="switchTab(this, 'specs')">Specifications</div>
            <div class="tab-header" onclick="switchTab(this, 'delivery')">Delivery</div>
          </div>
          <div class="tab-content active" id="tab-desc">
            <p>${product.description}</p>
          </div>
          <div class="tab-content" id="tab-specs">
            <ul>${product.specs.map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
          <div class="tab-content" id="tab-delivery">
            <p>🚚 <strong>Free delivery</strong> on orders above ₹2,000</p>
            <p style="margin-top:12px">📦 Ships within 1-3 business days</p>
            <p style="margin-top:12px">🔄 Easy 30-day returns on all orders</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Expose functions to window scope for inline handlers
  window.changeQty = (delta) => {
    qty = Math.max(1, qty + delta);
    document.getElementById('qty-display').textContent = qty;
  };
  window.selectSize = (el, size) => {
    document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    selectedSize = size;
  };
  window.selectColor = (el, color) => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    selectedColor = color;
  };
  window.switchThumb = (el, icon) => {
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('gallery-main').textContent = icon;
  };
  window.switchTab = (el, tabId) => {
    document.querySelectorAll('.tab-header').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById(`tab-${tabId}`)?.classList.add('active');
  };
  window.detailAddToCart = () => {

  // 🔥 GOOGLE ANALYTICS EVENT
  if (typeof gtag === 'function') {
    gtag('event', 'add_to_cart', {
      item_id: product.id,
      item_name: product.name
    });
  }

  addToCart(product.id, qty, selectedSize, selectedColor);
};
  window.toggleDetailWishlist = (id, btn) => {
    const idx = wishlist.indexOf(id);
    if (idx > -1) { wishlist.splice(idx, 1); btn.textContent = '🤍'; btn.classList.remove('active'); showToast('Removed from wishlist', 'info'); }
    else { wishlist.push(id); btn.textContent = '❤️'; btn.classList.add('active'); showToast('Added to wishlist ❤️', 'success'); }
    saveWishlist();
  };

  // Related products
  const relGrid = document.getElementById('related-products');
  if (relGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.gender === product.gender)).slice(0, 4);
    relGrid.innerHTML = related.map(buildProductCard).join('');
  }

  initScrollReveal()();
};

/* ============================================================
   CART PAGE
============================================================ */
window.renderCart = () => {
  const cartItemsEl = document.getElementById('cart-items');
  const summaryEl = document.getElementById('cart-summary');
  const removeAllBtn = document.getElementById('remove-all-btn');
  if (!cartItemsEl) return;

  if (removeAllBtn) {
    removeAllBtn.style.display = cart.length ? 'inline-flex' : 'none';
  }

  if (!cart.length) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>YOUR CART IS EMPTY</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn btn-primary">Start Shopping</a>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-image">${item.icon}</div>
        <div class="cart-item-details">
          <div class="cart-item-cat">${item.category}</div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">
            ${item.size ? `<span>Size: ${item.size}</span>` : ''}
            ${item.color ? `<span>Color: <span style="display:inline-block;width:12px;height:12px;background:${item.color};border-radius:50%;border:1px solid #555;vertical-align:middle;margin-left:4px"></span></span>` : ''}
          </div>
          <div class="cart-item-bottom">
            <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <div class="qty-btn" onclick="updateCartQty(${idx}, -1)">−</div>
                <div class="qty-value">${item.qty}</div>
                <div class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</div>
              </div>
              <button type="button" class="cart-remove-btn" onclick="removeFromCart(${idx})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update summary
  if (summaryEl) {
    const subtotal = getCartTotal();
    const shipping = subtotal > 2000 ? 0 : 199;
    const total = subtotal + shipping;

    document.getElementById('summary-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('summary-shipping').innerHTML = shipping === 0
      ? `<span class="free-tag">FREE</span>`
      : formatPrice(shipping);
    document.getElementById('summary-total').textContent = formatPrice(total);
  }
};

const initCartPage = () => {
  if (!document.getElementById('cart-items')) return;
  window.renderCart();

  const removeAllBtn = document.getElementById('remove-all-btn');
  if (removeAllBtn) {
    removeAllBtn.addEventListener('click', clearCart);
  }

  // Coupon
  const couponBtn = document.querySelector('.coupon-btn');
  if (couponBtn) {
    couponBtn.addEventListener('click', () => {
      const input = document.querySelector('.coupon-input');
      if (input?.value?.toUpperCase() === 'BALLER10') {
        showToast('Coupon applied! 10% discount', 'success');
      } else {
        showToast('Invalid coupon code', 'error');
      }
    });
  }
};

/* ============================================================
   AUTH PAGE
============================================================ */
const initAuthPage = () => {
  const authPage = document.querySelector('.auth-page');
  if (!authPage) return;

  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`${target}-form`)?.classList.add('active');
    });
  });

  // Login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('[name="email"]')?.value;
      const password = loginForm.querySelector('[name="password"]')?.value;
      const users = JSON.parse(localStorage.getItem('ballerstore_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        currentUser = user;
        localStorage.setItem('ballerstore_user', JSON.stringify(user));
        showToast(`Welcome back, ${user.name}!`, 'success');
        setTimeout(() => window.location.href = 'index.html', 1500);
      } else {
        showToast('Invalid credentials. Try test@baller.com / baller123', 'error');
      }
    });
  }

  // Signup
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = signupForm.querySelector('[name="name"]')?.value;
      const email = signupForm.querySelector('[name="email"]')?.value;
      const password = signupForm.querySelector('[name="password"]')?.value;
      const users = JSON.parse(localStorage.getItem('ballerstore_users') || '[]');

      if (users.find(u => u.email === email)) {
        showToast('Email already registered!', 'error');
        return;
      }

      const newUser = { id: Date.now(), name, email, password };
      users.push(newUser);
      localStorage.setItem('ballerstore_users', JSON.stringify(users));
      currentUser = newUser;
      localStorage.setItem('ballerstore_user', JSON.stringify(newUser));
      showToast(`Welcome to BallerStore, ${name}! 🎉`, 'success');
      setTimeout(() => window.location.href = 'index.html', 1500);
    });
  }

  // Seed demo user
  const users = JSON.parse(localStorage.getItem('ballerstore_users') || '[]');
  if (!users.find(u => u.email === 'test@baller.com')) {
    users.push({ id: 1, name: 'Baller User', email: 'test@baller.com', password: 'baller123' });
    localStorage.setItem('ballerstore_users', JSON.stringify(users));
  }
};

/* ============================================================
   CHECKOUT PAGE
============================================================ */
const initCheckoutPage = () => {
  const miniCart = document.getElementById('checkout-mini-cart');
  if (!miniCart) return;

  miniCart.innerHTML = cart.map(item => `
    <div class="mini-cart-item">
      <div class="mini-item-img">${item.icon}</div>
      <div>
        <div class="mini-item-name">${item.name}</div>
        <div class="mini-item-qty">Qty: ${item.qty} ${item.size ? `· ${item.size}` : ''}</div>
      </div>
      <div class="mini-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('') || '<p style="color:var(--gray);font-size:.85rem">No items in cart</p>';

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 199;
  document.getElementById('checkout-subtotal').textContent = formatPrice(subtotal);
  document.getElementById('checkout-shipping').innerHTML = shipping === 0 ? '<span class="free-tag">FREE</span>' : formatPrice(shipping);
  document.getElementById('checkout-total').textContent = formatPrice(subtotal + shipping);

  // Payment methods
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
      method.classList.add('active');
      // Show/hide card fields
      const cardFields = document.getElementById('card-fields');
      if (cardFields) cardFields.style.display = method.dataset.method === 'card' ? 'block' : 'none';
    });
  });

  // Place order
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
      if (!cart.length) { showToast('Your cart is empty!', 'error'); return; }
      cart = [];
      saveCart();
      showToast('🎉 Order placed successfully!', 'success');
      setTimeout(() => window.location.href = 'index.html', 2000);
    });
  }
};

/* ============================================================
   CATEGORY PAGES
============================================================ */
const initCategoryPage = () => {
  const catGrid = document.getElementById('category-products-grid');
  if (!catGrid) return;

  const gender = document.body.dataset.gender;
  const products = gender ? PRODUCTS.filter(p => p.gender === gender || p.gender === 'unisex') : PRODUCTS;
  catGrid.innerHTML = products.map(buildProductCard).join('');
  initScrollReveal()();
};

/* ============================================================
   INIT ALL
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initSearch();
  initHeroSlider();
  initHomePage();
  initProductsPage();
  initProductDetailPage();
  initCartPage();
  initAuthPage();
  initCheckoutPage();
  initCategoryPage();
  initScrollReveal();
});
