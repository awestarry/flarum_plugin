import { AllPointsRule } from "./AllPointsRule_user";

export function PointsUsersTable(e){
  let url =app.forum.attribute('apiUrl');



        e.preventDefault();
        $('.UserPage-nav .Dropdown-menu li').removeClass('active');
        $(this).addClass('active');
        // Change the URL without page reload
        // history.pushState(null, null, '/newflarum/public/u/muzammil/points');



       //<============= get all points ===========>


        fetch(`${url}/user/point/detail`, {
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
          const dataToDisplay = res.data.slice(startIndex, endIndex);

          const tableHTML = `
         <div class='users_points_main'>
          <button class='Button users_points_rules_main_btn'><b>Points Rules</b></button>
          <div class='users-total-points'><span>Total Points : ${res?.Total?.current_point}</span></div>
          <table class='users_points_table sid_permission_table'>
              <thead>
                <tr>
                  <th>Points Reasons</th>
                  <th>Points</th>


                </tr>
              </thead>
              <tbody>
                ${dataToDisplay.map(item => `
                  <tr>
                    <td>${item.condition?.replaceAll("_"," ") ??""}</td>
                    <td>${item.points??""}</td>


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
          $('.users_points_main').append(paginationControls);

          const prevPageButton = document.getElementById('prevPage');
          const nextPageButton = document.getElementById('nextPage');

          prevPageButton.addEventListener('click', () => setPage(currentPage - 1));
          nextPageButton.addEventListener('click', () => setPage(currentPage + 1));

          // <------------   click on points rule btn ---------------->

          $(".users_points_rules_main_btn").click(function(){

            AllPointsRule()
           })



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
       
      })
      .catch((error) => {
        // Handle errors
        console.error('API Error:', error);
        // You can display an error message to the user.
      });


}
