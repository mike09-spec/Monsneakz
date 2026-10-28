const BASE_PRODUCTS = [
  {
    id: 'nike-kobe-5',
    brand: 'Nike',
    category: 'Nike',
    name: 'Nike Kobe 5 Protro Year of the Mamba Eggplant Size 11 Men Basketball Shoes',
    price: 14975.4,
    oldPrice: 19500,
    image: 'nike/s-l500%20(1).webp',
    gallery: [
      'nike/s-l500%20(1).webp',
      'nike/s-l500%20(2).webp',
      'nike/s-l500%20(3).webp',
      'nike/s-l500%20(4).webp'
    ],
    colors: ['White', 'Black', 'Purple'],
    sizes: ['6.5', '7', '8', '9', '10', '11'],
    sellerAdded: false
  },
  {
    id: 'giannis-immortality-3',
    brand: 'Nike',
    category: 'Nike',
    name: 'Giannis Immortality 3 EP Basketball Shoes Triple White Size 6.5 US MENS',
    price: 19999,
    oldPrice: 24500,
    image: 'nike/s-l500%20(2).webp',
    gallery: [
      'nike/s-l500%20(2).webp',
      'nike/s-l500%20(1).webp',
      'nike/s-l500%20(3).webp',
      'nike/s-l500%20(4).webp'
    ],
    colors: ['White', 'Black', 'Purple'],
    sizes: ['6.5', '7', '8', '9', '10', '11'],
    sellerAdded: false
  },
  {
    id: 'nike-gt-cut',
    brand: 'Nike',
    category: 'Nike',
    name: 'Nike G.T Cut EP Blue Fury Tangerine Tint Men Basketball Shoes DV2918-404',
    price: 18500,
    oldPrice: 22500,
    image: 'nike/s-l500%20(3).webp',
    gallery: [
      'nike/s-l500%20(3).webp',
      'nike/s-l500%20(4).webp',
      'nike/s-l500%20(1).webp',
      'nike/s-l500%20(2).webp'
    ],
    colors: ['Blue', 'Orange', 'Black'],
    sizes: ['6', '7', '8', '9', '10', '11'],
    sellerAdded: false
  },
  {
    id: 'nike-kd-trey',
    brand: 'Nike',
    category: 'Nike',
    name: 'Nike KD Trey 5 X EP Black Volt White Men Basketball Hoopers Shoes DJ7554-007',
    price: 16750,
    oldPrice: 20500,
    image: 'nike/s-l500%20(4).webp',
    gallery: [
      'nike/s-l500%20(4).webp',
      'nike/s-l500%20(3).webp',
      'nike/s-l500%20(2).webp',
      'nike/s-l500%20(1).webp'
    ],
    colors: ['Black', 'Volt', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    sellerAdded: false
  },
  {
    id: 'harden-vol-8',
    brand: 'New Balance',
    category: 'New Balance',
    name: 'Harden Vol. 8 Miami Nights Men Basketball Shoes JQ2393',
    price: 19999,
    oldPrice: 24000,
    image: 'nb/s-l500%20(1).webp',
    gallery: [
      'nb/s-l500%20(1).webp',
      'nb/s-l500%20(2).webp',
      'nb/s-l500%20(3).webp',
      'nb/s-l500%20(4).webp'
    ],
    colors: ['Miami Blue', 'Black', 'White'],
    sizes: ['6', '7', '8', '9', '10', '11'],
    sellerAdded: false
  },
  {
    id: 'harden-vol-6',
    brand: 'New Balance',
    category: 'New Balance',
    name: 'Harden Vol 6 J Boost Basketball Shoes Mens Size 5 Black NWT GZ2012',
    price: 19999,
    oldPrice: 23500,
    image: 'nb/s-l500%20(2).webp',
    gallery: [
      'nb/s-l500%20(2).webp',
      'nb/s-l500%20(1).webp',
      'nb/s-l500%20(3).webp',
      'nb/s-l500%20(4).webp'
    ],
    colors: ['Black', 'Gray', 'White'],
    sizes: ['5', '6', '7', '8', '9', '10'],
    sellerAdded: false
  },
  {
    id: 'anthony-edwards-ae1',
    brand: 'New Balance',
    category: 'New Balance',
    name: 'Anthony Edwards AE1 Ascent Pack Black Grey Men Basketball IG6668',
    price: 18450,
    oldPrice: 21900,
    image: 'nb/s-l500%20(3).webp',
    gallery: [
      'nb/s-l500%20(3).webp',
      'nb/s-l500%20(4).webp',
      'nb/s-l500%20(1).webp',
      'nb/s-l500%20(2).webp'
    ],
    colors: ['Black', 'Gray', 'Silver'],
    sizes: ['6.5', '7', '8', '9', '10', '11'],
    sellerAdded: false
  },
  {
    id: 'harden-volume-9',
    brand: 'New Balance',
    category: 'New Balance',
    name: 'Harden Volume 9 Cyber Metallic *NEW*',
    price: 19999,
    oldPrice: 23900,
    image: 'nb/s-l500%20(4).webp',
    gallery: [
      'nb/s-l500%20(4).webp',
      'nb/s-l500%20(3).webp',
      'nb/s-l500%20(1).webp',
      'nb/s-l500%20(2).webp'
    ],
    colors: ['Cyber', 'Black', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    sellerAdded: false
  }
];

const STORAGE_KEYS = {
  sellerProducts: 'monsneakz_seller_products',
  cart: 'monsneakz_cart',
  sellerSession: 'monsneakz_seller_session'
};

function safeParse(value, fallback) {
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed : fallback;
  } catch (error) {
    return fallback;
  }
}

function getSellerProducts() {
  if (typeof localStorage === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEYS.sellerProducts);
  const parsed = raw ? safeParse(raw, []) : [];
  return Array.isArray(parsed) ? parsed : [];
}

function saveSellerProducts(items) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.sellerProducts, JSON.stringify(items));
}

