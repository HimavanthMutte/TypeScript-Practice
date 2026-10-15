"use strict";
let products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", description: "High-performance laptop for work and play" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", description: "Latest model smartphone with advanced features" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
    { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances", description: "Automatic coffee maker for daily use" },
    { id: 5, name: "Blender", price: 29.99, category: "Home Appliances" }
];
function getProductsByCategory(category) {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
}
function getProductById(id) {
    return products.find(product => product.id === id);
}
function getProductsWithDescription() {
    return products.filter(product => product.description !== undefined);
}
console.log(getProductsByCategory("Electronics"));
console.log(getProductById(3));
console.log(getProductsWithDescription());
