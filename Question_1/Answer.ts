type Product = {
    id: number;
    name: string;
    price: number;
    category: Category;
    description?: string;
}

type Category = "Electronics" | "Home Appliances";

let products: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", description: "High-performance laptop for work and play" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", description: "Latest model smartphone with advanced features" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
    { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances", description: "Automatic coffee maker for daily use" },
    { id: 5, name: "Blender", price: 29.99, category: "Home Appliances" }
];

function getProductsByCategory(category: Category):Product[]{
    return products.filter(product=>product.category.toLowerCase() === category.toLowerCase());
}

function getProductById(id: number): Product | undefined {
    return products.find(product => product.id === id);
}

function getProductsWithDescription(): Product[] {
    return products.filter(product => product.description !== undefined);
}

function getMostExpensiveProduct(category: Category): Product | null {
    let product: Product | null = null;
    let maxPrice = 0;
    for (let i=0; i<products.length; i++){
        if (products[i].category === category && products[i].price > maxPrice){
            maxPrice = products[i].price;
            product = products[i];
        }
    }
    return product;
}

function groupProductsByCategory(): Record<Category, Product[]> {
    const groupedProducts: Record<Category, Product[]> = {
        "Electronics": [],
        "Home Appliances": []
    };

    for (const product of products) {
        groupedProducts[product.category].push(product);
    }

    return groupedProducts;
}

function getFirstElement<T extends number | string>( arr: T[]): T | undefined {
    if (arr) {
        return arr[0];
    }
}

console.log(getProductsByCategory("Electronics"));

console.log(getProductById(3));

console.log(getProductsWithDescription());

console.log(getMostExpensiveProduct("Electronics"));

export {};