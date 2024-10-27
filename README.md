Online Store Web Application

This project is a frontend-only web-based online store application, allowing users to browse products, add items to a cart, view a pop-up cart summary, and finalize their purchase. This implementation is ideal for local testing and design evaluation without needing a backend or database.


1. Table of Contents
2. Project Structure
3. Features
4. Technologies Used
5. Setup Instructions
6. Usage Guide
7. Code Explanation
8. Future Improvements

Project Structure


├── assets/

│   ├── img/                     # Image files for the store

│   ├── styles/                  # CSS files for styling

│       ├── store.css

│       └── style.css

│   ├── js/                      # JavaScript files for frontend logic

│       └── store.js

├── index.html                   # Main page with product catalog

└── cadastro.html                # Registration page for user login



Features

 . Product Display: View available products with images, descriptions, and prices.
 
 . Cart Management: Add and remove products from the cart, with a pop-up side cart showing selected items and quantities.
 
 . Finalize Purchase: Summarize cart items for purchase without storing data permanently.
 
 . User Registration: Create a mock user account without backend integration.
 

Technologies Used

 . Frontend: HTML, CSS, JavaScript
 
 . Other: Google Fonts for custom typography


Setup Instructions

 1. Clone the Repository:

 git clone <repository-url>
 
cd <repository-folder>

 2. Open the Application:

Open index.html in a web browser.

Usage Guide

1. Product Catalog

 . The homepage displays a selection of products. Each product has options to add it to the cart or remove it.

2. Cart Popup

 . Click “Finalize Purchase” to view the items in your cart.
 
 . The cart will open from the side, listing the selected products and their quantities.
 

3. Finalize Purchase

 . Click “Finalize Purchase” in the cart to view a summary of the order.
 
 . This action currently doesn’t save any data and only displays the selection within the session.

4. User Registration

 . Navigate to the “Register” page to create a mock account.
 
 . Fill in the required information for display only, as no backend storage exists.

Code Explanation

  Frontend Code

 . HTML (index.html, cadastro.html): Provides the structure for the product catalog and registration form.

 . CSS (store.css, style.css): Defines the visual styling of the page, including layout, colors, fonts, and responsive design.

 . JavaScript (store.js): Handles the client-side logic for adding/removing products in the cart and updating the subtotal in real-time.

 JavaScript (Frontend Only)

 . The JavaScript handles all in-browser operations using the localStorage API to temporarily hold cart data.


1. Cart Management:

 . Add to Cart: Adds items to a temporary cart structure stored in localStorage.
 
 . Remove from Cart: Adjusts quantities or removes items in the cart.
 
 . View Cart: Opens a pop-up cart showing selected items and quantities.

2. Finalize Purchase:

 . The cart data in localStorage is displayed in the cart summary pop-up when the "Finalize Purchase" button is clicked.

3. User Registration:

 . The form on cadastro.html allows users to enter mock data without any backend validation or storage.

Future Improvements

 . Backend Integration: Set up a backend (e.g., with Node.js and MongoDB) for real order tracking and user management.
 . User Authentication: Add login authentication with password hashing.
 . Enhanced Cart Management: Expand cart features to include promotions, discounts, and item filtering.

 This project provides a functional demonstration of an online store interface with interactive cart functionality, ready for local use or further backend integration.
