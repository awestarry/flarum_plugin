import { PointsUsersTable } from "./PointsUsersTable";

export function AllPointsRule() {
  let url =app.forum.attribute('apiUrl');;

    $(document).ready(function () {
      let main_sidtechno_plugin = $('body .App--user');

      // Add the new users points side nav button
      if (main_sidtechno_plugin) {

         //<============= get all points ===========>
          fetch(`${url}/permission/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      })
        .then((response) => response.json())
        .then((res) => {

          const itemsPerPage = 10; // Number of items to display per page
          let currentPage = 1; // Current page

          // Function to display data for the current page
          function displayDataForPage() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const dataToDisplay = res.data?.point_rules.slice(startIndex, endIndex);


            const tableHTML = `
           <div class='users_points_main'>
            <button class='Button users_points_main_btn'><b>Points </b> </button>
            <table class='users_points_table sid_permission_table'>
            <thead>
            <tr>
              <th>Conditions</th>
              <th>Points</th>
              <th>Limits</th>
            </tr>
          </thead>
          <tbody>
            ${dataToDisplay.map(item => `
              <tr>
                <td>${item.condition.replaceAll("_"," ")}</td>
                <td>${item.score}</td>
                <td>${item.limit}</td>
              </tr>
            `).join('')}
          </tbody>
              </table>
            </div>

            `;

          $('.UserPage-content').html(tableHTML);

            updatePaginationControls();
          }
          // displayDataForPage()
          // Function to update pagination controls
          function updatePaginationControls() {
            const paginationControls = document.createElement('div');
            paginationControls.classList.add('pagination_btn_div');

            const totalPages = Math.ceil(res.data?.point_rules.length / itemsPerPage);
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
            $('.users_points_main').append(paginationControls);

            const prevPageButton = document.getElementById('prevPage');
            const nextPageButton = document.getElementById('nextPage');

            prevPageButton.addEventListener('click', () => setPage(currentPage - 1));
            nextPageButton.addEventListener('click', () => setPage(currentPage + 1));

          // <------------   click on points rule btn ---------------->

          $(".users_points_main_btn").click(PointsUsersTable)


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

          displayDataForPage()
          console.log(res)
        })
        .catch((error) => {
          // Handle errors
          console.error('API Error:', error);
          // You can display an error message to the user.
        });


      }
    });
  }
