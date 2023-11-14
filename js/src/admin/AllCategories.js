import { fetchCsrfToken } from "../forum/components/CsrfToken";
import { editcategory } from './components/editcategory';
import swal from 'sweetalert';

export function AllCategories() {
    const url = app.forum.attribute('apiUrl');

    async function deleteModalForm(e) {
        let id = $(this).attr("id");
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Ok"]
        }).then(async (willDelete) => {
            if (willDelete) {
                swal("Deleted!", "Deleted successfully", "success");
                const csrfToken = await fetchCsrfToken();
                fetch(`${url}/wiki/category/${id}`, {
                    method: 'Delete',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken,
                    }
                }).then((response) => response.json())
                .then((data) => {

                    AllSubCategories(); // Refresh the data
                }).catch((error) => {
                    console.error('API Error:', error);
                });
            }
        });
    }

    $(document).ready(async function() {
        const main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
        const extensionPage = main_sidtechno_plugin.find(".ExtensionPage-permissions");
        const permission_container = extensionPage.find(".container");
        const tableContainer = permission_container[1];
        $('.sid_permission_point_btn,.sid_view_point_btn').removeClass('active');
        $('.sid_points_rule_btn,.sid_view_point_btn').removeClass('active');
        $(".sid_category_btn").addClass('active');

        if (tableContainer) {
            const csrfToken = await fetchCsrfToken();
            fetch(`${url}/wiki/category`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
            .then((res) => {
                const itemsPerPage = 15;
                let currentPage = 1;

                function displayDataForPage() {
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const dataToDisplay = res.data?.slice(startIndex, endIndex) || [];

                    const rowsHTML = dataToDisplay.map(item => `
                        <tr>
                            <td>${item.name}</td>
                        </tr>
                    `).join('');

                    const tableHTML = `
                        <table class='sid_subcategory_table'>
                            <thead>
                                <tr>
                                    <th>Category</th>

                                </tr>
                            </thead>
                            <tbody>
                                ${rowsHTML}
                            </tbody>
                        </table>`;

                    tableContainer.innerHTML = tableHTML;

                    $(".subcategory_table_edit_btn").each(function() {
                      $(this).on("click", editcategory);
                  });
                  $(".subcategory_table_delete_btn").each(function() {
                      $(this).on("click", deleteModalForm);
                  });


                    updatePaginationControls();
                }

                function updatePaginationControls() {
                    const totalPages = Math.ceil(res.data.length / itemsPerPage);

                    const paginationControls = document.createElement('div');
                    paginationControls.classList.add('pagination_btn_div');

                    paginationControls.innerHTML = `
                        <button class="Button" id="prevPage">Previous</button>
                        <button class="Button" id="nextPage">Next</button>
                    `;
                    tableContainer.appendChild(paginationControls);

                    document.getElementById('prevPage').addEventListener('click', () => {
                        if (currentPage > 1) {
                            currentPage--;
                            displayDataForPage();
                        }
                    });

                    document.getElementById('nextPage').addEventListener('click', () => {
                        if (currentPage < totalPages) {
                            currentPage++;
                            displayDataForPage();
                        }
                    });
                }

                if (res.data && res.data.length > 0) {
                    displayDataForPage();
                }
            }).catch((error) => {
                console.error('API Error:', error);
            });
        }
    });
}
