let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

// Select all 'Add to Cart' buttons for fruits
const addToCartButtons = document.querySelectorAll('.fruit-container .add-to-cart-button');

// Add event listener to each button for fruits
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to handle 'Add to Cart' button click for fruits
function addToCart(event) {
    const fruitItem = event.target.closest('.fruit-item'); // Get the closest parent with class '.fruit-item'
    const fruitName = fruitItem.querySelector('.fruit-name-apple').textContent; // Extract fruit name
    // const fruitNameapple = fruitItem.querySelector('.fruit-name-apple').textContent;
    const fruitPrice = fruitItem.querySelector('.fruit-price').textContent; // Extract fruit price

    // Create a new row in the table
    const table = document.querySelector('table tbody');
    const newRow = table.insertRow();

    // Add data to the new row
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${fruitName}</td>
        <td>${fruitPrice}</td>
        <td><button class="remove-button">Remove</button></td> <!-- Add remove button -->
    `;

    // Add event listener to the newly added remove button
    const removeButton = newRow.querySelector('.remove-button');
    removeButton.addEventListener('click', removeCartItem);
}

// Function to handle 'Remove' button click
function removeCartItem(event) {
    const row = event.target.closest('tr'); // Get the closest row
    row.remove(); // Remove the row from the table
}

const checkoutButtons = document.querySelectorAll('.checkout-button');

checkoutButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Select the table body
        const tableBody = document.querySelector('table tbody');
        
        // Get all rows in the table body
        const rows = tableBody.querySelectorAll('tr');
        
        // Initialize an empty array to store product details
        const products = [];

        // Iterate over each row in the table
        rows.forEach(row => {
            // Get the product details from the row
            const productId = row.cells[0].textContent;
            const productName = row.cells[1].textContent;
            const productPrice = row.cells[2].textContent;
            
            // Push the product details to the products array
            products.push({
                id: productId,
                name: productName,
                price: productPrice
            });
        });

        // Display the products
        console.log("Products in Cart:");
        products.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
        });

        // Display the "Checked Out" message
        console.log("Checked Out");
    });
});

// Add event listener to the checkout button
// const checkoutButtons = document.querySelectorAll('.checkout-button');

// Loop through all checkout buttons and attach event listener to each
checkoutButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Select the table body
        const tableBody = document.querySelector('table tbody');
        
        // Get all rows in the table body
        const rows = tableBody.querySelectorAll('tr');
        
        // Initialize an empty array to store product details
        const products = [];

        // Iterate over each row in the table
        rows.forEach(row => {
            // Get the product details from the row
            const productId = row.cells[0].textContent;
            const productName = row.cells[1].textContent;
            const productPrice = row.cells[2].textContent;
            
            // Push the product details to the products array
            products.push({
                id: productId,
                name: productName,
                price: productPrice
            });
        });

        // Get the modal
        const modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // Get the div to display cart items
        const cartItemsDiv = document.getElementById("cartItems");

        // Clear previous content
        cartItemsDiv.innerHTML = '';

        // Populate cart items
        products.forEach(product => {
            const item = document.createElement("p");
            item.textContent = `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;
            cartItemsDiv.appendChild(item);
        });

        // Display the modal
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    });
});
