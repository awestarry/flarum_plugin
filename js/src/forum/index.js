import app from 'flarum/forum/app';
import { CustomModalForm } from './components/CustomModalForm';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { PointsNavProfile } from './components/PointsNav';
import swal from 'sweetalert';
import { ChangPasswordSidBtn } from './components/ChangePassword_sid';
import { extend } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import AddCollection from './components/AddCollection';
import Collect from './components/Collect';
import discussion from './components/discussion';
import wiki from './components/wiki';
import wikipost from './components/wikipost';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import LinkButton from 'flarum/common/components/LinkButton';
// import DiscussionPageList from './components/DiscussionPageList';

let isFormDisplayed = false;
let myForm;
let loveUpButton;

app.initializers.add('sidtechno/customlogin', () => {

  app.routes.wiki = {
    path: '/wiki',
    component: wiki
};

app.routes.wikiPost = {path: '/wiki/post/:slug', component: wikipost};

// app.routes.Post = {path: '/post/:slug', component: discussion};
app.routes.Post = {path: '/post/:slug', component: discussion};
app.routes['sidtechno-customlogin-post'] = {
  path: '/post/:slug/:id?',
  component: discussion
};
  Collect()
  // DiscussionPageList()
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('wiki', <LinkButton class='wiki-btn' href={app.route('wiki')}>Wiki</LinkButton>);
  });

// <================= Getting response of  api which is calling on other pages [START] ==========>

  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function () {
    //<--------- Store the URL for later reference ------->
    this._url = arguments[1];
    originalOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function () {
    const xhr = this;
    const originalOnLoad = xhr.onload;

    xhr.onload = function () {
      // <---------- Check if request is complete  ------>
      if (xhr.readyState === 4) {
        // <-- ----- targeting only posts api ----------->

        if (xhr?._url && xhr._url?.includes('/posts/')) {
          let api_response = JSON.parse(xhr.responseText);

          if (api_response?.errors) {
            let msg = api_response?.errors[0]?.detail;
            swal({
              text: msg,
              icon: 'error',
              dangerMode: true,
              buttons: ['Ok'],
            });
          }

        }
      }
      if (originalOnLoad) {
        originalOnLoad.apply(this, arguments);
      }
    };

    originalSend.apply(this, arguments);
  };

 // <================= Getting response of  api which is calling on other pages [END] ==========>



  $(document).ready(function () {
    PointsNavProfile();
    ChangPasswordSidBtn()
    // Select the first div inside the body
    let firstDiv = $('body > div:first-child')[0];

    // Create a Mutation Observer to watch for DOM changes
    const observer = new MutationObserver(function (mutationsList, observer) {
      // Check if any mutations are relevant to your page changes

      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && $(mutation.target).find('.UserPage').length > 0) {

          PointsNavProfile();
          ChangPasswordSidBtn()
          break;
        }
      }
    });

    const observerConfig = { childList: true, subtree: true };
    observer.observe(firstDiv, observerConfig);
  });
  document.addEventListener('DOMContentLoaded', function () {

  });
  console.log("ASD>>454545<<")
  console.log('[sidtechno/customlogin] Hello, forum!');
});




// Select the anchor element inside the paragraph with the class name LogInModal-forgotPassword
// Select the element with the class name 'LogInModal-forgotPassword'
const forgotPasswordElements = document.getElementsByClassName('LogInModal-forgotPassword');

