import { fetchCsrfToken } from "../../forum/components/CsrfToken";
import { AllPermission } from "../AllPemissionData";


export async function  EditModalForm(e) {
    let id = $(this).attr("id");
    let url =app.forum.attribute('apiUrl');

    const csrfToken =await fetchCsrfToken();
    // Now you have the CSRF token in the "csrfToken" variable
    // Make an API request to a hypothetical endpoint
    fetch(`${url}/permission/edit/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      }
    })
      .then((response) => response.json())
      .then((data) => {
   let alldata=data.data
        console.log(data)


    // console.log(e.target.getAttribute("edit-data"))
    // Create a container div for centering the form and overlay
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.zIndex= 999999;
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
    container.classList.add('admin_add_point_modal');
    // Create a form element
    const form = document.createElement('form');
    form.style.backgroundColor = 'white'; // Form background color
    form.style.padding = '20px';
    form.style.width = '45%';
     // Add padding to the form
    form.classList.add('admin_add_point_modal_form');
    // Create input elements for username, email, and password
    const usernameInput = document.createElement('input');
    usernameInput.defaultValue=alldata?.permission
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'condition Score/Deduction');
    usernameInput.style.marginBottom = '10px';

    const number_Input = document.createElement('input');
    number_Input.defaultValue=alldata?.reputation_requirement

    number_Input.setAttribute('type', 'number');
    number_Input.style.marginBottom = '10px';

    const descriptionInput = document.createElement('input');
    descriptionInput.defaultValue=alldata?.description

    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.style.marginBottom = '10px';


    // Add input elements to the form
   // Add form elements to the form
   const usernameLabel = document.createElement('label');
   usernameLabel.innerText = 'Permission Name:';
   const numberLabel = document.createElement('label');
   numberLabel.innerText = 'Number:';
   const descriptionLabel = document.createElement('label');
   descriptionLabel.innerText = 'Description:';

   // Create div elements to wrap each label and input pair
   const usernameDiv = document.createElement('div');
   usernameDiv.appendChild(usernameLabel);
   usernameDiv.appendChild(usernameInput);

   const numberDiv = document.createElement('div');
   numberDiv.appendChild(numberLabel);
   numberDiv.appendChild(number_Input);

   const descriptionDiv = document.createElement('div');
   descriptionDiv.appendChild(descriptionLabel);
   descriptionDiv.appendChild(descriptionInput);

   // Append the divs to the form


    // Create a "Sign Up" button
    const editPointBtn = document.createElement('button');
    editPointBtn.setAttribute('type', 'submit');
    editPointBtn.innerText = 'Add Point';
    editPointBtn.style.marginBottom = '5px';
    editPointBtn.className = ' Button Button--primary points_add_btn'; // Add a class for styling

    // Create an "Already have an account?" line


    // Add form elements to the form
    $(form).append(`<div class='securityQuestion_text_admin'>
    <span>Edit Permissions</span>
    </div>`)
    form.appendChild(usernameDiv);
    form.appendChild(numberDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(editPointBtn);


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
      const permission = usernameInput.value;
      const reputation_requirement = number_Input.value;
      const description =  descriptionInput.value
  if(permission.trim()&&reputation_requirement.trim()){


      // Perform actions with the form data (e.g., validation, API request)

      const formData = {
        permission: permission,
        reputation_requirement: reputation_requirement,
        description: description,
      };
      const csrfToken =await fetchCsrfToken();
       
      // Now you have the CSRF token in the "csrfToken" variable
      // Make an API request to a hypothetical endpoint
      fetch(`${url}/permission/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
            cleanup();
            swal("Updated!", "Updated successfully", "success");

          // Handle the API response here
           
          AllPermission()
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
      swal("Warning!", "Permission name and Points are required", "warning");

    }
    }

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
      submitForm(); // Call the custom submitForm method
       // Remove the form after submission
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


})
.catch((error) => {
  // Handle errors
  console.error('API Error:', error);
  // You can display an error message to the user.
});
  }


