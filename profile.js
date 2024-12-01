/* Display User Information */
document.addEventListener("DOMContentLoaded", () => {
    const profileEmailField = document.getElementById("profile-email");
    const profileUsernameField = document.getElementById("profile-username");

    function loadUserProfile() {
        const loggedInUser = localStorage.getItem("loggedInUser"); // Get the logged-in user (email)
        const users = JSON.parse(localStorage.getItem("users")) || {}; // Get all users

        if (!loggedInUser) {
            // If no user is logged in, redirect to the login page
            alert("You must be logged in to view your profile.");
            window.location.href = "/signIn.html"; // Redirect to the sign-in page
        } else if (users[loggedInUser]) {
            // Display user data in the designated fields
            profileEmailField.value = loggedInUser; // Display the email (loggedInUser is email)
            profileUsernameField.textContent = users[loggedInUser].username; // Display the username
        } else {
            // If the user is not found in the `users` object, redirect to the login page
            alert("Invalid user data.");
            window.location.href = "/signIn.html"; // Redirect to the sign-in page
        }
    }

    // Call the function to load user data
    loadUserProfile();
});