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
  const all = getAllProducts();
  return all.find((product) => product.id === productId) || all[0];
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
  if (!product) return [];

  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
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

function renderGridByCategory(category) {
  const products = getAllProducts().filter((product) => product.category === category);
  const gridId = category === 'Nike' ? 'productGridNike' : category === 'New Balance' ? 'productGridNewBalance' : 'productGrid';
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = products.map((product) => `
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
  `).join('');
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
  const selected = getProductById(productId) || getAllProducts()[0];

  const mainImage = document.getElementById('main-product-image');
  const title = document.getElementById('productTitle');
  const priceElm = document.getElementById('productPrice');
  const oldPriceElm = document.getElementById('productOldPrice');
  const gallery = document.getElementById('productGallery');
  const relatedGrid = document.getElementById('relatedGrid');
  const addToCartButton = document.getElementById('addToCartBtn');

  if (mainImage) {
    mainImage.src = selected.gallery[0];
    mainImage.alt = selected.name;
  }

  if (title) title.textContent = selected.name;
  if (priceElm) priceElm.textContent = formatPrice(selected.price);
  if (oldPriceElm) oldPriceElm.textContent = formatPrice(selected.oldPrice || selected.price);

  if (gallery) {
    gallery.innerHTML = selected.gallery.map((image, index) => `
      <div class="thumb ${index === 0 ? 'active' : ''}" data-image="${image}">
        <img src="${image}" alt="${selected.name} thumbnail ${index + 1}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
      </div>
    `).join('');

    gallery.querySelectorAll('.thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImage) {
          mainImage.src = thumb.dataset.image;
          mainImage.alt = selected.name;
        }
      });
    });
  }

  if (relatedGrid) {
    const relatedProducts = getAllProducts().filter((product) => product.id !== selected.id).slice(0, 4);
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
      addToCart(selected.id);
      addToCartButton.textContent = 'Added';
      setTimeout(() => {
        addToCartButton.textContent = 'Add to Cart';
      }, 900);
    };
  }

  updateCartBadge();
}

function renderCartPage() {
  const cartTable = document.getElementById('cartItems');
  const totalBox = document.getElementById('cartTotal');
  const totalFinalBox = document.getElementById('cartTotalFinal');

  if (!cartTable || !totalBox || !totalFinalBox) return;

  const cart = getCart();
  if (!cart.length) {
    cartTable.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    totalBox.textContent = '0.00 $';
    totalFinalBox.textContent = '0.00 $';
    return;
  }

  cartTable.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-product">
        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='nike/s-l500.webp';" />
        <div>
          <strong>${item.name}</strong>
          <p>${formatPrice(item.price)}</p>
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
  totalFinalBox.textContent = formatPrice(total);
  updateCartBadge();
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

    saveCart([]);
    updateCartBadge();
    renderCartPage();
    alert('Purchase complete! Your order is ready.');
  });
}

function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read image file'));
    reader.readAsDataURL(file);
  });
}

async function readSelectedImages(fileInput) {
  const files = fileInput && fileInput.files ? Array.from(fileInput.files) : [];
  const validFiles = files.filter((file) => file && file.type && file.type.startsWith('image/'));

  if (!validFiles.length) {
    return [];
  }

  const results = [];
  for (const file of validFiles) {
    results.push(await toDataUrl(file));
  }
  return results;
}

function renderImagePreviews(imageUrls) {
  const previewRow = document.getElementById('imagePreviewRow');
  if (!previewRow) return;

  previewRow.innerHTML = imageUrls.map((url, index) => `
    <div class="preview-image">
      <img src="${url}" alt="Preview ${index + 1}" />
      <button type="button" class="remove-preview" data-index="${index}">×</button>
    </div>
  `).join('');

  previewRow.querySelectorAll('.remove-preview').forEach((button) => {
    button.addEventListener('click', () => {
      const indexToRemove = Number(button.dataset.index);
      const input = document.getElementById('sellerImage');
      const currentFiles = input && input.files ? Array.from(input.files) : [];
      const remaining = currentFiles.filter((_, index) => index !== indexToRemove);

      const dataTransfer = new DataTransfer();
      remaining.forEach((file) => dataTransfer.items.add(file));
      input.files = dataTransfer.files;

      if (!remaining.length) {
        renderImagePreviews([]);
        return;
      }

      const newPreviewUrls = [];
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          newPreviewUrls.push(reader.result);
          if (newPreviewUrls.length === input.files.length) {
            renderImagePreviews(newPreviewUrls);
          }
        };
        reader.readAsDataURL(file);
      });
    });
  });
}

