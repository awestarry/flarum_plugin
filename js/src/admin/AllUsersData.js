import { fetchCsrfToken } from "../forum/components/CsrfToken";
import { EditModalForm } from "./components/Admin_EditPoint_Modal";
import swal from 'sweetalert';


export function AllUsersData(){

  let url =app.forum.attribute('apiUrl');


    $(document).ready(async function() {
        let main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
        let extensionPage=main_sidtechno_plugin.find(".ExtensionPage-permissions")
        let permission_container=extensionPage.find(".container")
  const tableContainer = permission_container[1];

        if (main_sidtechno_plugin.length > 0) {
          $('.sid_permission_point_btn,.sid_points_rule_btn').removeClass('active');
          $(".sid_view_point_btn  ").addClass('active');
        //   const csrfToken =await fetchCsrfToken();

          fetch(`${url}/user/points`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',

            }
          })
            .then((response) => response.json())
            .then((res) => {
              // Handle the API response here
            // Define variables for pagination
const itemsPerPage = 4; // Number of items to display per page
let currentPage = 1; // Current page

// Function to display data for the current page
function displayDataForPage() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay = res.data.slice(startIndex, endIndex);

  const tableHTML = `
    <table class='sid_permission_table'>
      <thead>
        <tr>
          <th>SNo </th>
          <th>Username</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        ${dataToDisplay.map((item,index) => `
          <tr>
            <td>${index+1}</td>
            <td>${item.username}</td>
            <td>${item.current_point??""}</td>

          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = tableHTML;

  // editbtn.addEventListener("click",EditModalForm())
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
if (res.success && res.data.length > 0) {

  // Calculate the total number of pages
  const totalPages = Math.ceil(res.data.length / itemsPerPage);

  // Function to update the page number and re-display data


  // Initial display of data and pagination controls
  displayDataForPage();
}else{

  const tableHTML = `
    <table class='sid_permission_table'>
      <thead>
        <tr>
          <th>SNo </th>
          <th>Username</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  `;

  tableContainer.innerHTML = tableHTML;
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
