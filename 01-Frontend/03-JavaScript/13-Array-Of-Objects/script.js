const questions = [
  {
    category: "Science",
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Earth"],
    answer: "Jupiter"
  },
  {
    category: "Geography",
    question: "What is the capital city of Japan?",
    choices: ["Tokyo", "Seoul", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "Mathematics",
    question: "What is 9 × 8?",
    choices: ["72", "81", "64"],
    answer: "72"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which language is primarily used for web page structure?",
    choices: ["CSS", "JavaScript", "HTML"],
    answer: "HTML"
  }
];

function getRandomQuestion(questionsArray){
  const randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  return randomQuestion;
}
// getRandomQuestion(questions)

function getRandomComputerChoice(availableChoices) {
  const randomAnswer = availableChoices[Math.floor(Math.random() * availableChoices.length)];
  console.log(randomAnswer);
  return randomAnswer;

}
// getRandomComputerChoice(questions[0].choices)

function getResults(question,computerChoice){
  if(computerChoice === question.answer){
    return "The computer's choice is correct!";
  }else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}