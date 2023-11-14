import app from 'flarum/admin/app';
import CustomAdminPage from './components/CustomAdminPage';
import {CustomModalForm} from './components/Admin_addpoint_modal'
import { AllPermission } from './AllPemissionData';
import { AllPointsRule } from './AllPointsRule';
import { AllCategories } from './AllCategories';

app.initializers.add('sidtechno/customlogin', () => {
  app.extensionData
    .for('sidtechno/customlogin') // Changed to match your extension id
    .registerPage({
      component: CustomAdminPage,
      icon: 'fas fa-chart-bar', // Choose an appropriate FontAwesome icon
      label: 'Custom Data',
      path: '/custom-data',
    });
  console.log('[sidtechno/customlogin] Hello, admin!');

  $(document).ready(function() {
    let main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
    let main_page= $("#content");
    const observer = new MutationObserver(function (mutationsList, observer) {
      // Check if any mutations are relevant to your page changes

      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' &&$(mutation.target).find('.sidtechno-customlogin-Page').length > 0) {
          console.log(mutation.target,'sadsada',$(mutation.target).find('.sidtechno-customlogin-Page'));
          if ($(mutation.target).find('.sidtechno-customlogin-Page').length > 0) {

            AllPermission()
            let extensionHeaderDiv = $(mutation.target).find(".ExtensionPage-header");
            let extensionBodyDiv = $(mutation.target).find(".ExtensionPage-body");

            let containerDiv = extensionHeaderDiv.find(".container");
            let containerDiv_body = extensionBodyDiv.find(".container");
            if (containerDiv.length > 0) {
              // let helpTextElements = containerDiv.find(".helpText");
              let user_point = containerDiv_body.find(".ExtensionTitle");

              // let buttonElement = $("<button>").text("Add Points").addClass("sid_add_point_btn btn btn-primary"); // Add a custom class to the button
              let button_permission = $("<button>").text("View Permissions").addClass("sid_permission_point_btn Button btn-primary"); // Add a custom class to the button
              let button_points_rule = $("<button>").text("Points Rules").addClass("sid_points_rule_btn Button btn-primary"); // Add a custom class to the button
              // let button_category = $("<button>").text("Category").addClass("sid_category_btn Button btn-primary");

              containerDiv.on("click", ".sid_add_point_btn", function() {

                CustomModalForm()

              });

              containerDiv_body.on("click", ".sid_permission_point_btn", function() {

                AllPermission()

              });
              containerDiv_body.on("click", ".sid_points_rule_btn", function() {

                AllPointsRule()

              });
              //  containerDiv_body.on("click", ".sid_category_btn", function() {
              //   AllCategories();  // Assuming you have defined this function
              //   });




              // ///// add point btn ////////
              // helpTextElements.each(function() {

              //   buttonElement.clone().insertAfter($(this));
              // });

              // ///// add point btn ////////

              user_point.each(function() {

                button_points_rule.clone().insertAfter($(this));
                button_permission.clone().insertAfter($(this));
                // button_category.clone().insertAfter($(this));
                // button_subcategory.clone().insertAfter($(this));
              });
            }
          }
          break;
        }
      }
    });

    const observerConfig = { childList: true };
    observer.observe(main_page[0], observerConfig);

    if (main_sidtechno_plugin.length > 0) {

      AllPermission()
      let extensionHeaderDiv = main_sidtechno_plugin.find(".ExtensionPage-header");
      let extensionBodyDiv = main_sidtechno_plugin.find(".ExtensionPage-body");

      let containerDiv = extensionHeaderDiv.find(".container");
      let containerDiv_body = extensionBodyDiv.find(".container");
      if (containerDiv.length > 0) {
        // let helpTextElements = containerDiv.find(".helpText");
        let user_point = containerDiv_body.find(".ExtensionTitle");

        // let buttonElement = $("<button>").text("Add Points").addClass("sid_add_point_btn btn btn-primary"); // Add a custom class to the button
        let button_permission = $("<button>").text("View Permissions").addClass("sid_permission_point_btn Button btn-primary"); // Add a custom class to the button
        let button_points_rule = $("<button>").text("Points Rules").addClass("sid_points_rule_btn Button btn-primary"); // Add a custom class to the button
        // let button_category = $("<button>").text("Category").addClass("sid_category_btn Button btn-primary");

        containerDiv.on("click", ".sid_add_point_btn", function() {

          CustomModalForm()

        });

        containerDiv_body.on("click", ".sid_permission_point_btn", function() {

          AllPermission()

        });
        containerDiv_body.on("click", ".sid_points_rule_btn", function() {

          AllPointsRule()

        });
        containerDiv_body.on("click", ".sid_category_btn", function() {
          AllCategories();  // Assuming you have defined this function
        });




        // ///// add point btn ////////
        // helpTextElements.each(function() {

        //   buttonElement.clone().insertAfter($(this));
        // });

        // ///// add point btn ////////

        user_point.each(function() {

          button_points_rule.clone().insertAfter($(this));
          button_permission.clone().insertAfter($(this));
          button_category.clone().insertAfter($(this));
        });
      }
    }
  });
});
