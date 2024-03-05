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