function getAllProducts() {
  const sellerProducts = getSellerProducts();
  return [...BASE_PRODUCTS, ...sellerProducts].map((product) => ({
    ...product,
    image: product.image || 'nike/s-l500.webp',
    gallery: Array.isArray(product.gallery) && product.gallery.length ? product.gallery : [product.image || 'nike/s-l500.webp'],
    colors: Array.isArray(product.colors) && product.colors.length ? product.colors : ['Default'],
    sizes: Array.isArray(product.sizes) && product.sizes.length ? product.sizes : ['8'],
    price: Number(product.price || 0),
    oldPrice: Number(product.oldPrice || product.price || 0)
  }));
}

function getProductById(productId) {
  const allProducts = getAllProducts();
  return allProducts.find((product) => product.id === productId) || allProducts[0];
}

function formatPrice(value) {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' $';
}

function getCart() {
  if (typeof localStorage === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEYS.cart);
  const parsed = raw ? safeParse(raw, []) : [];
  return Array.isArray(parsed) ? parsed : [];
}

function saveCart(items) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
  document.querySelectorAll('[data-cart-count]').forEach((node) => {
    node.textContent = totalItems;
  });
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const found = cart.find((item) => item.id === product.id);

  if (found) {
    found.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: Number(product.price || 0),
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();
  return cart;
}

function removeCartItem(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
  return cart;
}

function changeCartQuantity(productId, delta) {
  const cart = getCart();
  const target = cart.find((item) => item.id === productId);
  if (!target) return cart;

  target.quantity = Math.max(0, Number(target.quantity || 1) + delta);
  const filtered = cart.filter((item) => item.quantity > 0);
  saveCart(filtered);
  updateCartBadge();
  return filtered;
}

function createProductCard(product) {
  return `
    <a href="product.html?id=${product.id}" class="video-preview" aria-label="View ${product.name}">
      <div class="thumbnail-row">
        <img class="thumbnail" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
        <div class="video-time">${formatPrice(product.price)}</div>
      </div>
      <div class="video-info">
        <p class="video-title">${product.name}</p>
        <p class="video-author">MON Sneakz</p>
        <p class="video-stats">141M views · 1 year ago</p>
      </div>
    </a>
  `;
}

