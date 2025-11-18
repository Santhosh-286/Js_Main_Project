// document.addEventListener("DOMContentLoaded", function () {
//   const mobileMenuButton = document.querySelector(".mobile-menu-button");
//   const mobileNav = document.querySelector(".mobile-nav");
//   const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
//   const navLinks = document.querySelectorAll(".nav-link");

//   // Toggle mobile menu
//   if (mobileMenuButton && mobileNav) {
//     mobileMenuButton.addEventListener("click", function () {
//       mobileNav.classList.toggle("active");
//     });
//   }

//   // Close mobile menu when clicking a link
//   mobileNavLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       mobileNav.classList.remove("active");
//     });
//   });

//   // Highlight active link (no preventDefault)
//   [...navLinks, ...mobileNavLinks].forEach((link) => {
//     link.addEventListener("click", function () {
//       [...navLinks, ...mobileNavLinks].forEach((l) =>
//         l.classList.remove("active")
//       );
//       this.classList.add("active");
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const currentPage = window.location.pathname.split("/").pop() || "index.html";
//   const links = document.querySelectorAll(".nav-link, .mobile-nav-link");

//   links.forEach((link) => {
//     const href = link.getAttribute("href");
//     if (href.includes(currentPage)) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });

// // slider section

// const swiper = new Swiper(".sliderbox", {
//   loop: true, // enables infinite looping
//   effect: "fade", // smooth fade between slides
//   autoHeight: true, // adjusts height automatically
//   speed: 1000, // transition speed (in ms)

//   // Enable autoplay (optional)
//   autoplay: {
//     delay: 2000, // 3 seconds per slide
//     disableOnInteraction: true, // keep autoplay running after manual swipe
//   },

//   // Pagination (bullets)
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true, // make bullets clickable
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // Scrollbar (optional)
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },

//   // Fade effect config (important for smooth transition)
//   fadeEffect: {
//     crossFade: true,
//   },
// });
// const sliderBox = document.querySelector(".sliderbox");

// sliderBox.addEventListener("mouseenter", () => {
//   swiper.autoplay.stop();
// });

// sliderBox.addEventListener("mouseleave", () => {
//   swiper.autoplay.start();
// });
// //
// //

// // // produtc-page-cart-page-section

// //
// // ---------------------------------------------------------
// // -------------------Rolex-watch-product-apge--------------
// // ---------------------------------------------------------

// // Load cart from localStorage or empty
// // Load cart from localStorage or empty
// let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// let total = 0;
// let itemCount = 0;

// // Add to cart
// function addToCart(productCard) {
//   const id = productCard.dataset.id;
//   const name = productCard.querySelector(".product-name").textContent;
//   const priceText = productCard.querySelector(".product-price").textContent;
//   const price = parseFloat(priceText.replace("$", ""));
//   const imgSrc = productCard.querySelector(".product-image").src;

