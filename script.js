const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: [
      "Kangaroo",
      "Kiwi bird",
      "Koala",
      "Emu"
    ],
    answer: "Kiwi bird"
  },
  {
    question: "What is the capital city of New Zealand?",
    options: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    answer: "Wellington"
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: [
      "Maori",
      "Aborigines",
      "Inuit",
      "Sami"
    ],
    answer: "Maori"
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series"
    ],
    answer: "Lord of the Rings trilogy"
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    answer: "Mount Cook (Aoraki)"
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: [
      "Auckland",
      "Wellington",
      "Dunedin",
      "Queenstown"
    ],
    answer: "Auckland"
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: [
      "Cricket",
      "Rugby Union",
      "Soccer",
      "Netball"
    ],
    answer: "Rugby Union"
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: [
      "Tasman Sea",
      "Coral Sea",
      "South China Sea",
      "Arafura Sea"
    ],
    answer: "Tasman Sea"
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: [
      "Haka",
      "Hongi",
      "Powhiri",
      "Waka"
    ],
    answer: "Hongi"
  },
  {
    question: "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: [
      "Rotorua",
      "Christchurch",
      "Hamilton",
      "Napier"
    ],
    answer: "Rotorua"
  }
];

// Add your code underneath this comment.

const quizQuestion = document.getElementById('quiz-question');
quizQuestion.innerText = (questions[0].question);

// The 'quizQuestion' variable targets quiz-question id in index.html. The 'quizQuestion.innerText' function replaces the 'quiz-question' text with text from the first object in the questions array.

const quizAnswer1 = document.getElementById('answer-1');
quizAnswer1.innerText = (questions[0].options[0]);

const quizAnswer2 = document.getElementById('answer-2');
quizAnswer2.innerText = (questions[0].options[1]);

const quizAnswer3 = document.getElementById('answer-3');
quizAnswer3.innerText = (questions[0].options[2]);

const quizAnswer4 = document.getElementById('answer-4');
quizAnswer4.innerText = (questions[0].options[3]);

// The 'quizAnswer' variables target the associated answer id's in index.html. The 'quizAnswer.innerText' functions replace the text from 'answer-<>' elements with text from the 'questions[0].options' arrays.

let button1 = document.getElementById("answer-1");
let button2 = document.getElementById("answer-2");
let button3 = document.getElementById("answer-3");
let button4 = document.getElementById("answer-4");

// Declared three varialbes for the answer buttons and linked them to the html script.

button1.addEventListener("click", changeColorWhenClicked);
button2.addEventListener("click", changeColorWhenClicked);
button3.addEventListener("click", changeColorWhenClicked);
button4.addEventListener("click", changeColorWhenClicked);

// Added event listeners to each button that run the "changeColorWhenClicked" function when they are pressed.

let selectedAnswer = null;

// Initialising a selectedAnswer variable with a null value. This means  the initial value when no answer is selected is null.                                                

function changeColorWhenClicked (event) {
  button1.style.backgroundColor = "#F7DBA7";
  button2.style.backgroundColor = "#F7DBA7";
  button3.style.backgroundColor = "#F7DBA7";
  button4.style.backgroundColor = "#F7DBA7";
  event.target.style.backgroundColor = "#D1DCF0";
  selectedAnswer = event.target.innerText;
}

// The changeColorWhenClicked function first resets all of the answers back to the original color. Then changes the color of the answer that was clicked. It does this by using the event property of the event object to listen for an event, in this case, the button been clicked. Once a button is clicked, the selectedAnswer variable is reassigned the value of the button that was clicked.

const submitPush = document.getElementById("submit-button");
submitPush.addEventListener("click", submitAnswer);

// The submitPush variable is linked to the "submit-button" element in the html. The addEventListener method runs the "submitAnswer" function when the "submit-button" button is clicked.

function submitAnswer() {
  if (selectedAnswer === null) {
    alert("No answer selected");
  } else {
    console.log("You selected: " + selectedAnswer);
  }
}

// If the user hasn't clicked an answer button, the value of selectedAnswer is null, and an alert will pop up and let the user know there is "No answer selected". If an answer has been selected, the function will log the "You selected <answer>" to the console. The function provides feedback to the user by letting them know if they have selected an answer and what answer they have selected.