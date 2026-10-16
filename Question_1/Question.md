# TypeScript Hands-on Practice — Product Catalog

**Level:** Intermediate  
**Focus:** Practical TypeScript, type safety, arrays, functions, union types, object grouping, and generics  
**Format:** Interview-style challenges — one task at a time

## Challenge 1 — Product Catalog

You're building the product module for a full-stack e-commerce application.

Implement a small product catalog in TypeScript. Your solution should demonstrate proper type safety and clean code.

### Requirements

1. Define the necessary types for a product.
2. Implement a function that returns all products matching a given condition.
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

## Challenge 4 — Generic `getFirstElement`

Implement a generic function named `getFirstElement` that accepts an array and returns its first element.

### Requirements

- The function must work with arrays of different element types.
- Preserve the element type in the return type.
- Do not use `any`.
- Return `undefined` when the array is empty.
- Demonstrate the function with at least two different array types.

### Follow-up 4 — Remove Unnecessary Restrictions

Revise the function so it works with **any element type**, including objects, without using `any`, `typeof` checks, or type assertions.

Demonstrate it with:
- A number array
- A string array
- An array of objects

Keep the same behavior for empty arrays.

### Reflection

Think about what the generic type parameter represents, when a constraint such as `T extends number | string` is useful, and why a simple generic `T[]` can support more cases.

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
- Generic type parameters and constraints
