import { AnswerQuestion } from "./AnswerQuestion";
import { fetchCsrfToken } from "./CsrfToken";

export async function ForgotPasswordModal() {
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

    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f0f0f0';
    modal.style.padding = '20px';
    modal.style.width = '30%';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';

    const title = document.createElement('h2');
    title.innerText = 'Forgot Password';
    title.style.backgroundColor = "var(--button-primary-bg)";
    title.style.padding = '10px 0px';
    title.style.color = 'white';
    title.style.position = 'relative';
    title.style.width ="70%",
    title.style.textAlign="center"

    const crossIcon = document.createElement('span');
    crossIcon.innerHTML = '&times;';
    crossIcon.style.position = 'absolute';
    crossIcon.style.right = '10px';
    crossIcon.style.top = '10px';
    crossIcon.style.cursor = 'pointer';

    crossIcon.addEventListener('click', cleanup);
    title.appendChild(crossIcon);
    modal.appendChild(title);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Your Email');
    emailInput.style.width = '70%';

    emailInput.style.padding = '10px';
    emailInput.style.marginTop = '10px';
    modal.appendChild(emailInput);

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'submit');
    resetButton.innerText = 'Reset Password';
    resetButton.style.marginTop = '10px';
    resetButton.className = 'Button Button--primary';
    modal.appendChild(resetButton);

    container.appendChild(modal);
    document.body.appendChild(container);

    function cleanup() {
        container.remove();
    }
    const csrfToken = await fetchCsrfToken();
    resetButton.addEventListener('click', async function (event) {
        event.preventDefault();
        const existingErrorMessageDiv = modal.querySelector('.error-message');
        if (existingErrorMessageDiv) {
            existingErrorMessageDiv.remove();
        }
        // Gather the email
        const username = emailInput.value;

        try {
            // API endpoint URL
            const url1 = `${url}/user/find`;

            // Send the data to the API endpoint
            const response = await fetch(url1, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                    // Include any additional headers if needed, e.g., authentication headers
                },
                body: JSON.stringify({ username: username }),
            });

            // Handle the response
            if (response) {
                const data = await response.json();
               
                if (data.message) {
        cleanup();

      AnswerQuestion(data.data)
                }else {
                    const errorMessageDiv = document.createElement('div');
                    errorMessageDiv.className = 'error-message'; // Class name assign karein
                    errorMessageDiv.style.color = 'red';
                    errorMessageDiv.innerText = "User Not Found";
                    modal.appendChild(errorMessageDiv);
                    // Handle the error, e.g., show an error message to the user
                }
                // Perform any additional actions based on the response, e.g., show a success message
            }
        } catch (error) {
            console.error('Network Error:', error);
            // Handle the network error, e.g., show an error message to the user
        }

        // After completing the actions, cleanup the modal
    });


    container.addEventListener('click', function (event) {
        if (event.target === container) {
            cleanup();
        }
    });

    return {
        modal: modal,
        cleanup: cleanup,
    };
}
