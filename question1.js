// Task 1: Create an array of products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" },
    { name: "Airpods", price: 100.00, description: "Wireless and high quality audio" }
];

// Task 2: Function to display product information dynamically
function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear existing content

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Task 3: Add event listener to display products when page loads
document.addEventListener("DOMContentLoaded", displayProducts);

// Task 4: Add event listener to refresh button
document.getElementById("refreshBtn").addEventListener("click", displayProducts);
