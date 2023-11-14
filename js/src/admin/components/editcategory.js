import { fetchCsrfToken } from "../../forum/components/CsrfToken";

export async function editcategory() {
  let id = this.getAttribute("id");
  let url = app.forum.attribute('apiUrl');

  const csrfToken = await fetchCsrfToken();

  fetch(`${url}wiki/category/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    let alldata = data.data;

    const container = document.createElement('div');
    // ... [rest of the container styling and properties]

    const form = document.createElement('form');
    // ... [rest of the form styling and properties]

    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.defaultValue = alldata?.name;
    nameInput.style.marginBottom = '10px';
    const nameDiv = document.createElement('div');
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    // ... [rest of the input fields and labels for username, number, and description]

    form.appendChild(nameDiv);  // Append the name field
    // ... [append other divs and buttons]

    async function submitForm() {
      const name = nameInput.value;
      const permission = usernameInput.value;
      // ... [rest of the values]

      if(name.trim() && permission.trim() && reputation_requirement.trim()) {
        const formData = {
          name: name,
          // ... [rest of the formData]
        };

        fetch(`${url}/wiki/category/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          body: JSON.stringify(formData),
        })
        // ... [rest of the fetch process]
      } else {
        swal("Warning!", "Name, Permission name, and Points are required", "warning");
      }
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm();
    });

    const handleContainerClick = function(event) {
      if (event.target === container) {
        cleanup();
      }
    };
    container.addEventListener('click', handleContainerClick);

    return {
      form: form,
      cleanup: function() {
        cleanup();
        container.removeEventListener('click', handleContainerClick);
      }
    };
  })
  .catch(error => {
    console.error('API Error:', error);
  });
}
