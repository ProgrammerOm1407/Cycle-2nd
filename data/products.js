// Sample product data
const products = [
    {
        id: 1,
        name: "Mountain Explorer X1",
        brand: "Trek",
        type: "mountain",
        price: 1299.99,
        image: "images/mountain1.jpg",
        description: "A versatile mountain bike for all terrains.",
        features: ["Aluminum frame", "29-inch wheels", "Hydraulic disc brakes", "Front suspension"],
        inStock: true
    },
    {
        id: 2,
        name: "Road Master Pro",
        brand: "Specialized",
        type: "road",
        price: 1899.99,
        image: "images/road1.jpg",
        description: "Professional road bike for serious cyclists.",
        features: ["Carbon fiber frame", "700c wheels", "11-speed Shimano groupset", "Aerodynamic design"],
        inStock: true
    },
    {
        id: 3,
        name: "City Cruiser Deluxe",
        brand: "Schwinn",
        type: "city",
        price: 799.99,
        image: "images/city1.jpg",
        description: "Comfortable city bike for urban commuting.",
        features: ["Steel frame", "7-speed gears", "Fenders", "Rear rack"],
        inStock: true
    },
    {
        id: 4,
        name: "E-Rider Turbo",
        brand: "Giant",
        type: "electric",
        price: 2499.99,
        image: "images/electric1.jpg",
        description: "Powerful electric bike for effortless riding.",
        features: ["Integrated battery", "500W motor", "Range of 60 miles", "Pedal assist"],
        inStock: false
    },
    {
        id: 5,
        name: "Trail Blazer Pro",
        brand: "Trek",
        type: "mountain",
        price: 1599.99,
        image: "images/mountain2.jpg",
        description: "Professional mountain bike for challenging trails.",
        features: ["Full suspension", "Tubeless tires", "Dropper post", "Lightweight design"],
        inStock: true
    },
    {
        id: 6,
        name: "Speedster Elite",
        brand: "Cannondale",
        type: "road",
        price: 2199.99,
        image: "images/road2.jpg",
        description: "Elite road bike for competitive racing.",
        features: ["Carbon frame and fork", "Electronic shifting", "Aero wheels", "Race geometry"],
        inStock: true
    },
    {
        id: 7,
        name: "Urban Commuter",
        brand: "Giant",
        type: "city",
        price: 849.99,
        image: "images/city2.jpg",
        description: "Practical bike for daily city commuting.",
        features: ["Aluminum frame", "8-speed internal hub", "Integrated lights", "Comfort saddle"],
        inStock: true
    },
    {
        id: 8,
        name: "E-Mountain Sport",
        brand: "Specialized",
        type: "electric",
        price: 3299.99,
        image: "images/electric2.jpg",
        description: "Electric mountain bike for off-road adventures.",
        features: ["Full suspension", "750W motor", "Integrated display", "50-mile range"],
        inStock: true
    },
    {
        id: 9,
        name: "Gravel Explorer",
        brand: "Cannondale",
        type: "road",
        price: 1799.99,
        image: "images/gravel1.jpg",
        description: "Versatile gravel bike for mixed terrain riding.",
        features: ["Carbon frame", "Gravel-specific geometry", "Disc brakes", "Wide tire clearance"],
        inStock: true
    },
    {
        id: 10,
        name: "Kids Mountain Rider",
        brand: "Trek",
        type: "mountain",
        price: 499.99,
        image: "images/kids1.jpg",
        description: "Mountain bike designed for young riders.",
        features: ["Aluminum frame", "24-inch wheels", "Easy-to-use gears", "Lightweight design"],
        inStock: true
    },
    {
        id: 11,
        name: "Racing Aero Pro",
        brand: "Specialized",
        type: "road",
        price: 2699.99,
        image: "images/road3.jpg",
        description: "Aerodynamic road bike for time trials and racing.",
        features: ["Aero carbon frame", "Deep section wheels", "Electronic groupset", "Integrated cockpit"],
        inStock: false
    },
    {
        id: 12,
        name: "Folding City Bike",
        brand: "Brompton",
        type: "city",
        price: 1299.99,
        image: "images/folding1.jpg",
        description: "Compact folding bike for urban environments.",
        features: ["Folding design", "3-speed hub", "Mudguards", "Easy transport"],
        inStock: true
    },
    {
        id: 13,
        name: "E-City Glider",
        brand: "Giant",
        type: "electric",
        price: 1999.99,
        image: "images/electric3.jpg",
        description: "Sleek electric city bike for daily commutes.",
        features: ["Integrated battery", "350W motor", "Step-through frame", "Automatic lights"],
        inStock: true
    },
    {
        id: 14,
        name: "Downhill Destroyer",
        brand: "Santa Cruz",
        type: "mountain",
        price: 3499.99,
        image: "images/mountain3.jpg",
        description: "Professional downhill mountain bike for extreme riding.",
        features: ["Full suspension", "Downhill-specific geometry", "Heavy-duty components", "200mm travel"],
        inStock: true
    },
    {
        id: 15,
        name: "Touring Master",
        brand: "Surly",
        type: "road",
        price: 1599.99,
        image: "images/touring1.jpg",
        description: "Long-distance touring bike for adventure cycling.",
        features: ["Steel frame", "Front and rear racks", "Bar-end shifters", "Comfortable geometry"],
        inStock: true
    },
    {
        id: 16,
        name: "Cargo Hauler",
        brand: "Yuba",
        type: "city",
        price: 1899.99,
        image: "images/cargo1.jpg",
        description: "Cargo bike for transporting goods and children.",
        features: ["Extended frame", "Heavy-duty rear rack", "Kickstand", "Low center of gravity"],
        inStock: true
    },
    {
        id: 17,
        name: "E-Folder Compact",
        brand: "Brompton",
        type: "electric",
        price: 2899.99,
        image: "images/folding2.jpg",
        description: "Electric folding bike for mixed-mode commuting.",
        features: ["Folding design", "250W hub motor", "Detachable battery", "6-speed gearing"],
        inStock: false
    },
    {
        id: 18,
        name: "Fat Tire Beast",
        brand: "Salsa",
        type: "mountain",
        price: 1799.99,
        image: "images/fat1.jpg",
        description: "Fat tire bike for snow and sand riding.",
        features: ["4.8-inch tires", "Aluminum frame", "Wide rims", "Winter-ready components"],
        inStock: true
    },
    {
        id: 19,
        name: "Triathlon Special",
        brand: "Cervelo",
        type: "road",
        price: 3299.99,
        image: "images/tri1.jpg",
        description: "Specialized triathlon bike for competitions.",
        features: ["Carbon frame", "Aero bars", "Race-ready wheels", "Optimized geometry"],
        inStock: true
    },
    {
        id: 20,
        name: "Classic Cruiser",
        brand: "Schwinn",
        type: "city",
        price: 649.99,
        image: "images/cruiser1.jpg",
        description: "Classic beach cruiser for leisurely rides.",
        features: ["Steel frame", "Single-speed", "Wide saddle", "Swept-back handlebars"],
        inStock: true
    }
];

// Extract unique brands and types for filters
const brands = [...new Set(products.map(product => product.brand))];
const types = [...new Set(products.map(product => product.type))];

// Type names mapping for display purposes
const typeNames = {
    mountain: "Mountain Bikes",
    road: "Road Bikes",
    city: "City Bikes",
    electric: "Electric Bikes"
};