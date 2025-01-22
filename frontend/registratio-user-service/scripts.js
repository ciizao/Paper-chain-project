const form = document.getElementById("registration-form");
const responseMessage = document.getElementById("response-message");

    //event detector
form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    //data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // API endpoint change IP EC2
    const API_ENDPOINT = "http://127.0.0.1:8000/register";

    try {
        // Send POST to the API
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            responseMessage.innerHTML = `<p class="success">User registered successfully! User ID: ${data.user_id}</p>`;
        } else {
            responseMessage.innerHTML = `<p class="error">Error: ${data.detail}</p>`;
        }
    } catch (error) {
        responseMessage.innerHTML = `<p class="error">Network error: ${error.message}</p>`;
    }
});