//   const existingItem = cartItems.find((item) => item.id === id);

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cartItems.push({
//       id,
//       name,
//       price,
//       quantity: 1,
//       image: imgSrc,
//     });
//   }
//   updateLocalStorage();
//   updateCartDisplay();
// }

// // Show cart items
// function updateCartDisplay() {
//   const cartList = document.getElementById("cart-items");
//   const totalElement = document.getElementById("total-price");
//   const countElement = document.getElementById("cart-count");

//   cartList.innerHTML = "";
//   total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//   cartItems.forEach((item) => {
//     const li = document.createElement("li");
//     li.classList = "cart-item";
//     li.innerHTML = `
//       <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
//       <div class="cart-item-details">
//           <div class="cart-item-name">${item.name}</div>
//           <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
//       </div>
//       <div class="quantity-controls">
//           <button onclick="changeQuantity('${item.id}', -1)">-</button>
//           <button onclick="changeQuantity('${item.id}', 1)">+</button>
//       </div>
//       <button class="remove-item" onclick="removeItem('${item.id}')">X</button>
//     `;
//     cartList.appendChild(li);
//   });

//   totalElement.textContent = total.toFixed(2);
//   countElement.textContent = itemCount;
// }

// // Change quantity (+/-)
// function changeQuantity(id, change) {
//   const item = cartItems.find((i) => i.id === id);
//   if (item) {
//     item.quantity += change;
//     if (item.quantity <= 0) {
//       cartItems = cartItems.filter((i) => i.id !== id);
//     }
//     updateLocalStorage();
//     updateCartDisplay();
//   }
// }

// // Remove item from cart
// function removeItem(id) {
//   cartItems = cartItems.filter((item) => item.id !== id);
//   updateLocalStorage();
//   updateCartDisplay();
// }

// // Clear all items
// function clearCart() {
//   cartItems = [];
//   updateLocalStorage();
//   updateCartDisplay();
// }

// // Save to local storage
// function updateLocalStorage() {
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }

// // Toggle cart modal
// let cartIcon = document.querySelector(".cart-button");
// let cartModel = document.querySelector(".cart-model");
// let cartClose = document.querySelector(".close-btn");

// cartIcon.onclick = () => {
//   cartModel.classList.add("open-cart");
// };
// cartClose.onclick = () => {
//   cartModel.classList.remove("open-cart");
// };

// // Initialize display on load
// document.addEventListener("DOMContentLoaded", updateCartDisplay);

// // product-page-script

// //

// //

// //

// //

// // ---------------------
// // Load cart or start empty
// // ---------------------
// let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// let total = 0;
// let itemCount = 0;
// // === PRODUCT SEARCH FUNCTION ===

// // Select search input
// // === HEADER SEARCH FUNCTION (with title hide) ===
// const searchInput = document.querySelector(".search-input");

// if (searchInput) {
//   searchInput.addEventListener("input", (e) => {
//     const searchTerm = e.target.value.trim().toLowerCase();
//     const productSections = document.querySelectorAll(".category-title");

//     productSections.forEach((sectionTitle) => {
//       const section = sectionTitle.nextElementSibling; // the .product container after each title
//       const products = section.querySelectorAll(".product-card");
//       let hasVisibleProduct = false;

//       products.forEach((product) => {
//         const name = product
//           .querySelector(".product-name")
//           .textContent.toLowerCase();

//         // Show or hide product
//         if (searchTerm === "" || name.includes(searchTerm)) {
//           product.style.display = "block";
//           hasVisibleProduct = true;
//         } else {
//           product.style.display = "none";
//         }
//       });

//       // Show or hide the section title based on visible products
//       if (hasVisibleProduct) {
//         sectionTitle.style.display = "block";
//       } else {
//         sectionTitle.style.display = "none";
//       }
//     });
//   });
// }

// // ---------------------
// // Add to Cart Function
// // ---------------------
// function addToCart(productCard) {
//   const id = productCard.dataset.id;
//   const name = productCard.querySelector(".product-name").textContent;
//   const priceText = productCard.querySelector(".product-price").textContent;
//   const price = parseFloat(priceText.replace("$", ""));
//   const imgSrc = productCard.querySelector(".product-image").src;

//   const existingItem = cartItems.find((item) => item.id == id);

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cartItems.push({
//       id,
//       name,
//       price,
//       quantity: 1,
//       image: imgSrc,
//     });
//   }

//   updateLocalStorage();
//   updateCartDisplay();

//   // ✅ Open the cart automatically after adding
//   document.querySelector(".cart-model").classList.add("open-cart");
// }

// // ---------------------
// // Update Cart Display
// // ---------------------
// function updateCartDisplay() {
//   const cartList = document.getElementById("cart-items");
//   const totalElement = document.getElementById("total-price");
//   const countElement = document.getElementById("cart-count");

//   cartList.innerHTML = "";
//   total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//   if (cartItems.length === 0) {
//     cartList.innerHTML = `<li class="empty-cart">Your cart is empty.</li>`;
//   } else {
//     cartItems.forEach((item) => {
//       const li = document.createElement("li");
//       li.classList = "cart-item";
//       li.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
//         <div class="cart-item-details">
//             <div class="cart-item-name">${item.name}</div>
//             <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
//         </div>
//         <div class="quantity-controls">
//             <button onclick="changeQuantity('${item.id}', -1)">-</button>
//             <button onclick="changeQuantity('${item.id}', 1)">+</button>
//         </div>
//         <button class="remove-item" onclick="removeItem('${item.id}')">X</button>
//       `;
//       cartList.appendChild(li);
//     });
//   }

//   totalElement.textContent = total.toFixed(2);
//   countElement.textContent = itemCount;
// }

// // ---------------------
// // Change Quantity
// // ---------------------
// function changeQuantity(id, change) {
//   const item = cartItems.find((i) => i.id == id);
//   if (item) {
//     item.quantity += change;
//     if (item.quantity <= 0) {
//       cartItems = cartItems.filter((i) => i.id != id);
//     }
//     updateLocalStorage();
//     updateCartDisplay();
//   }
// }

// // ---------------------
// // Remove Item
// // ---------------------
// function removeItem(id) {
//   cartItems = cartItems.filter((item) => item.id != id);
//   updateLocalStorage();
//   updateCartDisplay();
// }

// // ---------------------
// // Clear All
// // ---------------------
// function clearCart() {
//   cartItems = [];
//   updateLocalStorage();
//   updateCartDisplay();
// }

// // ---------------------
// // Save to Local Storage
// // ---------------------
// function updateLocalStorage() {
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }

// // ---------------------
// // Toggle Cart Modal
// // ---------------------
// const cartIcon = document.getElementById("carticon");
// const cartModel = document.getElementById("cart-model");
// const cartClose = document.querySelector(".close-btn");

// cartIcon.addEventListener("click", () => {
//   cartModel.classList.add("open-cart");
// });

// cartClose.addEventListener("click", () => {
//   cartModel.classList.remove("open-cart");
// });

// // ---------------------
// // Checkout Function
// // ---------------------
// function goToCheckout() {
//   if (cartItems.length === 0) {
//     alert("Your cart is empty. Please add some items before checkout.");
//     cartModel.classList.remove("open-cart");
//   } else {
//     window.location.href = "checkout.html";
//   }
// }
// // ===== CHECKOUT BUTTON FUNCTIONALITY =====
// const checkoutBtn = document.getElementById("checkoutBtn");

// if (checkoutBtn) {
//   checkoutBtn.addEventListener("click", () => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     if (cartItems.length === 0) {
//       alert("Your cart is empty! Redirecting to product page...");
//       window.location.href = "product.html"; // or your main product page
//       return;
//     }

//     // Go to checkout page
//     window.location.href = "checkout.html";
//   });
// }

// // ---------------------
// // Init on Load
// // ---------------------
// document.addEventListener("DOMContentLoaded", updateCartDisplay);

// // ===== Product Filters =====
// const brandFilter = document.getElementById("brand-filter");
// const priceFilter = document.getElementById("price-filter");
// const searchFilter = document.getElementById("search-filter");

// function applyFilters() {
//   const brandValue = brandFilter.value.toLowerCase();
//   const priceValue = priceFilter.value;
//   const searchValue = searchFilter.value.toLowerCase();

//   // Get all category titles and their product groups
//   const categories = document.querySelectorAll(".category-title");

//   categories.forEach((title) => {
//     const productContainer = title.nextElementSibling; // div.product.container
//     const productCards = productContainer.querySelectorAll(".product-card");

//     let visibleCount = 0;

//     productCards.forEach((card) => {
//       const name = card
//         .querySelector(".product-name")
//         .textContent.toLowerCase();
//       const priceText = card
//         .querySelector(".product-price")
//         .textContent.replace("$", "")
//         .replace(",", "");
//       const price = parseFloat(priceText);

//       // Brand filter
//       let brandMatch =
//         brandValue === "all" ||
//         title.textContent.toLowerCase().includes(brandValue);

//       // Price filter
//       let priceMatch = true;
//       if (priceValue !== "all") {
//         const [min, max] = priceValue.split("-").map(Number);
//         if (max) priceMatch = price >= min && price <= max;
//         else priceMatch = price >= min;
//       }

//       // Search filter
//       const searchMatch = name.includes(searchValue);

//       // Show or hide product card
//       if (brandMatch && priceMatch && searchMatch) {
//         card.style.display = "block";
//         visibleCount++;
//       } else {
//         card.style.display = "none";
//       }
//     });

//     // Hide entire brand section if no products are visible
//     if (visibleCount === 0) {
//       title.style.display = "none";
//       productContainer.style.display = "none";
//     } else {
//       title.style.display = "block";
//       productContainer.style.display = "grid";
//     }
//   });
// }

// // Event listeners for filters
// [brandFilter, priceFilter, searchFilter].forEach((el) =>
//   el.addEventListener("input", applyFilters)
// );

// document.getElementById("cart-button").addEventListener("click", () => {
//   if (cartItems.length === 0) {
//     alert("🛒 Your cart is empty!");
//     window.location.href = "./shop.html"; // Redirect to products page
//   } else {
//     window.location.href = "./checkout.html"; // Redirect to checkout page
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // ===== MOBILE MENU =====
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileMenuButton && mobileNav) {
    mobileMenuButton.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });

  // ===== ACTIVE LINK HIGHLIGHT =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  [...navLinks, ...mobileNavLinks].forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ===== SWIPER SLIDER =====
  if (document.querySelector(".sliderbox")) {
    const swiper = new Swiper(".sliderbox", {
      loop: true,
      effect: "fade",
      autoHeight: true,
      speed: 1000,
      autoplay: { delay: 2000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      fadeEffect: { crossFade: true },
    });

    const sliderBox = document.querySelector(".sliderbox");
    sliderBox.addEventListener("mouseenter", () => swiper.autoplay.stop());
    sliderBox.addEventListener("mouseleave", () => swiper.autoplay.start());
  }

  // ===== CART SYSTEM =====
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartModel = document.querySelector(".cart-model");
  const cartIcon = document.getElementById("carticon");
  const cartClose = document.querySelector(".close-btn");
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");
  const countElement = document.getElementById("cart-count");

  function updateLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function updateCartDisplay() {
    if (!cartList || !totalElement || !countElement) return;
    cartList.innerHTML = "";
    let total = 0,
      itemCount = 0;

    if (cartItems.length === 0) {
      cartList.innerHTML = `<li class="empty-cart">Your cart is empty.</li>`;
    } else {
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;
        const li = document.createElement("li");
        li.classList = "cart-item";
        li.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
          <div class="cart-item-details">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">$${item.price} × ${item.quantity}</div>
          </div>
          <div class="quantity-controls">
              <button onclick="changeQuantity('${item.id}', -1)">-</button>
              <button onclick="changeQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="remove-item" onclick="removeItem('${item.id}')">X</button>
        `;
        cartList.appendChild(li);
      });
    }

    totalElement.textContent = total.toFixed(2);
    countElement.textContent = itemCount;
  }

  window.addToCart = (productCard) => {
    const id = productCard.dataset.id;
    const name = productCard.querySelector(".product-name").textContent;
    const priceText = productCard.querySelector(".product-price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    const imgSrc = productCard.querySelector(".product-image").src;

    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) existingItem.quantity++;
    else cartItems.push({ id, name, price, quantity: 1, image: imgSrc });

    updateLocalStorage();
    updateCartDisplay();
    if (cartModel) cartModel.classList.add("open-cart");
  };

  window.changeQuantity = (id, change) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) cartItems = cartItems.filter((i) => i.id !== id);
      updateLocalStorage();
      updateCartDisplay();
    }
  };

  window.removeItem = (id) => {
    cartItems = cartItems.filter((i) => i.id !== id);
    updateLocalStorage();
    updateCartDisplay();
  };

  window.clearCart = () => {
    cartItems = [];
    updateLocalStorage();
    updateCartDisplay();
  };

  if (cartIcon && cartModel && cartClose) {
    cartIcon.addEventListener("click", () =>
      cartModel.classList.add("open-cart")
    );
    cartClose.addEventListener("click", () =>
      cartModel.classList.remove("open-cart")
    );
  }

  updateCartDisplay();
});
