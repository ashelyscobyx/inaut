// Sample category data structure
const categories = [
  { id: 1, name: 'Electronics', parent: null },
  { id: 2, name: 'Computers', parent: 1 },
  { id: 3, name: 'Laptops', parent: 2 },
  { id: 4, name: 'Smartphones', parent: 1 },
  { id: 5, name: 'Books', parent: null },
  { id: 6, name: 'Fiction', parent: 5 },
  { id: 7, name: 'Mystery', parent: 6 }
];

function isSingleSubcategory(category) {
  const children = categories.filter(c => c.parent === category.id);
  return children.length === 1;
}

// Usage example
const category = { id: 2, name: 'Computers', parent: 1 };
console.log(isSingleSubcategory(category)); // Output: true
