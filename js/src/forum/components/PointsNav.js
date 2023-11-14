import { AllPointsRule } from "./AllPointsRule_user";
import { PointsUsersTable } from "./PointsUsersTable";

export function PointsNavProfile() {
  $(document).ready(function () {
    let main_sidtechno_plugin = $('body .App--user');
    let user_point_nav_btn = $(
      '<li class="item-points profile-nav-points"><a class="hasIcon" href="/muzammil" active=""><i aria-hidden="true" class="icon far fa-star Button-icon"></i><span class="Button-label">Points <span class="Button-badge">0</span></span></a></li>'
    );

    // Add the new users points side nav button
    if (main_sidtechno_plugin) {
      if ($('body .App--user .App-content #content .UserPage .container .dropdown-menu .item-points').length === 0) {
        $('body .App--user .App-content #content .UserPage .container .dropdown-menu .Dropdown-separator').before(user_point_nav_btn);
      }

      // <======== click on nav in[profiles] points nav btn  to see point   ==================>
      
      
      $('.profile-nav-points').click(PointsUsersTable);
    }
  });
}
