import { CustomQuestionModal } from "./CustomQuestionModal";
import { fetchCsrfToken } from "./CsrfToken";

let myForm;
export function CustomModalForm() {
  let url =app.forum.attribute('apiUrl');;

  const originalSignUpButton = document.querySelector('.item-loveUp');

 const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent black background

  // Create a form element
  const form = document.createElement('form');
  form.style.textAlign = 'center';
  form.style.backgroundColor = '#f0f0f0'; // Form background color (light gray)
  form.style.padding = '20px'; // Add padding to the form
  form.style.width = '30%';
  // Create a title
  const title = document.createElement('h2');
  title.innerText = 'Sign up Form';
  title.style.backgroundColor = "var(--button-primary-bg)";
  title.style.padding = '10px 0px';
  title.style.color = 'white'; // White text color for the title
  title.style.position = 'relative'; // Set position to relative to position the cross icon

  // Create Cross Icon
  const crossIcon = document.createElement('span');
  crossIcon.innerHTML = '&times;'; // Using HTML entity for multiplication sign as a cross icon
  crossIcon.style.position = 'absolute';
  crossIcon.style.right = '10px';
  crossIcon.style.top = '10px';
  crossIcon.style.cursor = 'pointer';

  // Attach click event listener to the cross icon
  crossIcon.addEventListener('click', cleanup);

  // Append Cross Icon to the title
  title.appendChild(crossIcon);

  // Append title to the form
  form.appendChild(title);

  // ... (rest of the code)







  // Create input elements for username, email, and password
  const usernameDiv = document.createElement('div');
  const usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('placeholder', 'Username');
  usernameInput.style.margin = '10px 40px';
  usernameInput.style.padding = '10px';
  usernameInput.style.width = '70%';
  usernameInput.style.textAlign = 'center'; // Placeholder ko center mein align karne ke liye
  usernameDiv.appendChild(usernameInput);
  form.appendChild(usernameDiv); // Append usernameDiv to form


  // Password Input
  const passwordDiv = document.createElement('div');
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Password');
  passwordInput.style.margin = '10px 40px';
  passwordInput.style.padding = '10px';
  passwordInput.style.width = '70%';
  passwordInput.style.textAlign = 'center'; // Placeholder ko center mein align karne ke liye
  passwordDiv.appendChild(passwordInput);
  form.appendChild(passwordDiv); // Append passwordDiv to form

  // Append form to the body
  document.body.appendChild(form);

  const questionSelect = document.createElement('select');
  questionSelect.style.width = '100%';
  questionSelect.classList.add('FormControl');

  const questions = ["Please Answer Any Three Question For Security Reasons", 'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?','What is your favorite subject in middle school?','What is the name of your first secret crush in middle school?'];
  let selectedQuestions = [];
  function refreshDropdown() {
    questionSelect.innerHTML = '';
    if (selectedQuestions.length < 3) {
        questions.forEach((question, index) => {
            if (!selectedQuestions.includes(index)) {
                const option = document.createElement('option');
                option.value = index;
                option.text = question;
                questionSelect.appendChild(option);
            }
        });
        questionSelect.style.display = ''; // Show the dropdown
    } else {
        questionSelect.style.display = 'none'; // Hide the dropdown
    }
}

  refreshDropdown();
  form.appendChild(questionSelect);

  const answerSection = document.createElement('div');
  answerSection.style.width = '100%';

  questionSelect.addEventListener('change', function () {
    const selectedQuestionIndex = parseInt(questionSelect.value);
    if (!isNaN(selectedQuestionIndex) && !selectedQuestions.includes(selectedQuestionIndex)) {
        selectedQuestions.push(selectedQuestionIndex);

        const questionDiv = document.createElement('div');
        questionDiv.style.width = '100%';

        const questionP = document.createElement('p');
        questionP.innerText = questions[selectedQuestionIndex];
        questionDiv.appendChild(questionP);

        const answerDiv = document.createElement('div');
        answerDiv.style.display = 'flex';
        answerDiv.style.alignItems = 'center';
        answerDiv.style.justifyContent = 'space-between';
        answerDiv.style.width = '100%';
        answerDiv.style.marginBottom = '10px';

        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'text');
        answerInput.setAttribute('placeholder', 'Your Answer');
        answerInput.style.padding = '10px';
        answerInput.style.flexGrow = '1';
        answerInput.classList.add('FormControl');

        answerDiv.appendChild(answerInput);

        const crossIcon = document.createElement('span');
        crossIcon.innerHTML = '&times;';
        crossIcon.style.cursor = 'pointer';
        crossIcon.style.marginLeft = '10px';
        crossIcon.addEventListener('click', function (event) {
          const index = selectedQuestions.indexOf(selectedQuestionIndex);
          if (index > -1) {
              selectedQuestions.splice(index, 1);
              answerSection.removeChild(questionDiv);
              refreshDropdown();
          }
          event.stopPropagation(); // Prevent the event from propagating up
      });

        answerDiv.appendChild(crossIcon);

        questionDiv.appendChild(answerDiv);
        answerSection.appendChild(questionDiv);
        refreshDropdown();

        // Move the dropdown to the end of the form
        form.removeChild(questionSelect);
        form.insertBefore(questionSelect, signUpButton);

    }
});


  form.appendChild(answerSection);
  // Create a "Sign Up" button
  const signUpButton = document.createElement('button');
  signUpButton.setAttribute('type', 'submit');
  signUpButton.innerText = 'Sign Up';
  signUpButton.style.marginBottom = '10px';
  signUpButton.className = 'Button Button--primary'; // Add a class for styling

  // Add button styles

  // Create an "Already have an account?" line
  const alreadyAccountLine = document.createElement('p');
  alreadyAccountLine.innerText = 'Already have an account?';

  // Add form elements to the form
  form.appendChild(signUpButton);
  form.appendChild(alreadyAccountLine);

  // Add the form to the container
  container.appendChild(form);

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Define a cleanup method for removing the styling and container
  function cleanup() {
    // Remove the container from the DOM

    container.remove();
    originalSignUpButton.style.display = 'block';
  }



  // Define a submit method for the form
  let errorMessageDiv;
  async function submitForm() {
    const existingErrorMessages = document.querySelectorAll('.error-message');
    existingErrorMessages.forEach(message => message.remove());

    const username = usernameInput.value;
    const password = passwordInput.value;


    const answers = Array.from(answerSection.children).map(child => {
      const questionP = child.querySelector('p');
      const answerInput = child.querySelector('input');
      return {
          question: questionP.innerText,
          answer: answerInput.value
      };
  });

  if (answers.length < 3 || answers.some(answerObj => !answerObj.answer.trim())) {
    const errorMessageDiv = document.createElement('div');
    errorMessageDiv.className = 'error-message';
    errorMessageDiv.style.color = 'red';
    errorMessageDiv.innerText = 'Please answer all three selected security questions.';
    form.appendChild(errorMessageDiv);
    return; // Stop the form submission
}
    const formData = {
      username: username,
      password: password,
      question_1: answers[0]?.question,
      answer_1: answers[0]?.answer,
      question_2: answers[1]?.question,
      answer_2: answers[1]?.answer,
      question_3: answers[2]?.question,
      answer_3: answers[2]?.answer,
    };
    const csrfToken = await fetchCsrfToken();
  
    // Now you have the CSRF token in the "csrfToken" variable
    // Make an API request to a hypothetical endpoint
    fetch(`${url}/custom-signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
         

        if (data.success) {
            localStorage.setItem("userId", data.data.id)
            cleanup(); // Remove the form after submission
            location.reload();
             

        } else {
          // Check karein ki errors array exist karta hai aur usmein kam se kam ek element hai
          if (data.errors && data.errors.length > 0) {
            data.errors.forEach(error => {
                const errorMessage = error.detail;

                // Naya error message div create karein
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'error-message'; // Class name assign karein
                errorMessageDiv.style.color = 'red';
                errorMessageDiv.innerText = errorMessage;
                form.appendChild(errorMessageDiv);
            });
        }
      }
    })
      .catch((error) => {
        // Handle errors
        console.error('API Error:', error);
        // You can display an error message to the user.
      });
    // Prevent the default form submission behavior
    return false;
  }

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the custom submitForm method
  });

  // Add a click event listener to the container to close the form (modal)
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup(); // Close the form when clicking outside
    }
  });

  // Return the form element and submitForm method
  return {
    form: form,
    submitForm: submitForm,
  };
}
