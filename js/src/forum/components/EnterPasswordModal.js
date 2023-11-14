import { fetchCsrfToken } from "./CsrfToken";
import { CustomQuestionModal } from "./CustomQuestionModal";


export function EnterPasswordModalForm(user_id) {
    // Create a container div for centering the form and overlay
  let url =app.forum.attribute('apiUrl');

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
    <span>Enter Password </span>
    </div>`)
    // Create input elements for username, email, and password
    const new_password = document.createElement('input');
    new_password.setAttribute('type', 'password');
    new_password.setAttribute('placeholder', '*******');
    new_password.setAttribute('required', true);
    new_password.style.marginBottom = '15px';
    new_password.style.marginTop = '5px';
    new_password.classList.add('FormControl');

   




    // Add input elements to the form
    form.appendChild(new_password);

    // Create a "Sign Up" button
    const signUpButton = document.createElement('button');
    signUpButton.setAttribute('type', 'submit');
    signUpButton.innerText = 'Submit';
    signUpButton.style.marginBottom = '5px';
    signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling




    // Add form elements to the form
    const new_password_label = document.createElement('label');
    new_password_label.innerText =`Password`;
    new_password_label.classList.add('Button-label-changePassword');

   

    // Create div elements to wrap each label and input pair
    const new_password_div = document.createElement('div');
    new_password_div.appendChild(new_password_label);
    new_password_div.appendChild(new_password);

    

    // Append the divs to the form
    form.appendChild(new_password_div);
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
      const new_pass = new_password.value;

  if(new_pass.trim()){

      // Perform actions with the form data (e.g., validation, API request)

      const formData = {
        password: new_pass,
        
      };
       
      const csrfToken =await fetchCsrfToken();
      // Now you have the CSRF token in the "csrfToken" variable
      // Make an API request to a hypothetical endpoint
      fetch(`${url}/check-password`, {
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
                cleanup(); // Remove the form after submission
                CustomQuestionModal()
            }else{
                
                swal(`Incorrect Password`,"","error");
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
      return false;
    }else{
        swal("Enter Password","","error");
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
 
   
}