function renderGridByCategory(category) {
  const allProducts = getAllProducts();
  const items = category ? allProducts.filter((product) => product.category === category) : allProducts;
  const grid = document.getElementById(category ? `productGrid${category.replace(/\s+/g, '')}` : 'productGrid');
  if (!grid) return;
  grid.innerHTML = items.map(createProductCard).join('');
}

function renderHomePage() {
  renderGridByCategory('Nike');
  renderGridByCategory('New Balance');
  updateCartBadge();
}

function renderProductDetail() {
  const detail = document.getElementById('productDetail');
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const selectedProduct = getProductById(productId) || getAllProducts()[0];

  const mainImage = document.getElementById('main-product-image');
  const title = document.getElementById('productTitle');
  const price = document.getElementById('productPrice');
  const oldPrice = document.getElementById('productOldPrice');
  const gallery = document.getElementById('productGallery');
  const relatedGrid = document.getElementById('relatedGrid');
  const addToCartButton = document.getElementById('addToCartBtn');

  if (mainImage) {
    mainImage.src = selectedProduct.gallery[0];
    mainImage.alt = selectedProduct.name;
  }

  if (title) title.textContent = selectedProduct.name;
  if (price) price.textContent = formatPrice(selectedProduct.price);
  if (oldPrice) oldPrice.textContent = formatPrice(selectedProduct.oldPrice || selectedProduct.price);

  if (gallery) {
    gallery.innerHTML = selectedProduct.gallery.map((image, index) => {
      const isActive = index === 0 ? 'active' : '';
      return `
        <div class="thumb ${isActive}" data-image="${image}">
          <img src="${image}" alt="${selectedProduct.name} thumbnail ${index + 1}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
        </div>
      `;
    }).join('');

    gallery.querySelectorAll('.thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImage) {
          mainImage.src = thumb.dataset.image;
          mainImage.alt = selectedProduct.name;
        }
      });
    });
  }

  if (relatedGrid) {
    const relatedProducts = getAllProducts().filter((product) => product.id !== selectedProduct.id).slice(0, 4);
    relatedGrid.innerHTML = relatedProducts.map((product) => `
      <article class="related-card">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
          <div class="related-body">
            <p class="related-title">${product.name}</p>
            <div class="related-price">${formatPrice(product.price)}</div>
          </div>
        </a>
      </article>
    `).join('');
  }

  if (addToCartButton) {
    addToCartButton.onclick = () => {
      addToCart(selectedProduct.id);
      addToCartButton.textContent = 'Added to Cart';
      setTimeout(() => {
        addToCartButton.textContent = 'Add to Cart';
      }, 1000);
    };
  }

  updateCartBadge();
}