function initSellerImageSelector() {
  const input = document.getElementById('sellerImage');
  const clearButton = document.getElementById('clearImageSelection');

  if (!input) return;

  input.addEventListener('change', async () => {
    const selected = await readSelectedImages(input);
    renderImagePreviews(selected);
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      input.value = '';
      renderImagePreviews([]);
    });
  }
}

function initSellerLogin() {
  const loginForm = document.getElementById('sellerLoginForm');
  const sellerDashboard = document.getElementById('sellerDashboard');
  const sellerLoginCard = document.getElementById('sellerLoginCard');
  if (!loginForm) return;

  const session = localStorage.getItem(STORAGE_KEYS.sellerSession);
  const isLoggedIn = !!session;

  if (sellerLoginCard) sellerLoginCard.style.display = isLoggedIn ? 'none' : 'block';
  if (sellerDashboard) sellerDashboard.style.display = isLoggedIn ? 'block' : 'none';

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('sellerUsername').value.trim();
    const password = document.getElementById('sellerPassword').value.trim();

    if (username === 'seller' && password === 'monsneakz123') {
      localStorage.setItem(STORAGE_KEYS.sellerSession, username);
      window.location.reload();
    } else {
      alert('Invalid seller credentials. Use: seller / monskeakz123');
    }
  });
}

function renderSellerDashboard() {
  const list = document.getElementById('sellerProductList');
  const sessionBadge = document.getElementById('sellerSessionBadge');
  const form = document.getElementById('sellerProductForm');
  const logoutButton = document.getElementById('logoutSeller');

  if (sessionBadge) {
    const user = localStorage.getItem(STORAGE_KEYS.sellerSession);
    sessionBadge.textContent = user ? `Logged in: ${user}` : 'Not logged in';
  }

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const fileInput = document.getElementById('sellerImage');
      const selectedImages = await readSelectedImages(fileInput);
      const gallery = selectedImages.length ? selectedImages : ['nike/s-l500.webp'];
      const product = {
        id: `seller-${Date.now()}`,
        brand: document.getElementById('sellerBrand').value.trim() || 'Seller Brand',
        category: document.getElementById('sellerCategory').value || 'Nike',
        name: document.getElementById('sellerName').value.trim(),
        price: Number(document.getElementById('sellerPrice').value || 0),
        oldPrice: Number(document.getElementById('sellerOldPrice').value || 0),
        image: gallery[0],
        gallery,
        colors: ['Default'],
        sizes: ['8'],
        sellerAdded: true
      };

      if (!product.name) return;

      const current = getSellerProducts();
      current.push(product);
      saveSellerProducts(current);
      form.reset();
      renderImagePreviews([]);
      renderSellerDashboard();
    });
  }

  if (list) {
    const items = getSellerProducts();
    if (!items.length) {
      list.innerHTML = '<p>No products added yet.</p>';
      return;
    }

    list.innerHTML = items.map((product) => `
      <div class="seller-product-item">
        <div>
          <strong>${product.name}</strong><br />
          <span>${formatPrice(product.price)}</span>
        </div>
        <button class="danger-btn" data-delete-id="${product.id}" type="button">Delete</button>
      </div>
    `).join('');

    list.querySelectorAll('[data-delete-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.deleteId;
        const next = getSellerProducts().filter((item) => item.id !== id);
        saveSellerProducts(next);
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

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const page = document.body.dataset.page;
  if (page === 'home') {
    renderHomePage();
  }

  if (page === 'product') {
    renderProductDetail();
  }

  if (page === 'cart') {
    renderCartPage();
    initCheckoutButton();
  }

  if (page === 'seller') {
    initSellerLogin();
    initSellerImageSelector();
    renderSellerDashboard();
  }

  const brandToggle = document.getElementById('brandToggle');
  const brandMenuItem = document.getElementById('brandMenuItem');
  if (brandToggle && brandMenuItem) {
    brandToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      brandMenuItem.classList.toggle('open');
    });

    document.addEventListener('click', function () {
      brandMenuItem.classList.remove('open');
    });
  }
});

window.MON_SNEAKZ_PRODUCTS = getAllProducts();
window.MON_SNEAKZ_CART = getCart();
window.MON_SNEAKZ = {
  BASE_PRODUCTS,
  getAllProducts,
  getProductById,
  addToCart,
  getCart,
  changeCartQuantity,
  renderHomePage,
  renderProductDetail,
  renderCartPage,
  renderSellerDashboard,
  updateCartBadge,
  formatPrice
};
