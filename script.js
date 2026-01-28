
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

  data.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p class="price">₹${product.price}</p>
    `;
    container.appendChild(div);
  });
}



renderProducts(products);



// Write Search code here
function handleSearch() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  filteredProducts = [];

  for (const product of products) {
    if (product.title.toLowerCase().includes(searchValue)) {
      filteredProducts.push(product);
    }
  }

  handleSort();
}




// Write Sorting Code here
function handleSort() {
  const sortValue = document.getElementById("sortPrice").value;

  let dataToShow = [];
  for (const product of filteredProducts) {
    dataToShow.push(product);
  }

  for (let i = 0; i < dataToShow.length - 1; i++) {
    for (let j = i + 1; j < dataToShow.length; j++) {

      if (
        (sortValue === "asc" && dataToShow[i].price > dataToShow[j].price) ||
        (sortValue === "desc" && dataToShow[i].price < dataToShow[j].price)
      ) {
        let temp = dataToShow[i];
        dataToShow[i] = dataToShow[j];
        dataToShow[j] = temp;
      }

    }
  }

  renderProducts(dataToShow);
}
