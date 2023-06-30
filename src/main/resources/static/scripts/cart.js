const cartItems = JSON.parse(localStorage.getItem("cart"));
renderCart();
function renderCart() {
  let cartHTML = "";
  cartItems.forEach((cartItem, index) => {
    cartHTML += `
        <div class="cart-item">
            <img src="${cartItem.image}" alt="cart-item-image">
            <div class="product-info">
                <div class="name-price">
                    <span class="product-name">${cartItem.productName}</span>
                    <span class="product-price">₹${cartItem.price}</span>
                </div>
                <div class="quantity">
                    <label id="quantity-label" for="quantity">quantity:</label>
                    <input class="update" type="number" value="${cartItem.quantity}" disabled>
                    <button class="update-btn">Update</button>
                    <button onClick="deleteCartItem(${index})" class="delete-btn">Delete</button>
                </div>
            </div>
        </div>`;
  });
  document.querySelector(".js-cart-items").innerHTML = cartHTML;

  // Attach event listeners to update buttons
  const updateButtons = document.querySelectorAll(".update-btn");
  updateButtons.forEach((updateBtn, index) => {
    updateBtn.addEventListener("click", () => {
      const quantityInput = updateBtn.parentNode.querySelector(".update");
      if (updateBtn.innerHTML === "Update") {
        quantityInput.disabled = false;
        updateBtn.innerHTML = "Save";
        quantityInput.classList.add("update-clicked");
      } else {
        const updatedQuantity = parseInt(quantityInput.value);
        if (updatedQuantity === 0 || updatedQuantity < 0) {
          deleteCartItem(index);
        } else {
          cartItems[index].quantity = updatedQuantity;
          localStorage.setItem("cart", JSON.stringify(cartItems));
        }
        quantityInput.disabled = true;
        updateBtn.innerHTML = "Update";
        quantityInput.classList.remove("update-clicked");
      }

      calculateCost();
    });
  });
  calculateCost();
  const noItems = document.querySelector(".noItems");
  if (cartItems.length > 0) {
    noItems.style.display = "none";
  } else {
    noItems.style.display = "flex";
  }
}

function deleteCartItem(index) {
  cartItems.splice(index, 1);
  renderCart();
  calculateCost();
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function calculateCost() {
  const itemsCount = document.querySelector("#item-count-lable");
  const itemPrice = document.querySelector("#item-price");
  const tax = document.querySelector("#tax-amount");
  const total = document.querySelector("#total-amount");
  const deliveryCharge = document.querySelector("#delivery-charge");
  const checkoutLable = document.querySelector("#checkout-lable");
  let Cost = 0;
  let quantity = 0;
  let totalCost = 0;
  let taxAmount = 0;
  cartItems.forEach((item, index) => {
    const itemQuantity = parseInt(item.quantity);
    const price = parseInt(item.price);
    const itemCost = itemQuantity * price;
    Cost += itemCost;
    quantity += item.quantity;
  });
  taxAmount = Cost * 0.05;
  totalCost = quantity > 0 ? taxAmount + Cost + 40 : taxAmount + Cost;

  checkoutLable.innerHTML = `<Strong>Checkout (</Strong>${quantity} items<Strong>)</Strong>`;
  itemsCount.innerHTML = `items(${quantity})`;
  itemPrice.innerHTML = `₹${Cost}`;
  tax.innerHTML = `₹${Math.floor(taxAmount)}`;
  total.innerHTML = `₹${Math.floor(totalCost)}`;
  deliveryCharge.innerHTML = totalCost !== 0 ? `₹40` : `₹0`;

  return totalCost;
}

// payment button
const orderSummary = document.querySelector('.order-info');
paypal
  .Buttons({
    style: {
      color: "gold",
      shape: "pill",
    },
    createOrder: function (data, actions) {
      orderSummary.style.height = 'auto';
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: Math.floor(calculateCost() / 82),
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {

        orderSummary.style.height = 'auto';
        window.location.href = "paymentSuccess.html";
        localStorage.setItem("cart", JSON.stringify([]));
      });
    },
    onCancel: function (data) {
      window.location.href = "paymentCancelled.html";
    },
  })
  .render("#paypal-buttons");




