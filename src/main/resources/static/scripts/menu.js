document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".menu-category");
  var categoryHeader = document.querySelectorAll(".category-header");

  var scrollUpOffset = 100;

  menuItems.forEach(function (menuItem, index) {
    menuItem.addEventListener("click", function () {
      var target = this.getAttribute("data-target");
      var targetHeader = document.getElementById(target);
      var targetOffset = targetHeader.offsetTop - scrollUpOffset;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    var currentPosition = window.scrollY;

    categoryHeader.forEach(function (header, index) {
      var headerOffset = header.offsetTop - 100;

      if (currentPosition >= headerOffset - scrollUpOffset) {
        menuItems.forEach(function (menuItem) {
          menuItem.classList.remove("active");
        });

        menuItems[index].classList.add("active");
      }
    });
  });
});

// looping through the items array to display the items in menu page

// adding category 1 elements in menu page

function addToCategory1() {
  let itemsHTML = "";
  menuItems.forEach((item, index) => {
    if (item.category === "donut combos") {
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button data-item-price="${item.price}" data-item-img="${item.image}" data-item-name="${item.name}" id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
    }
  });
  document.querySelector(".js-donut-combos").innerHTML = itemsHTML;
}

// adding category 2 elements in menu page

function addToCategory2() {
  let itemsHTML = "";
  menuItems.forEach((item, index) => {
    if (item.category === "sandwiches and bakery") {
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button data-item-price="${item.price}" data-item-img="${item.image}" data-item-name="${item.name}" id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
    }
  });
  document.querySelector(".js-sandwiches-and-bakery").innerHTML = itemsHTML;
}

// adding category 3 elements in menu page

function addToCategory3() {
  let itemsHTML = "";
  menuItems.forEach((item, index) => {
    if (item.category === "donuts") {
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button data-item-price="${item.price}" data-item-img="${item.image}" data-item-name="${item.name}" id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
    }
  });
  document.querySelector(".js-donuts").innerHTML = itemsHTML;
}

// adding category 4 elements in menu page

function addToCategory4() {
  let itemsHTML = "";
  menuItems.forEach((item, index) => {
    if (item.category === "hot beverages") {
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button data-item-price="${item.price}" data-item-img="${item.image}" data-item-name="${item.name}" id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
    }
  });
  document.querySelector(".js-hot-beverages").innerHTML = itemsHTML;
}

// adding category 5 elements in menu page

