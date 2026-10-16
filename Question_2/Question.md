# TypeScript Hands-on Practice — Generics and Type Safety

**Level:** Intermediate  
**Focus:** Generics, type constraints, arrays, `keyof`, indexed access types, function return types, and runtime validation  
**Format:** Interview-style challenges — one task at a time

## Challenge 2 — Generic Array Element Retrieval

You're building a reusable utility for a TypeScript application. Implement a function named `getElement()` that returns an element at a given index from an array.

### Requirements

1. Make the function generic so it works with arrays containing different element types.
2. Accept an array and an index as parameters.
3. Return the element at the requested index.
4. Handle a missing array and an invalid index appropriately.
5. Demonstrate the function with arrays containing different types, such as numbers, strings, and booleans.

### Constraints

- Avoid `any`.
- Preserve the array's element type in the return type.
- Choose an appropriate way to represent or handle invalid input.
- Keep the implementation type-safe.

### Follow-up 2 — Keep Errors Separate from Return Values

Review your function's return type. If the function throws an error when the array is missing or the index is invalid, does the return type also need to include an error-related type such as `never` or a string?

Revise the function's signature so its return type accurately represents successful results.

---

## Challenge 3 — Generic Object Property Retrieval

You're implementing a reusable utility that retrieves a property value from an object by its key.

Implement a generic function named `getProperty()` that accepts an object and one of its keys, then returns the corresponding property value.

### Requirements

- Accept an object and a key as parameters.
- Restrict the key to valid keys of the supplied object.
- Return the property's correct type rather than a broad type such as `any`.
- Demonstrate the function with an object containing properties such as `id`, `name`, and `age`.
- Show that using a valid key returns the corresponding value type.

### Constraints

- Avoid `any`.
- Use TypeScript's type system to connect the key parameter to the object's properties.
- Choose your own implementation approach.

### Follow-up 3 — Compile-Time Safety vs. Runtime Validation

Consider whether a key-existence check such as `key in obj` is necessary when the key is already constrained to `keyof T`.

Explain the difference between TypeScript checking a key at compile time and validating data at runtime. If you keep a runtime `in` check, consider what constraint the generic object type needs.

### Reflection

Think about how `keyof T` restricts the allowed keys and how `T[K]` represents the value type associated with a particular key.

---

## Challenge 4 — Generic `getFirstElement`

Implement a generic function named `getFirstElement()` that accepts an array and returns its first element.

### Requirements

- The function must work with arrays of different element types.
- Preserve the element type in the return type.
- Return `undefined` when the array is empty.
- Demonstrate the function with a number array, a string array, and an empty array.

### Constraints

- Avoid `any`.
- Do not unnecessarily restrict the generic type if the function does not need that restriction.
- Keep the implementation type-safe.

### Follow-up 4 — Remove Unnecessary Restrictions

Your first version may constrain the generic type to `number | string` and use `typeof` checks. Revise the function so it supports **any element type**, including objects, without using `any`, `typeof` checks, or type assertions.

Demonstrate it with:
- A number array
- A string array
- An array of objects
- An empty array

Keep the same behavior for empty arrays.

### Reflection

Think about what the generic type parameter represents, when a constraint such as `T extends number | string` is useful, and why a simple `T[]` can support more element types.

---

## Concepts Practiced

- Generic functions and type parameters
- Generic constraints
- Array indexing and invalid indexes
- Function parameter and return types
- `undefined`, `null`, and thrown errors
- `keyof` and indexed access types (`T[K]`)
- Compile-time type checking versus runtime validation
- Object property access
- Type-safe handling of empty arrays
- Avoiding unnecessary type restrictions
