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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