// Check if any elements were found
if (forgotPasswordElements.length > 0) {
  // Change the text content of the first selected element to 'Hello World'
  forgotPasswordElements[0].innerText = 'Hello World';
} else {

}
function signup_security_question() {
  setTimeout(()=>{
    const signUpButton = $('.Form-group button');
    $('.SignUpModal .Form-group input[name=email]').hide()
 let form =   $('.SignUpModal .Form')[0]

    const questionSelect = document.createElement('select');
    questionSelect.style.width = '100%';
    questionSelect.style.marginBottom = '10px';
    questionSelect.style.color = 'rgb(102 124 153)';
    extend(SignUpModal.prototype, 'submitData', function (data) {
      const newData = data;
      let questionsData=$('.SignUpModal .Form .signup-question')[0]
      newData['email'] =newData['username']?`${newData['username']}@sidtechno.com`:"";
      newData['question1'] ="";
      newData['answer1'] = "";
      newData['question2'] = "";
      newData['answer2'] = "";
      newData['question3'] = "";
      newData['answer3'] = "";
if(questionsData.querySelectorAll(".secure-question").length>0){
  let values_arr=questionsData.querySelectorAll(".secure-question")
  newData['question1'] =$(values_arr[0]).find('p')[0] ?$(values_arr[0]).find('p')[0].innerText??"":"";
  newData['answer1'] =$(values_arr[0]).find('.secure-ans input').val()? $(values_arr[0]).find('.secure-ans input').val().trim()??"":"";
  newData['question2'] =$(values_arr[1]).find('p')[0] ?$(values_arr[1]).find('p')[0].innerText??"":"";
  newData['answer2'] = $(values_arr[1]).find('.secure-ans input').val()?$(values_arr[1]).find('.secure-ans input').val().trim()??"":"";
  newData['question3'] = $(values_arr[2]).find('p')[0] ?$(values_arr[2]).find('p')[0].innerText??"":"";
  newData['answer3'] = $(values_arr[2]).find('.secure-ans input').val()? $(values_arr[2]).find('.secure-ans input').val().trim()??"":"";
}


      // return newData;
    });
    questionSelect.classList.add('FormControl');

    const questions = ["Please Answer Any Three Question For Security Reasons", 'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?','What is your favorite subject in middle school?','What is the name of your first secret crush in middle school?'];
    let selectedQuestions = [];
    function refreshDropdown() {
      questionSelect.innerHTML = '';
      if (selectedQuestions.length < 3) {
          questions.forEach((question, index) => {
              if (!selectedQuestions.includes(index)) {
                  const option = document.createElement('option');
                  option.value = index;
                  option.text = question;
                  questionSelect.appendChild(option);
              }
          });
          questionSelect.style.display = ''; // Show the dropdown
      } else {
          questionSelect.style.display = 'none'; // Hide the dropdown
      }
  }

    refreshDropdown();
   $(form).find('.Form-group:has(button)').before(questionSelect);

    const answerSection = document.createElement('div');
    answerSection.style.width = '100%';
    answerSection.classList.add('signup-question');

    questionSelect.addEventListener('change', function () {
      const selectedQuestionIndex = parseInt(questionSelect.value);
      if (!isNaN(selectedQuestionIndex) && !selectedQuestions.includes(selectedQuestionIndex)) {
          selectedQuestions.push(selectedQuestionIndex);

          const questionDiv = document.createElement('div');
          questionDiv.style.width = '100%';
          questionDiv.classList.add(  `secure-question`);


          const questionP = document.createElement('p');
          questionP.innerText = questions[selectedQuestionIndex];
          questionDiv.appendChild(questionP);

          const answerDiv = document.createElement('div');
          answerDiv.style.display = 'flex';
          answerDiv.style.alignItems = 'center';
          answerDiv.style.justifyContent = 'space-between';
          answerDiv.style.width = '100%';
          answerDiv.style.marginBottom = '10px';
          answerDiv.classList.add(  `secure-ans`);

          const answerInput = document.createElement('input');
          answerInput.setAttribute('type', 'text');
          answerInput.setAttribute('placeholder', 'Your Answer');
          answerInput.style.padding = '10px';
          answerInput.style.flexGrow = '1';
          answerInput.classList.add('FormControl');

          answerDiv.appendChild(answerInput);

          const crossIcon = document.createElement('span');
          crossIcon.innerHTML = '&times;';
          crossIcon.style.cursor = 'pointer';
          crossIcon.style.marginLeft = '10px';
          crossIcon.addEventListener('click', function (event) {
            const index = selectedQuestions.indexOf(selectedQuestionIndex);
            if (index > -1) {
                selectedQuestions.splice(index, 1);
                answerSection.removeChild(questionDiv);
                refreshDropdown();
            }
            event.stopPropagation(); // Prevent the event from propagating up
        });

          answerDiv.appendChild(crossIcon);

          questionDiv.appendChild(answerDiv);
          answerSection.appendChild(questionDiv);
          refreshDropdown();

          // Move the dropdown to the end of the form
          form.removeChild(questionSelect);
         $(form).find('.Form-group:has(button)').before(questionSelect);

      }
  });


   $(form).find('.Form-group:has(button)').before(answerSection);

  },100)
}
$(document).on('click', '.item-signUp,.LogInModal-signUp a',signup_security_question)
$(document).on('click', '.item-logIn', function () {
  $('.Modal-backdrop').show();
  setTimeout(() => {
    $('.LogInModal-forgotPassword').hide();
    var modalFooter = document.querySelector('.Modal-footer');
  //  $('.LogInModal-signUp a').click(signup_security_question)
    // Naya div element banate hain
    var newDiv = document.createElement('div');

    // Us div ke andar text daalte hain
    newDiv.textContent = 'Forgot Password';

    // Naya div ko Modal-footer ke andar, sabse pehle append karte hain
    modalFooter.insertBefore(newDiv, modalFooter.firstChild);
    newDiv.addEventListener('click', function () {
      // Yeh function call hoga jab newDiv par click kiya jayega
      myForm = ForgotPasswordModal();
      $('.ModalManager').hide();
      $('.Modal-backdrop').hide();
    });
  }, 100);
});
