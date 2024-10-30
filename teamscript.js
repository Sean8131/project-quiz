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

  const questionsElement = document.getElementById('quiz-question');
  const answer1Element = document.getElementById('answer-1');
  const answer2Element = document.getElementById('answer-2');
  const answer3Element = document.getElementById('answer-3');
  const answer4Element = document.getElementById('answer-4');
  const submitButton = document.getElementById('submit-button');

  let selectedAnswer = null;
  let correctAnswer = questions[0].answer;

// Show first question in question area

  questionsElement.innerText = questions[0].question;

// Show answers for first question

answer1Element.innerText = questions[0].options[0];
answer2Element.innerText = questions[0].options[1];
answer3Element.innerText = questions[0].options[2];
answer4Element.innerText = questions[0].options[3];

// Add event listeners to buttons

answer1Element.addEventListener('click', selectAnswer);
answer2Element.addEventListener('click', selectAnswer);
answer3Element.addEventListener('click', selectAnswer);
answer4Element.addEventListener('click', selectAnswer);

// Submit event handler
submitButton.addEventListener('click', submitButtonClicked);

// Change background color when answer is clicked

function selectAnswer(event){
    answer1Element.style.backgroundColor = "";
    answer2Element.style.backgroundColor = "";
    answer3Element.style.backgroundColor = "";
    answer4Element.style.backgroundColor = "";
    event.target.style.backgroundColor = "lightgrey";
}

function submitButtonClicked () {
    if (selectedAnswer == null){
        alert('You have not selected an answer');
    }

    // Highlight correct answer in green
    if(selectedAnswer == correctAnswer) {
    }
}

selectedAnswer = answer1Element.innerText;