
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

// Select all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to handle 'Add to Cart' button click
function addToCart(event) {
    const vegItem = event.target.closest('.veg-item'); // Get the closest parent with class '.veg-item'
    const vegName = vegItem.querySelector('.veg-name').textContent; // Extract vegetable name
    const vegPrice = vegItem.querySelector('.veg-price').textContent; // Extract vegetable price

    // Create a new row in the table
    const table = document.querySelector('table tbody');
    const newRow = table.insertRow();

    // Add data to the new row
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${vegName}</td>
        <td>${vegPrice}</td>
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