function addToCategory5() {
  let itemsHTML = "";
  menuItems.forEach((item, index) => {
    if (item.category === "cold beverages") {
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span data-item-price="item-price" class="product-price">₹${item.price}</span>
                      </div>
                      <button data-item-price="${item.price}" data-item-img="${item.image}" data-item-name="${item.name}" id="img1-add-btn" class="add-btn add-to-cart-btn">ADD</button>
                  </div>`;
    }
  });
  document.querySelector(".js-cold-beverages").innerHTML = itemsHTML;
}

addToCategory1();
addToCategory2();
addToCategory3();
addToCategory4();
addToCategory5();

// Adding event listener to search bar
const inputItem = document.querySelector(".input-field");
const MenuItemsList = document.querySelectorAll(".category-element");
const productNames = document.querySelectorAll(".product-name");
let categoryCounts = {}; // Object to store category counts

inputItem.addEventListener("input", searchItem);

// Search items in menu
function searchItem() {
  const searchItem = inputItem.value.toLowerCase();
  categoryCounts = {}; // Reset category counts
  productNames.forEach((productName, index) => {
    const textContent = productName.textContent.toLowerCase();
    const category = MenuItemsList[index].getAttribute("data-category");

    if (textContent.includes(searchItem)) {
      MenuItemsList[index].style.display = "block";

      // Increment category count
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    } else {
      MenuItemsList[index].style.display = "none";
    }
  });
  updateCategoryCount(categoryCounts);
  hideEmptyCategoryDivs();
  console.log(categoryCounts); // Output category counts
}

// update the count of items in the menu

function updateCategoryCount(categoryCounts) {
  const categoryOneCount = document.querySelector("#donut-combos-count");
  const categoryTwoCount = document.querySelector(
    "#sandwiches-and-bakery-count"
  );
  const categoryThreeCount = document.querySelector("#donuts-count");
  const categoryFourCount = document.querySelector("#hot-beverages-count");
  const categoryFiveCount = document.querySelector("#cold-beverages-count");

  if (categoryCounts.hasOwnProperty("donut")) {
    categoryOneCount.innerText = categoryCounts["donut"];
  } else {
    categoryOneCount.innerText = "0";
  }

  if (categoryCounts.hasOwnProperty("sandwiches")) {
    categoryTwoCount.innerText = categoryCounts["sandwiches"];
  } else {
    categoryTwoCount.innerText = "0";
  }

  if (categoryCounts.hasOwnProperty("donuts")) {
    categoryThreeCount.innerText = categoryCounts["donuts"];
  } else {
    categoryThreeCount.innerText = "0";
  }

  if (categoryCounts.hasOwnProperty("hot")) {
    categoryFourCount.innerText = categoryCounts["hot"];
  } else {
    categoryFourCount.innerText = "0";
  }

  if (categoryCounts.hasOwnProperty("cold")) {
    categoryFiveCount.innerText = categoryCounts["cold"];
  } else {
    categoryFiveCount.innerText = "0";
  }
}

function hideEmptyCategoryDivs() {
  const parentDivs = document.querySelectorAll(".category-elements");
  const noItemsMessage = document.querySelector(".no-items");

  let visibleParentDivs = 0;

  parentDivs.forEach((parentDiv) => {
    const categoryElements = parentDiv.querySelectorAll(".category-element");
    const visibleCategoryElements = Array.from(categoryElements).filter(
      (element) => {
        return element.style.display !== "none";
      }
    );

    if (visibleCategoryElements.length > 0) {
      visibleParentDivs++;
      parentDiv.parentNode.style.display = "block";
    } else {
      parentDiv.parentNode.style.display = "none";
    }
  });

  if (visibleParentDivs === 0) {
    noItemsMessage.style.display = "block";
  } else {
    noItemsMessage.style.display = "none";
  }
}

//Adding items to cart
const cartCount = document.querySelector(".cart-count");
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelectorAll(".add-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    button.innerHTML = "ADDED";
    const addedItem = button.dataset.itemName;
    const addedItemImage = button.dataset.itemImg;
    const addedItemPrice = button.dataset.itemPrice;
    let matchingItem;
    cartItems.forEach((item) => {
      if (addedItem === item.productName) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cartItems.push({
        productName: addedItem,
        quantity: 1,
        image: addedItemImage,
        price: addedItemPrice,
      });
    }
    updateCartQuantity();
  });
});
window.addEventListener("load", updateCartQuantity());
function updateCartQuantity() {
  const cartCount = document.querySelector(".cart-count");
  let quantity = 0;
  cartItems.forEach((item) => {
    quantity += item.quantity;
  });
  saveCartItems();
  cartCount.innerHTML = quantity;
}
function saveCartItems() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
const cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// Login and signup part

const profile = document.querySelector(".profile");
const profileBtn = profile.querySelector("a");
const cancleBtn = document.querySelector(".close-btn");
const loginPopUp = document.querySelector(".js-login-active");
const loginStatus = loginPopUp.getAttribute("data-status");
const loginBtn = document.querySelector(".login");
const signUpBtn = document.querySelector(".signup");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const loginActive = document.querySelector(".login-active");

cancleBtn.addEventListener("click", () => {
  toggleLogin();
});

profileBtn.addEventListener("click", () => {
  toggleLogin();
});

function toggleLogin() {
  loginPopUp.classList.toggle("js-login-active");
}

loginBtn.addEventListener("click", () => {
  toggleBtn("login");
});
signUpBtn.addEventListener("click", () => {
  toggleBtn("signup");
});

function toggleBtn(button) {
  if (signUpBtn.classList.contains("active") && button === "login") {
    username.classList.toggle("username");
    email.classList.toggle("email");
    loginActive.style.marginTop = "80px";
    loginPopUp.style.height = "380px";
    signUpBtn.classList.remove("active");
    loginBtn.classList.add("active");
  } else if (loginBtn.classList.contains("active") && button === "signup") {
    username.classList.toggle("username");
    email.classList.toggle("email");
    loginActive.style.marginTop = "50px";
    loginPopUp.style.height = "430px";
    signUpBtn.classList.add("active");
    loginBtn.classList.remove("active");

  }
}

const numericInput = document.getElementById("phone-no");
numericInput.addEventListener("input", function (e) {
  this.value = this.value.replace(/\D/g, "");
});
