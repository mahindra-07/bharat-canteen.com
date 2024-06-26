


// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>
//     {
//         searchForm.classList.toggle('active');
//         navbar.classList.remove('active');
//     }


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => 
    {
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active');
    }

window.onscroll = () => 
    {
    // searchForm.classList.remove('active');
    navbar.classList.remove('active');
    }

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}



var swiper = new Swiper(".products-slider", {
    slidesPerView: 1,
    // loop:false,

    spaceBetween: 20,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay:6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



// code for shopping cart

// const cart = document.querySelector('.shopping-cart');
// const cartItems = cart.querySelector('.cart-items');
// const cartTotal = cart.querySelector('.cart-total');

// // Select product slider elements
// const slider = document.querySelector('.slider-wrapper');
// const products = slider.querySelectorAll('.product');

// // Initialize cart data
// const cartData = {};

// // Listen for clicks on product "Add to Cart" buttons
// products.forEach(product => {
//     const addToCartBtn = product.querySelector('.add-to-cart');

//     addToCartBtn.addEventListener('click', e => {
//         e.preventDefault();

//         // Get product details
//         const productTitle = product.querySelector('.product-title').textContent;
//         const productImage = product.querySelector('.product-image').src;
//         const productPrice = parseFloat(product.querySelector('.product-price').textContent);

//         // Add product to cart data
//         if (cartData[productTitle]) {
//             cartData[productTitle].quantity += 1;
//         } else {
//             cartData[productTitle] = { image: productImage, price: productPrice, quantity: 1 };
//         }

//         // Update cart UI
//         updateCart();
//     });
// });

// // Update the cart UI
// function updateCart() {
//     // Remove existing cart items
//     cartItems.innerHTML = '';

//     // Add cart items
//     let cartTotalPrice = 0;
//     for (const [key, value] of Object.entries(cartData)) {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');

//         const cartItemImage = document.createElement('img');
//         cartItemImage.src = value.image;
//         cartItem.appendChild(cartItemImage);

//         const cartItemTitle = document.createElement('h3');
//         cartItemTitle.textContent = key;
//         cartItem.appendChild(cartItemTitle);

//         const cartItemPrice = document.createElement('span');
//         cartItemPrice.textContent = `$${value.price.toFixed(2)}`;
//         cartItem.appendChild(cartItemPrice);
       
        
//     }

//     // Update the cart total price
//     function updateCartTotal() {
//         let cartTotalPrice = 0; for (const [_, value] of Object.entries(cartData)) { const itemTotalPrice = value.price * value.quantity; cartTotalPrice += itemTotalPrice; } cartTotal.textContent = `$${cartTotalPrice.toFixed(2)}`;
//     }

//     // Even listener for shopping cart icon
//     const cartIcon = document.querySelector('.shopping-cart-icon');
//     const cartSection = document.querySelector('.shopping-cart-section');
//     cartIcon.addEventListener('click', () => { // Scroll the cart section from the right side cartSection.classList.toggle('active');
//     });

//     // Checkout button listener
//     const checkoutButton = document.querySelector('.checkout-button');
//     checkoutButton.addEventListener('click', () => { // Redirect the user to the checkout page window.location.href = '/checkout';
//     });

















