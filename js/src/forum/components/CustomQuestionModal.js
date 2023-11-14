import swal from "sweetalert";
import { fetchCsrfToken } from "./CsrfToken";


export function CustomQuestionModal() {
  let url =app.forum.attribute('apiUrl');;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f0f0f0';
    modal.style.padding = '20px';
    modal.style.width = '30%';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';

    const title = document.createElement('h2');
    title.innerText = 'Answer Questions';
    title.style.backgroundColor = "var(--button-primary-bg)";
    title.style.padding = '10px 0px';
    title.style.color = 'white';
    title.style.position = 'relative';
    title.style.width ="100%",
    title.style.textAlign="center"

    const crossIcon = document.createElement('span');
    crossIcon.innerHTML = '&times;';
    crossIcon.style.position = 'absolute';
    crossIcon.style.right = '10px';
    crossIcon.style.top = '10px';
    crossIcon.style.cursor = 'pointer';

    crossIcon.addEventListener('click', cleanup);
    title.appendChild(crossIcon);
    modal.appendChild(title);


    const questionSelect = document.createElement('select');
    questionSelect.style.width = '100%';
    questionSelect.classList.add('FormControl');

    const questions = ["Please Answer Any Three Question",'What is the name of your oldest or childhood friend?', 'What is your favorite sport or game?', 'What was the name of your first pet?', 'What is your biggest life goal or aspiration?','What is your favorite subject in middle school?','What is the name of your first secret crush in middle school?',];
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
          modal.insertBefore(questionSelect, submitButton);
      } else {
          if (modal.contains(questionSelect)) {
              modal.removeChild(questionSelect);
          }
      }
  }

    refreshDropdown();
    modal.appendChild(questionSelect);

    const answerSection = document.createElement('div');
    answerSection.style.width = '100%';

   questionSelect.addEventListener('change', function () {
    const selectedQuestionIndex = parseInt(questionSelect.value);
    if (!isNaN(selectedQuestionIndex)) {
        selectedQuestions.push(selectedQuestionIndex);

        const questionDiv = document.createElement('div');
        questionDiv.style.width = '100%';

        const questionP = document.createElement('p');
        questionP.innerText = questions[selectedQuestionIndex];
        questionDiv.appendChild(questionP);

        const answerDiv = document.createElement('div');
        answerDiv.style.display = 'flex';
        answerDiv.style.alignItems = 'center';
        answerDiv.style.justifyContent = 'space-between';
        answerDiv.style.width = '100%';
        answerDiv.style.marginBottom = '10px';

        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'text');
        answerInput.setAttribute('placeholder', 'Your Answer');
        // answerInput.style.margin = '10px';
        answerInput.style.padding = '10px';
        answerInput.style.flexGrow = '1';
        answerInput.classList.add('FormControl');

        answerDiv.appendChild(answerInput);

        const crossIcon = document.createElement('span');
        crossIcon.innerHTML = '&times;';
        crossIcon.style.cursor = 'pointer';
        crossIcon.style.marginLeft = '10px';
        crossIcon.addEventListener('click', function () {
            const index = selectedQuestions.indexOf(selectedQuestionIndex);
            if (index > -1) {
                selectedQuestions.splice(index, 1);
                answerSection.removeChild(questionDiv);
                refreshDropdown();
            }
        });
        answerDiv.appendChild(crossIcon);

        questionDiv.appendChild(answerDiv);
        answerSection.appendChild(questionDiv);
        refreshDropdown();
    }
});

    modal.appendChild(answerSection);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Submit Answer';
    submitButton.style.marginTop = '10px';
    submitButton  .className = 'Button Button--primary';
    submitButton.disabled = true;

    container.appendChild(modal);
    document.body.appendChild(container);

    function cleanup() {
        container.remove();
    }

    submitButton.addEventListener('click', async function (event) {
      event.preventDefault();

      // Gather the data
      const userId = localStorage.getItem("userId"); // Replace with the actual user ID
      const answers = Array.from(answerSection.children).map(child => {
          const questionP = child.querySelector('p');
          const answerInput = child.querySelector('input');
          return {
              question: questionP.innerText,
              answer: answerInput.value
          };
      });

      // Prepare the payload
      const payload = {
          user_id: userId,
          question_1: answers[0]?.question,
          answer_1: answers[0]?.answer,
          question_2: answers[1]?.question,
          answer_2: answers[1]?.answer,
          question_3: answers[2]?.question,
          answer_3: answers[2]?.answer,
      };

      if(answers[0]?.answer.trim()&&answers[1]?.answer.trim()&&answers[2]?.answer.trim()){ try {
         const csrfToken = await fetchCsrfToken();
          // Send the data to the API endpoint
          const response = await fetch(`${url}/question/store`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-Token': csrfToken,
                  // Include any additional headers if needed, e.g., authentication headers
              },
              body: JSON.stringify(payload),
          });

          // Handle the response
          if (response) {
              const data = await response.json();
               
              location.reload();
      cleanup();

              // Perform any additional actions based on the response, e.g., show a success message
          } else {
              console.error('API Error:', response.statusText);
              // Handle the error, e.g., show an error message to the user
          }
      } catch (error) {
          console.error('Network Error:', error);
          // Handle the network error, e.g., show an error message to the user

        }}else{
        swal("All answers are required","","error")
      }

  });

    container.addEventListener('click', function (event) {
        if (event.target === container) {
            cleanup();
        }
    });

    setInterval(() => {
      submitButton.disabled = selectedQuestions.length < 3;
  }, 100);

    modal.appendChild(submitButton);

    return {
        modal: modal,
        cleanup: cleanup,
    };
}
