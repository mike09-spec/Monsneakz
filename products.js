const MON_SNEAKZ_PRODUCTS = [
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
    sizes: ['6.5', '7', '8', '9', '10', '11']
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
    sizes: ['6.5', '7', '8', '9', '10', '11']
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
    sizes: ['6', '7', '8', '9', '10', '11']
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
    sizes: ['7', '8', '9', '10', '11', '12']
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
    sizes: ['6', '7', '8', '9', '10', '11']
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
    sizes: ['5', '6', '7', '8', '9', '10']
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
    sizes: ['6.5', '7', '8', '9', '10', '11']
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
    sizes: ['7', '8', '9', '10', '11', '12']
  }
];

window.MON_SNEAKZ_PRODUCTS = MON_SNEAKZ_PRODUCTS;

function formatPrice(value) {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' $';
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

function renderProductGrid() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = MON_SNEAKZ_PRODUCTS.map(createProductCard).join('');
}

function renderProductDetail() {
  const detail = document.getElementById('productDetail');
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');
  const selectedProduct = MON_SNEAKZ_PRODUCTS.find((product) => product.id === requestedId) || MON_SNEAKZ_PRODUCTS[0];

  const mainImage = document.getElementById('main-product-image');
  const title = document.getElementById('productTitle');
  const price = document.getElementById('productPrice');
  const oldPrice = document.getElementById('productOldPrice');
  const gallery = document.getElementById('productGallery');
  const relatedGrid = document.getElementById('relatedGrid');

  if (mainImage) {
    mainImage.src = selectedProduct.gallery[0];
    mainImage.alt = selectedProduct.name;
  }

  if (title) title.textContent = selectedProduct.name;
  if (price) price.textContent = formatPrice(selectedProduct.price);
  if (oldPrice) oldPrice.textContent = formatPrice(selectedProduct.oldPrice);

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
    const relatedProducts = MON_SNEAKZ_PRODUCTS.filter((product) => product.id !== selectedProduct.id).slice(0, 4);
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
}

function initResponsiveControls() {
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

  const colorButtons = document.querySelectorAll('.color-pill');
  const sizeButtons = document.querySelectorAll('.size-pill');
  if (colorButtons.length) {
    colorButtons.forEach((button) => {
      button.addEventListener('click', () => {
        colorButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  if (sizeButtons.length) {
    sizeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        sizeButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  renderProductDetail();
  initResponsiveControls();
});
