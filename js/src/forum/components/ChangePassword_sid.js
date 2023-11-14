import { ChangePasswordModalForm } from "./ChangePasswordModal";
import { EnterPasswordModalForm } from "./EnterPasswordModal";

export function ChangPasswordSidBtn (){

    $(document).ready(function () {
        let main_sidtechno_plugin = $('body .App--user .App-content #content .UserPage');
        
        if (main_sidtechno_plugin.length) {
            
            let curr_url=document.URL
            if(curr_url.includes("/settings")){
                 //<---- hide old btn in setting page ---->
 $('body .App--user .App-content #content .UserPage .sideNavContainer .SettingsPage .item-account .item-changePassword,.item-changeEmail').hide();
              
                 //<---- show new btn in setting page ---->
 
 $('body .App--user .App-content #content .UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul').append(`
 <li class="item-sid_btn-changePassword" ><button class="Button" type="button"><span class="Button-label">Change Password</span></button></li>
 <li class="item-sid_btn-editSecurityQuetions" ><button class="Button" type="button"><span class="Button-label">Change Security Questions</span></button></li>
 `);

            }
    
          // <======== click on change password   ==================>
            
          $('.UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul .item-sid_btn-changePassword').click(function(){
            ChangePasswordModalForm()
          });

          // <======== click on change Edit security questions   ==================>

          $('.UserPage .sideNavContainer .SettingsPage .item-account .Settings-account ul .item-sid_btn-editSecurityQuetions').click(function(){
            EnterPasswordModalForm()
          });

        }
      });   
}
