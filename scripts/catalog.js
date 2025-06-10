document.addEventListener('DOMContentLoaded', () => {
    // Initialize the catalog page
    initializeCatalog();
});

// Global variables for catalog state
let currentPage = 1;
const productsPerPage = 9;
let filteredProducts = [...products];
let activeFilters = {
    types: [],
    brands: [],
    minPrice: 0,
    maxPrice: 10000
};

// Initialize the catalog page
function initializeCatalog() {
    // Check URL parameters for pre-filtering
    checkURLParameters();
    
    // Generate filter options
    generateTypeFilters();
    generateBrandFilters();
    
    // Set up price range slider
    setupPriceRangeSlider();
    
    // Set up filter buttons
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    // Set up sorting
    document.getElementById('sort-by').addEventListener('change', sortProducts);
    
    // Display products
    updateProductDisplay();
}

// Check URL parameters for pre-filtering
function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    
    if (typeParam && types.includes(typeParam)) {
        activeFilters.types = [typeParam];
        filteredProducts = products.filter(product => product.type === typeParam);
    }
}

// Generate type filter checkboxes
function generateTypeFilters() {
    const typeFiltersContainer = document.getElementById('type-filters');
    
    types.forEach(type => {
        const typeOption = document.createElement('div');
        typeOption.className = 'filter-option';
        
        const isChecked = activeFilters.types.includes(type);
        
        typeOption.innerHTML = `
            <input type="checkbox" id="type-${type}" name="type" value="${type}" ${isChecked ? 'checked' : ''}>
            <label for="type-${type}">${typeNames[type]}</label>
        `;
        
        typeFiltersContainer.appendChild(typeOption);
    });
}

// Generate brand filter checkboxes
function generateBrandFilters() {
    const brandFiltersContainer = document.getElementById('brand-filters');
    
    brands.forEach(brand => {
        const brandOption = document.createElement('div');
        brandOption.className = 'filter-option';
        
        const isChecked = activeFilters.brands.includes(brand);
        
        brandOption.innerHTML = `
            <input type="checkbox" id="brand-${brand}" name="brand" value="${brand}" ${isChecked ? 'checked' : ''}>
            <label for="brand-${brand}">${brand}</label>
        `;
        
        brandFiltersContainer.appendChild(brandOption);
    });
}

// Set up price range slider
function setupPriceRangeSlider() {
    const priceRangeSlider = document.getElementById('price-range');
    const minPriceDisplay = document.getElementById('min-price');
    const maxPriceDisplay = document.getElementById('max-price');
    
    // Set initial value
    priceRangeSlider.value = activeFilters.maxPrice;
    
    // Update price display on slider change
    priceRangeSlider.addEventListener('input', () => {
        activeFilters.maxPrice = parseInt(priceRangeSlider.value);
        maxPriceDisplay.textContent = `$${activeFilters.maxPrice.toLocaleString()}`;
    });
}

// Apply selected filters
function applyFilters() {
    // Get selected types
    activeFilters.types = [];
    document.querySelectorAll('input[name="type"]:checked').forEach(checkbox => {
        activeFilters.types.push(checkbox.value);
    });
    
    // Get selected brands
    activeFilters.brands = [];
    document.querySelectorAll('input[name="brand"]:checked').forEach(checkbox => {
        activeFilters.brands.push(checkbox.value);
    });
    
    // Filter products
    filteredProducts = products.filter(product => {
        // Filter by type
        const typeMatch = activeFilters.types.length === 0 || activeFilters.types.includes(product.type);
        
        // Filter by brand
        const brandMatch = activeFilters.brands.length === 0 || activeFilters.brands.includes(product.brand);
        
        // Filter by price
        const priceMatch = product.price >= activeFilters.minPrice && product.price <= activeFilters.maxPrice;
        
        return typeMatch && brandMatch && priceMatch;
    });
    
    // Reset to first page and update display
    currentPage = 1;
    updateProductDisplay();
}

// Reset all filters
function resetFilters() {
    // Clear all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price slider
    const priceRangeSlider = document.getElementById('price-range');
    priceRangeSlider.value = 10000;
    document.getElementById('max-price').textContent = '$10,000';
    
    // Reset filter values
    activeFilters = {
        types: [],
        brands: [],
        minPrice: 0,
        maxPrice: 10000
    };
    
    // Reset product list
    filteredProducts = [...products];
    
    // Update display
    currentPage = 1;
    updateProductDisplay();
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sort-by').value;
    
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popularity':
        default:
            // For demonstration, we'll sort by ID as a proxy for popularity
            filteredProducts.sort((a, b) => a.id - b.id);
            break;
    }
    
    updateProductDisplay();
}

// Update product display
function updateProductDisplay() {
    const productGrid = document.getElementById('product-grid');
    const productCount = document.getElementById('product-count');
    const pageNumbers = document.getElementById('page-numbers');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    
    // Update product count
    productCount.textContent = filteredProducts.length;
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Clear product grid
    productGrid.innerHTML = '';
    
    // Display message if no products found
    if (currentProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products-message">
                <h3>No products found</h3>
                <p>Try adjusting your filters or browse all products.</p>
            </div>
        `;
        return;
    }
    
    // Add products to the grid
    currentProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Update pagination
    updatePagination(totalPages);
}

// Update pagination controls
function updatePagination(totalPages) {
    const pageNumbers = document.getElementById('page-numbers');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    
    // Clear page numbers
    pageNumbers.innerHTML = '';
    
    // Generate page numbers (show max 5 pages)
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    if (endPage - startPage < 4 && totalPages > 5) {
        startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = `page-number${i === currentPage ? ' active' : ''}`;
        pageNumber.textContent = i;
        
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            updateProductDisplay();
        });
        
        pageNumbers.appendChild(pageNumber);
    }
    
    // Update navigation buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    // Add event listeners for prev/next buttons
    prevPageBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updateProductDisplay();
        }
    };
    
    nextPageBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateProductDisplay();
        }
    };
}

// Create product card HTML (reused from main.js)
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