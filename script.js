
const products = [
  { title: "iPhone 14", category: "Mobile", price: 70000 },
  { title: "Samsung Galaxy", category: "Mobile", price: 55000 },
  { title: "MacBook Air", category: "Laptop", price: 95000 },
  { title: "HP Pavilion", category: "Laptop", price: 65000 },
  { title: "Sony Headphones", category: "Accessories", price: 5000 },
  { title: "Bluetooth Speaker", category: "Accessories", price: 3000 }
];

let filteredProducts = [...products];


function renderProducts(data) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  for (const product of data) {
    const div = document.createElement("div");
    div.className = "card";

    // Replace the hardcoded value from h3, p, and p to actual object value.

    div.innerHTML = `
    <h3>${product.title}</h3>  
    <p>${product.category}</p>
    <p class="price">${product.price}</p>
  `;
    container.appendChild(div);
  }

}








function handleSearch() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    filteredProducts = [];
    // Write Search code here. 
    // Searching is based on the title of the product and push into the filteredProducts array.

  
  for (const product of products) {
    if (product.title.toLowerCase().includes(searchValue)) {
      filteredProducts.push(product);
    }
  }
  handleSort();
}





function handleSort() {
  const sortValue = document.getElementById("sortPrice").value;
  // Write Sorting Code here you can use inbuild or and other sorting algorithm. 
  // and pass the sorted data to the renderProducts function.

  for (let i = 0; i < filteredProducts.length - 1; i++) {
    for (let j = i + 1; j < filteredProducts.length; j++) {

      if (
        (sortValue === "asc" && filteredProducts[i].price > filteredProducts[j].price) ||
        (sortValue === "desc" && filteredProducts[i].price < filteredProducts[j].price)
      ) {
        let temp = filteredProducts[i];
        filteredProducts[i] = filteredProducts[j];
        filteredProducts[j] = temp;
      }

    }
  }



  renderProducts(filteredProducts);
}



renderProducts(products);

