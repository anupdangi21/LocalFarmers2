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
    const fruitName = fruitItem.querySelector('.fruit-name').textContent; // Extract fruit name
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