function renderCartPage() {
  const cartTable = document.getElementById('cartItems');
  const totalBox = document.getElementById('cartTotal');
  if (!cartTable || !totalBox) return;

  const cart = getCart();
  if (!cart.length) {
    cartTable.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    totalBox.textContent = '0.00 $';
    return;
  }

  cartTable.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-product">
        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
        <div>
          <strong>${item.name}</strong>
          <p>Qty: ${item.quantity}</p>
        </div>
      </div>
      <div class="cart-controls">
        <button class="mini-btn" data-action="minus" data-id="${item.id}">-</button>
        <span>${item.quantity}</span>
        <button class="mini-btn" data-action="plus" data-id="${item.id}">+</button>
      </div>
      <div class="cart-price">${formatPrice(item.price * item.quantity)}</div>
    </div>
  `).join('');

  cartTable.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const action = button.dataset.action;
      if (action === 'plus') {
        changeCartQuantity(id, 1);
      } else {
        changeCartQuantity(id, -1);
      }
      renderCartPage();
    });
  });

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
  totalBox.textContent = formatPrice(total);
}

function renderSellerDashboard() {
  const form = document.getElementById('sellerProductForm');
  const list = document.getElementById('sellerProductList');
  const session = document.getElementById('sellerSessionBadge');
  const logoutButton = document.getElementById('logoutSeller');

  if (session) {
    const activeUser = localStorage.getItem(STORAGE_KEYS.sellerSession);
    session.textContent = activeUser ? `Logged in as: ${activeUser}` : 'Seller account not active';
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const product = {
        id: `seller-${Date.now()}`,
        brand: document.getElementById('sellerBrand').value.trim() || 'Seller Brand',
        category: document.getElementById('sellerCategory').value.trim() || 'Nike',
        name: document.getElementById('sellerName').value.trim(),
        price: Number(document.getElementById('sellerPrice').value || 0),
        oldPrice: Number(document.getElementById('sellerOldPrice').value || 0),
        image: document.getElementById('sellerImage').value.trim() || 'nike/s-l500.webp',
        gallery: [
          document.getElementById('sellerImage').value.trim() || 'nike/s-l500.webp'
        ],
        colors: ['Default'],
        sizes: ['8'],
        sellerAdded: true
      };

      if (!product.name) return;

      const items = getSellerProducts();
      items.push(product);
      saveSellerProducts(items);
      form.reset();
      renderSellerDashboard();
    });
  }

  if (list) {
    const items = getSellerProducts();
    if (!items.length) {
      list.innerHTML = '<p>No seller products yet.</p>';
      return;
    }

    list.innerHTML = items.map((product) => `
      <div class="seller-product-item">
        <div>
          <strong>${product.name}</strong>
          <span>${formatPrice(product.price)}</span>
        </div>
        <button class="danger-btn" data-delete-id="${product.id}">Delete</button>
      </div>
    `).join('');

    list.querySelectorAll('[data-delete-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.deleteId;
        const nextItems = getSellerProducts().filter((item) => item.id !== id);
        saveSellerProducts(nextItems);
        renderSellerDashboard();
      });
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEYS.sellerSession);
      window.location.reload();
    });
  }
}

function initSellerLogin() {
  const loginForm = document.getElementById('sellerLoginForm');
  if (!loginForm) return;

  const isLoggedIn = !!localStorage.getItem(STORAGE_KEYS.sellerSession);
  const sellerDashboard = document.getElementById('sellerDashboard');
  const sellerLoginCard = document.getElementById('sellerLoginCard');

  if (isLoggedIn) {
    if (sellerLoginCard) sellerLoginCard.style.display = 'none';
    if (sellerDashboard) sellerDashboard.style.display = 'block';
  } else {
    if (sellerLoginCard) sellerLoginCard.style.display = 'block';
    if (sellerDashboard) sellerDashboard.style.display = 'none';
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('sellerUsername').value.trim();
    const password = document.getElementById('sellerPassword').value.trim();

    if (username && password) {
      localStorage.setItem(STORAGE_KEYS.sellerSession, username);
      window.location.reload();
    }
  });
}

function initCheckoutButton() {
  const checkoutButton = document.getElementById('checkoutButton');
  if (!checkoutButton) return;

  checkoutButton.addEventListener('click', () => {
    const cart = getCart();
    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }

    localStorage.removeItem(STORAGE_KEYS.cart);
    updateCartBadge();
    alert('Order placed successfully!');
    window.location.href = 'first.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'home') {
    renderHomePage();
  }

  if (document.body.dataset.page === 'product') {
    renderProductDetail();
  }

  if (document.body.dataset.page === 'cart') {
    renderCartPage();
    initCheckoutButton();
  }

  if (document.body.dataset.page === 'seller') {
    initSellerLogin();
    renderSellerDashboard();
  }

  updateCartBadge();

  const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.addToCart;
      addToCart(productId);
      button.textContent = 'Added';
      setTimeout(() => {
        button.textContent = 'Add to Cart';
      }, 1000);
    });
  });
});

window.MON_SNEAKZ_PRODUCTS = getAllProducts();
window.MON_SNEAKZ_CART = getCart();
window.MON_SNEAKZ = {
  BASE_PRODUCTS,
  getAllProducts,
  getProductById,
  addToCart,
  getCart,
  saveCart,
  removeCartItem,
  changeCartQuantity,
  renderHomePage,
  renderProductDetail,
  renderCartPage,
  renderSellerDashboard,
  updateCartBadge,
  formatPrice
};
