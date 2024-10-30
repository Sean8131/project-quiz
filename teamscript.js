const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: ["Kangaroo", "Kiwi bird", "Koala", "Emu"],
    answer: "Kiwi bird",
  },
  {
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: ["Maori", "Aborigines", "Inuit", "Sami"],
    answer: "Maori",
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series",
    ],
    answer: "Lord of the Rings trilogy",
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley",
    ],
    answer: "Mount Cook (Aoraki)",
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: ["Auckland", "Wellington", "Dunedin", "Queenstown"],
    answer: "Auckland",
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: ["Cricket", "Rugby Union", "Soccer", "Netball"],
    answer: "Rugby Union",
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: ["Tasman Sea", "Coral Sea", "South China Sea", "Arafura Sea"],
    answer: "Tasman Sea",
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: ["Haka", "Hongi", "Powhiri", "Waka"],
    answer: "Hongi",
  },
  {
    question:
      "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: ["Rotorua", "Christchurch", "Hamilton", "Napier"],
    answer: "Rotorua",
  },
];

//   Declare elements and access from the DOM

const questionsElement = document.getElementById("quiz-question");
const answer1Element = document.getElementById("answer-1");
const answer2Element = document.getElementById("answer-2");
const answer3Element = document.getElementById("answer-3");
const answer4Element = document.getElementById("answer-4");
const submitButton = document.getElementById("submit-button");

let selectedAnswer = null;
let correctAnswer = questions[0].answer;

// Show first question in question area

questionsElement.innerText = questions[0].question;

// Make a forEach loop for the answer elements

const answersArray = [
  answer1Element,
  answer2Element,
  answer3Element,
  answer4Element,
];

// Set the answer text

let correctAnswerElement;

answersArray.forEach(function (answerButton, index) {
  const answer = questions[0].options[index];
  answerButton.innerText = answer;
  if (answer === correctAnswer) {
    correctAnswerElement = answerButton;
  }
});

answersArray.forEach(function (answerButton) {
  answerButton.addEventListener("click", selectAnswer);
});

// Array of answer elements

// Submit event handler
submitButton.addEventListener("click", submitButtonClicked);

// Change background color when answer is clicked

let selectedButton;

function selectAnswer(event) {
  answer1Element.style.backgroundColor = "";
  answer2Element.style.backgroundColor = "";
  answer3Element.style.backgroundColor = "";
  answer4Element.style.backgroundColor = "";
  event.target.style.backgroundColor = "lightgrey";

  selectedButton = event.target;
}

function submitButtonClicked(event) {
  if (selectedButton == null) {
    alert("You have not selected an answer");
    return;
  } 
  // Highlight correct answer in green
  correctAnswerElement.style.backgroundColor = "green";

//   Button turns red if selected answer is wrong
  if (selectedButton !== correctAnswerElement) {
    selectedButton.style.backgroundColor = "red";
  }

  submitButton.innerText = "Go to next question";
}

// Write a function that takes all the dependent variables that change with each question