import { fetchCsrfToken } from "./CsrfToken";
import ResetPasswordModal from "./ResetPasswordModal"


export function AnswerQuestion(questionsData) {
  let url =app.forum.attribute('apiUrl');;

    // Check if questions are provided
    if (!questionsData || questionsData.length === 0) {
        console.error('No questions provided');
        return;
    }

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f0f0f0';
    modal.style.padding = '20px';
    modal.style.width = '30%';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';

    const title = document.createElement('h2');
    title.innerText = 'Answer More Questions';
    title.style.backgroundColor = "var(--button-primary-bg)";
    title.style.padding = '10px 0px';
    title.style.color = 'white';
    title.style.position = 'relative';
    title.style.width = "100%";
    title.style.textAlign = "center";

    const crossIcon = document.createElement('span');
    crossIcon.innerHTML = '&times;';
    crossIcon.style.position = 'absolute';
    crossIcon.style.right = '10px';
    crossIcon.style.top = '10px';
    crossIcon.style.cursor = 'pointer';

    crossIcon.addEventListener('click', cleanup);
    title.appendChild(crossIcon);
    modal.appendChild(title);

    const answerSection = document.createElement('div');
    answerSection.style.width = '100%';

    questionsData.forEach(({ id, question: questionText }) => {
        const questionDiv = document.createElement('div');
        questionDiv.style.width = '100%';

        const questionP = document.createElement('p');
        questionP.innerText = questionText;
        questionDiv.appendChild(questionP);

        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'text');
        answerInput.setAttribute('placeholder', 'Your Answer');
        answerInput.style.padding = '10px';
        answerInput.style.width = '100%';
        questionDiv.appendChild(answerInput);

        answerSection.appendChild(questionDiv);
    });

    modal.appendChild(answerSection);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Submit Answer';
    submitButton.style.marginTop = '10px';
    submitButton.className = 'Button Button--primary';

    container.appendChild(modal);
    document.body.appendChild(container);

    function cleanup() {
        container.remove();
    }

    submitButton.addEventListener('click', async function (event) {
        event.preventDefault();
        const existingErrorMessageDiv = modal.querySelector('.error-message');
        if (existingErrorMessageDiv) {
            existingErrorMessageDiv.remove();
        }
        // Gather the data
        const answers = Array.from(answerSection.children).map(child => {
            const questionP = child.querySelector('p');
            const answerInput = child.querySelector('input');
            return {
                id: questionsData.find(q => q.question === questionP.innerText).id,
                answer: answerInput.value
            };
        });

        // Prepare the payload in the required format
        const payload = {
            question1: answers[0]?.id,
            answer1: answers[0]?.answer,
            question2: answers[1]?.id,
            answer2: answers[1]?.answer,
            question3: answers[2]?.id,
            answer3: answers[2]?.answer,
        };

        const csrfToken = await fetchCsrfToken();

        try {
            // Send the data to the API endpoint
            const response = await fetch(`${url}/question/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                    // Include any additional headers if needed, e.g., authentication headers
                },
                body: JSON.stringify(payload),
            });

            // Handle the response
            if (response) {
                const data = await response.json();
                 
                if (data.message == true) {
                    localStorage.setItem("userId",data.data)
                      cleanup();
                        ResetPasswordModal()

                }else{
                    const errorMessageDiv = document.createElement('div');
                    errorMessageDiv.className = 'error-message'; // Class name assign karein
                    errorMessageDiv.style.color = 'red';
                    errorMessageDiv.innerText = "Your Question are not match";
                    modal.appendChild(errorMessageDiv);
                }

                // Perform any additional actions based on the response, e.g., show a success message
            } else {
                console.error('API Error:', response.statusText);
                // Handle the error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Network Error:', error);
            // Handle the network error, e.g., show an error message to the user
        }

    });


    // container.addEventListener('click', function (event) {
    //     if (event.target === container) {
    //         cleanup();
    //     }
    // });

    modal.appendChild(submitButton);

    return {
        modal: modal,
        cleanup: cleanup,
    };
}
