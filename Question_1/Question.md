# TypeScript Hands-on Practice — Product Catalog

**Level:** Intermediate  
**Focus:** Practical TypeScript, type safety, arrays, functions, union types, and object grouping  
**Format:** Interview-style challenges — one task at a time

## Challenge 1 — Product Catalog

You're building the product module for a full-stack e-commerce application.

Implement a small product catalog in TypeScript. Your solution should demonstrate proper type safety and clean code.

### Requirements

1. Define the necessary types for a product.
2. Implement different functions whihch returns 
3. Handle optional product information appropriately.
4. Demonstrate your implementation with sample data.

### Constraints

- Avoid `any`.
- Let TypeScript help you catch errors at compile time.
- Choose your own implementation approach; no starter code is provided.

### Follow-up 1 — Restricting Categories

The category parameter currently accepts any string. Redesign the types so that `getProductsByCategory()` accepts only valid product categories, while keeping the implementation type-safe.

Consider whether a union type or another TypeScript feature would help.

---

## Challenge 2 — Most Expensive Product in a Category

Implement a function that returns the most expensive product in a given category.

### Requirements

- Accept a `Category` parameter.
- Return the most expensive matching `Product`.
- Return `null` if the category has no products.
- Demonstrate the function using your product data.

### Follow-up 2 — Improve the Algorithm

Review how you initialize the maximum price. Does initializing it to `0` make any assumptions about valid product prices? Revise the function to avoid relying on every product having a price greater than zero.

**Practice constraint:** Keep the loop-based approach for this revision rather than switching immediately to a built-in array method.

---

## Challenge 3 — Group Products by Category

Imagine your product catalog grows to thousands of products.

Implement a function that groups all products by category and returns a `Map` where each key is a `Category` and each value is an array of matching `Product` objects.

### Requirements

- Group products by their category.
- Use TypeScript's type system to express the key and value types correctly.
- Demonstrate the function using your existing product data.
- Choose your own implementation approach.

### Reflection

Compare `Map<Category, Product[]>` with `Record<Category, Product[]>`. Both can represent grouped data, but they are different data structures. Consider how their APIs, initialization, and key handling differ.

---

## Concepts Practiced

- Object and type definitions
- Optional properties
- Function parameter and return types
- Arrays: `filter()`, `find()`, and iteration
- String literal union types
- Nullable return values
- Type-safe indexing
- `Record` versus `Map`