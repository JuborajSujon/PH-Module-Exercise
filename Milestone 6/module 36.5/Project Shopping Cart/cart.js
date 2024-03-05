const productField = document.getElementById("product-name");
const quantityField = document.getElementById("product-quantity");
const ul = document.getElementById("product-container");

const addProduct = () => {
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";

  // call product container handler
  displayProduct(product, quantity);

  // call save product to local storage handler
  saveProductToLocalStorage(product, quantity);
};

// AppendChild product continer handler
const displayProduct = (product, quantity) => {
  const li = createLiElement(product, quantity);
  ul.appendChild(li);
};

// Create li element handler
const createLiElement = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  return li;
};

// get product from local storage handler
const getProductsFromLocalStorage = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// save product to local storage handler
const saveProductToLocalStorage = (product, quantity) => {
  // get product from local storage
  const cart = getProductsFromLocalStorage();
  // add product to cart
  cart[product] = quantity;
  // stringify cart object by json stringify method
  const cartStringified = JSON.stringify(cart);
  // set cart to local storage
  localStorage.setItem("cart", cartStringified);
};

// get products from local storage
const displayProductFromLocalStorage = () => {
  const products = getProductsFromLocalStorage();
  // loop through products object
  for (const product in products) {
    // assign quantity from products object
    const quantity = products[product];
    // call display product
    displayProduct(product, quantity);
  }
};

// call display product at first time loading
displayProductFromLocalStorage();
