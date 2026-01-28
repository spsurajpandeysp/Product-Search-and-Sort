# Product Search and Price Sort

## Problem Statement

You are given a list of products stored as an **array of objects**.  
Each product object contains the following properties:

- `title` (string)
- `category` (string)
- `price` (number)

A user interface is already provided with:
- A **search input box** and a **search button**
- A **price sorting dropdown** with the following options:
  - Low to High (Ascending)
  - High to Low (Descending)
- A function `renderProducts(data)` that is responsible for displaying the products on the UI

---

## Your Task

Implement the JavaScript logic for **searching and sorting products** by completing the following two functions:

### 1. `handleSearch()`
- Filter the product list **only based on the product title**.
- The search must be **case-insensitive**.
- If the search input is empty, display **all products**.
- After filtering, apply the currently selected price sorting (if any).

### 2. `handleSort()`
- Sort the currently displayed products based on their `price`.
- If **Ascending** is selected, sort products from **low to high price**.
- If **Descending** is selected, sort products from **high to low price**.
- If no sorting option is selected, maintain the existing order.

---

## Constraints

- Do not modify the original products array.
- Use **JavaScript (ES6)** only.
- Do not write or modify HTML or CSS.
- You only need to implement the logic for `handleSearch()` and `handleSort()`.

---

## Expected Behavior

- When the page loads, **all products should be displayed**.
- Searching should filter products **by title only**.
- Sorting should work on the **current search results**.
- If no search and no sort is applied, all products should be shown.

---

## Example Product Data

```js
const products = [
  { title: "iPhone 14", category: "Mobile", price: 70000 },
  { title: "Samsung Galaxy", category: "Mobile", price: 55000 },
  { title: "MacBook Air", category: "Laptop", price: 95000 }
];
