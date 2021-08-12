fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    showProducts(data);
  });

function showProducts(products) {
  let productContainer = document.querySelector("#project-container");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
        <div class="product">
            <img src="${product.image}" class="product-image">
            <h4 class="product-title">${product.title}</h4>
            <p class="product-cat">${product.category}</p>
            <p class="product-quan">${product.description}</p>
            <p class="product-cost">${product.price}</p>
    `;
  });
}
