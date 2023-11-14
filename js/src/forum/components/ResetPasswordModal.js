import { fetchCsrfToken } from "./CsrfToken";


export default  async function ResetPasswordmodal1() {
  let url =app.forum.attribute('apiUrl');;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.zIndex = '999999';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

    const modal1 = document.createElement('div');
    modal1.style.backgroundColor = '#f0f0f0';
    modal1.style.padding = '20px';
    modal1.style.width = '30%';
    modal1.style.display = 'flex';
    modal1.style.flexDirection = 'column';
    modal1.style.alignItems = 'center';

    const title = document.createElement('h2');
    title.innerText = 'Reset Password';
    title.style.backgroundColor = "var(--button-primary-bg)";
    title.style.padding = '10px 0px';
    title.style.color = 'white';
    title.style.position = 'relative';
    title.style.width = "70%";
    title.style.textAlign = "center";

    const crossIcon = document.createElement('span');
    crossIcon.innerHTML = '&times;';
    crossIcon.style.position = 'absolute';
    crossIcon.style.right = '10px';
    crossIcon.style.top = '10px';
    crossIcon.style.cursor = 'pointer';

    crossIcon.addEventListener('click', cleanup);
    title.appendChild(crossIcon);
    modal1.appendChild(title);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'New Password');
    passwordInput.style.width = '70%';
    passwordInput.style.padding = '10px';
    passwordInput.style.marginTop = '10px';
    modal1.appendChild(passwordInput);

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('placeholder', 'Confirm New Password');
    confirmPasswordInput.style.width = '70%';
    confirmPasswordInput.style.padding = '10px';
    confirmPasswordInput.style.marginTop = '10px';
    modal1.appendChild(confirmPasswordInput);

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'submit');
    resetButton.innerText = 'Reset Password';
    resetButton.style.marginTop = '10px';
    resetButton.className = 'Button Button--primary';
    modal1.appendChild(resetButton);

    container.appendChild(modal1);
    document.body.appendChild(container);

    function cleanup() {
        container.remove();
    }

    const csrfToken = await fetchCsrfToken();

    resetButton.addEventListener('click', async function (event) {
        event.preventDefault();

        // Remove existing error message if any
        const existingErrorMessageDiv = modal1.querySelector('.error-message');
        if (existingErrorMessageDiv) {
            existingErrorMessageDiv.remove();
        }

        // Gather the password and confirm password
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validate the passwords
        if (password !== confirmPassword) {
            // Show an error message if passwords do not match
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'error-message';
            errorMessageDiv.style.color = 'red';
            errorMessageDiv.innerText = "Passwords do not match!";
            modal1.appendChild(errorMessageDiv);
            return;
        }

        // Assuming you have the user_id available in a variable userId
        const userId = localStorage.getItem("userId"); // Replace with the actual way you are getting the user_id

        // Send the new password to the server
        try {
            const response = await fetch(`${url}/update-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                },
                body: JSON.stringify({
                    user_id: userId,
                    password: password,
                    password_confirmation: confirmPassword,
                }),
            });

            const data = await response.json();
          

            // Handle the response, e.g., show a success message or handle errors
            if (data.message == true) {
                // alert('Password has be   en reset successfully!');
                cleanup();
            } else {
                // Show error message
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'error-message';
                errorMessageDiv.style.color = 'blue';
                // alert('Password has been reset successfully!');
                errorMessageDiv.innerText ="Error resetting password!";
                modal1.appendChild(errorMessageDiv);
            }
        } catch (error) {
            console.error('Network Error:', error);

            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'error-message';
            errorMessageDiv.style.color = 'red';
            errorMessageDiv.innerText = "Network Error!";
            modal1.appendChild(errorMessageDiv);
        }
    });



    return {
        modal1: modal1,
        cleanup: cleanup,
    };
}
