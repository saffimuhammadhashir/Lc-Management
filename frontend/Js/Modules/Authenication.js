export function Authenication(config, setCookie) {
    // console.log('LoginMain Module - Authenication');

    document.addEventListener('DOMContentLoaded', function () {

        let loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", AuthAdmin);

        async function AuthAdmin(event) {
            event.preventDefault();

            // Get the form data
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            // Make API request (replace 'apiEndpoint' with your actual API URL)
            console.log("Authenication request: " + config.HOST + '/login');
            
            fetch(`${config.HOST}/login`, {
                method: "POST",
                body: JSON.stringify({ admin_username: username, admin_password: password }),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.Ok) {
                        // Assuming login is successful and username is obtained
                        console.log("Data: " + data.Ok);

                        let active_user = data.Ok;
                        setCookie(active_user);
                        window.location.href = "index.html";
                    } else if (data.Err === false) {
                        // Display error message
                        displayError("Invalid credentials. Please try again.");
                    } else {
                        // Handle other response scenarios
                        // ...
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

        function displayError(message) {
            var errorContainer = document.getElementById("errorContainer");

            // Clear any existing error messages
            errorContainer.innerHTML = "";

            // Create and style the error message box
            var errorBox = document.createElement("div");
            errorBox.className = "error-box";
            errorBox.textContent = message;

            // Append the error message box to the error container
            errorContainer.appendChild(errorBox);
        }




    });


}
