function logout(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    if (window.confirm("Are you sure you want to exit?")) {
        // Redirect to /customer/customer.html
        window.location.href = '/customer/customer1.html';
    }
}

// Attach click event listener to the logout link
document.getElementById('log-out').addEventListener('click', logout);

//fetching the data from the mongodb server
fetch('http://localhost:3000/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('data-container');
    data.forEach(item => {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Name: ${item.name}, Age: ${item.age}`;
      container.appendChild(paragraph);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error, e.g., display an error message to the user
  });