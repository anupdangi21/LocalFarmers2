// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.querySelector('.loginform form');
//     loginForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         const formData = new FormData(loginForm);
//         const username = formData.get('username');
//         const password = formData.get('password');

//         try {
//             const response = await fetch('/submit', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     username,
//                     password
//                 })
//             });

//             if (response.ok) {
//                 window.location.href = response.url; // Redirect if login is successful
//             } else {
//                 const errorMessage = await response.text(); // Extract error message
//                 alert(errorMessage); // Display error message in alert dialog box
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again later.');
//         }
//     });
// });