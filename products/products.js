let products = [];
let cart = [];
console.log(cart);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
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
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>    
    `;
  });
}

function showCart(productItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (productItems.length > 0) {
    productItems.map((productItem) => {
      cartContainer.innerHTML += `
        <div class="product">
            <img src="${productItem.image}" class="product-image">
            <h4 class="product-title">${productItem.title}</h4>
            <p class="product-cat">${productItem.category}</p>
            <p class="product-quan">${productItem.description}</p>
            <p class="product-cost">${productItem.price}</p>
        </div>    
    `;
    });
    let sumPrice = productItems.reduce((total, item) => total + item.price, 0);
    console.log(sumPrice);
    cartContainer.innerHTML += `<h3>The Price will be: ${sumPrice}</h3>`;
  } else {
    cartContainer.innerHTML = "<h3>Cart is empty</h3>";
  }
}

function addToCart(id) {
  let product = products.find((item) => {
    return item.id == id;
  });
  console.log(product);
  cart.push(product);

  console.log("These items are in your Cart: ", cart);
  showCart(cart);
}

function searchProduct() {
  let searchItem = document.querySelector("#searchItem").value;
  console.log(searchItem);

  let foundProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchItem.toLowerCase())
  );
  console.log(foundProducts);

  if (foundProducts.length == 0) {
    document.querySelector("#project-container").innerHTML =
      "<h3>Unfortunately we dont have the product you are searching for</h3>";
  } else {
    showProducts(foundProducts);
  }
}

function openCart() {
  document.querySelector("#cart").classList.toggle("active");
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
