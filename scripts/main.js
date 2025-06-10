document.addEventListener('DOMContentLoaded', () => {
    // Load featured products on the homepage
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        loadFeaturedProducts();
    }

    // Add event listeners for navigation
    setupNavigation();
});

// Load featured products on the homepage
function loadFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    // Get 4 random products
    const featuredProducts = getRandomProducts(products, 4);
    
    // Clear existing content
    productGrid.innerHTML = '';
    
    // Add products to the grid
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card glass-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-type">${typeNames[product.type]}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <a href="#" class="btn">Add to Cart</a>
                <a href="#" class="btn btn-outline">Details</a>
            </div>
        </div>
    `;
    
    return card;
}

// Get random products from array
function getRandomProducts(productsArray, count) {
    const shuffled = [...productsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Setup navigation and interactions
function setupNavigation() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Handle brand slider auto-scroll
    const brandSlider = document.querySelector('.brand-slider');
    if (brandSlider) {
        // This would be replaced with actual slider functionality
        // For now, it's just a placeholder
        console.log('Brand slider initialized');
    }
}