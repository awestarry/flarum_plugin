import { fetchCsrfToken } from "../forum/components/CsrfToken";
import { EditModalForm } from "./components/admin_points_rule";
import swal from 'sweetalert';


export function AllPointsRule(){
  let url =app.forum.attribute('apiUrl');

async  function deleteModalForm(e){
  let id = $(this).attr("id");
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete",
    icon: "warning",
    dangerMode: true,
    buttons:["Cancel","Ok"]
  })
  .then(async(willDelete) => {
    if (willDelete) {
      swal("Deleted!", "Deleted successfully", "success");

  console.log(id,"SDsadasd")
    const csrfToken =await fetchCsrfToken();
    // Now you have the CSRF token in the "csrfToken" variable
    // Make an API request to a hypothetical endpoint
    fetch(`${url}/newflarum/public/permission/delete/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },

    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
         
        AllPointsRule()
        // You can perform actions like showing a success message or redirecting the user.
      })
      .catch((error) => {
        // Handle errors
        console.error('API Error:', error);
        // You can display an error message to the user.
      });
    }
  });
  }

    $(document).ready(async function() {
        let main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
        let extensionPage=main_sidtechno_plugin.find(".ExtensionPage-permissions")
        let permission_container=extensionPage.find(".container")
  const tableContainer = permission_container[1];

        if (main_sidtechno_plugin.length > 0) {
            $('.sid_permission_point_btn,.sid_view_point_btn').removeClass('active');
            $(".sid_points_rule_btn ").addClass('active');

          const csrfToken =await fetchCsrfToken();

          fetch(`${url}/points_rule`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken,
            }
          })
            .then((response) => response.json())
            .then((res) => {
              console.log(res.data)
              // Handle the API response here
            // Define variables for pagination
const itemsPerPage = 15; // Number of items to display per page
let currentPage = 1; // Current page

// Function to display data for the current page
function displayDataForPage() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay = res.data?.slice(startIndex, endIndex) || [];

  const rowsHTML = dataToDisplay.map(item => `
      <tr>
          <td>${item.condition.replaceAll("_", " ")}</td>
          <td>${item.score}</td>
          <td>${item.limit}</td>
          <td>
              <button id="${item.id}" class='Button permission_table_edit_btn'>Edit</button>
          </td>
      </tr>
  `).join('');

  const tableHTML = `
      <table class='sid_permission_table'>
          <thead>
              <tr>
                  <th>Conditions</th>
                  <th>Points</th>
                  <th>Limits</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              ${rowsHTML}
          </tbody>
      </table>`;

  tableContainer.innerHTML = tableHTML;

  // Attach event listeners
  document.querySelectorAll(".permission_table_edit_btn").forEach(btn => {
      btn.addEventListener("click", EditModalForm);
  });
  document.querySelectorAll(".permission_table_delete_btn").forEach(btn => {
      btn.addEventListener("click", deleteModalForm);
  });

  // Update pagination controls
  updatePaginationControls();
}


// Function to update pagination controls
function updatePaginationControls() {
  const paginationControls = document.createElement('div');
  paginationControls.classList.add('pagination_btn_div');

  const totalPages = Math.ceil(res.data.length / itemsPerPage);
  function setPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      currentPage = pageNumber;
      displayDataForPage();
    }
  }
  paginationControls.innerHTML = `
    <button class="Button" id="prevPage">Previous</button>
    <button class="Button" id="nextPage">Next</button>
  `;
  tableContainer.appendChild(paginationControls);

  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  prevPageButton.addEventListener('click', () => setPage(currentPage - 1));
  nextPageButton.addEventListener('click', () => setPage(currentPage + 1));

  // Disable Previous and Next buttons when appropriate
  if (currentPage === 1) {
    prevPageButton.disabled = true;
  } else {
    prevPageButton.disabled = false;
  }

  if (currentPage === totalPages) {
    nextPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
  }
}

// Check if there is data to display
if (res.message && res.data.length  > 0) {

  // Calculate the total number of pages
  const totalPages = Math.ceil(res.data.length  / itemsPerPage);

  // Function to update the page number and re-display data


  // Initial display of data and pagination controls
  displayDataForPage();
}

              // You can perform actions like showing a success message or redirecting the user.
            })
            .catch((error) => {
              // Handle errors
              console.error('API Error:', error);
              // You can display an error message to the user.
            });
        }
    })
}
