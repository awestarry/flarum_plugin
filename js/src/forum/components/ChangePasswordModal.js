import { fetchCsrfToken } from "./CsrfToken";
import { NewPasswordModalForm } from "./NewpasswordModal";


export function ChangePasswordModalForm() {
    // Create a container div for centering the form and overlay
  let url =app.forum.attribute('apiUrl');
  fetch(`${url}/user/question/find`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {

    let questionArr=data?.data
if(questionArr){
    // Handle the API response here
  
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
    container.classList.add('admin_add_point_modal');
    // Create a form element
    const form = document.createElement('form');
    form.style.backgroundColor = 'white'; // Form background color
    form.style.padding = '20px'; // Add padding to the form
    form.style.width = '40%'; // Add padding to the form
    form.classList.add('admin_add_point_modal_form');
    $(form).append(`<div class='securityQuestion_text'>
    <span>Secutrity Questions </span>
    </div>`)
    // Create input elements for username, email, and password
    const question_1 = document.createElement('input');
    question_1.setAttribute('type', 'text');
    question_1.setAttribute('placeholder', 'Answer');
    question_1.style.marginBottom = '15px';
    question_1.style.marginTop = '5px';
    question_1.classList.add('FormControl');
    question_1.setAttribute('required', true);


    const question_2 = document.createElement('input');
    question_2.setAttribute('type', 'text');
    question_2.style.marginBottom = '15px';
    question_2.style.marginTop = '5px';
    question_2.setAttribute('placeholder', 'Answer');
    question_2.setAttribute('required', true);

    question_2.classList.add('FormControl');

    const question_3 = document.createElement('input');
    question_3.setAttribute('type', 'text');
    question_3.setAttribute('placeholder', 'Description');
    question_3.setAttribute('placeholder', 'Answer');
    question_3.setAttribute('required', true);

    question_3.style.marginBottom = '15px';
    question_3.style.marginTop = '5px';
    question_3.classList.add('FormControl');



    // Add input elements to the form
    form.appendChild(question_1);
    form.appendChild(question_2);
    form.appendChild(question_3);

    // Create a "Sign Up" button
    const signUpButton = document.createElement('button');
    signUpButton.setAttribute('type', 'submit');
    signUpButton.innerText = 'Submit';
    signUpButton.style.marginBottom = '5px';
    signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling




    // Add form elements to the form
    const usernameLabel = document.createElement('label');
    usernameLabel.innerText = `Q: ${questionArr[0]?.question}`;
    usernameLabel.classList.add('Button-label-changePassword');

    const numberLabel = document.createElement('label');
    numberLabel.innerText = `Q: ${questionArr[1]?.question}`;
    numberLabel.classList.add('Button-label-changePassword');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText =  `Q: ${questionArr[2]?.question}`;
    descriptionLabel.classList.add('Button-label-changePassword');

    // Create div elements to wrap each label and input pair
    const usernameDiv = document.createElement('div');
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(question_1);

    const numberDiv = document.createElement('div');
    numberDiv.appendChild(numberLabel);
    numberDiv.appendChild(question_2);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(question_3);

    // Append the divs to the form
    form.appendChild(usernameDiv);
    form.appendChild(numberDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(signUpButton);

    // Add the form to the container
    container.appendChild(form);

    // Append the container to the body of the document
    document.body.appendChild(container);

    // Define a cleanup method for removing the styling and container
    function cleanup() {
      // Remove the container from the DOM
      container.remove();
    }

    // Define a submit method for the form
    async function submitForm() {
      const answer1 = question_1.value;
      const answer2 = question_2.value;
      const answer3 = question_3.value;

  if(answer1.trim()&&answer2.trim()&&answer3.trim()){

      // Perform actions with the form data (e.g., validation, API request)

      const formData = {
        user_id: questionArr[0]?.user_id,
          question1: questionArr[0]?.id,
          answer1: answer1,
          question2: questionArr[1]?.id,
          answer2: answer2,
          question3: questionArr[2]?.id,
          answer3: answer3,
      };
       
      const csrfToken =await fetchCsrfToken();
      // Now you have the CSRF token in the "csrfToken" variable
      // Make an API request to a hypothetical endpoint
      fetch(`${url}/question/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
            if(data?.message){
               cleanup();
                NewPasswordModalForm(questionArr[0]?.user_id)
                // Remove the form after submission
            }else{
                
                swal("Incorrect Answer","","error");
            }

          // Handle the API response here
           
          // You can perform actions like showing a success message or redirecting the user.
        })
        .catch((error) => {
          // Handle errors
          console.error('API Error:', error);
          // You can display an error message to the user.
        });
      // Prevent the default form submission behavior
      return false;}else{
        swal("All answers are requird","","error");

      }
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
  
     
      // You can perform actions like showing a success message or redirecting the user.
 } })
    .catch((error) => {
      // Handle errors
      console.error('API Error:', error);
      // You can display an error message to the user.
    });
}


