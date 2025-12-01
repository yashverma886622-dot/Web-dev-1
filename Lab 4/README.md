A simple and interactive JavaScript Quiz Application that runs entirely inside the browser console.
The quiz asks multiple-choice and fact-based questions using prompt(), validates user input, gives instant feedback using alert(), and finally displays the overall score.

 Project Description

This project is created for Web Dev Lab Assignment – Prompt Quizzer.
The goal is to practice:

Arrays

Loops

Functions

Input handling

String processing

Conditionals

Alerts & Prompts

 Features

✔ Runs in browser console
✔ Asks 5 predefined questions
✔ Takes user answers using prompt()
✔ Case-insensitive checking (toLowerCase() + trim())
✔ Skips blank answers
✔ Correct/wrong feedback using alert()
✔ Tracks and shows final score

 Quiz Code (quiz.js)
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "What is the factorial of 4?",
        answer: "24"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific"
    },
    {
        question: "What is the full form of WWW?",
        answer: "World Wide Web"
    }
];

// Function to Run the Quiz 
function runQuiz() {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const currentQuestion = quizQuestions[i];

        const userAnswer = prompt(currentQuestion.question);

        if (userAnswer === null || userAnswer.trim() === "") {
            alert("Skipped or no answer provided. Moving to the next question.");
            continue;
        }

        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().trim();

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${totalQuestions}!`);
}

// Start the quiz
runQuiz();

 How to Run the Quiz

Open Chrome / Edge / Firefox

Right-click → Inspect

Go to the Console tab

Paste the entire quiz code

Press Enter

The quiz will start instantly

 Concepts Used

Arrays to store questions

For loop to iterate through questions

Functions to organize quiz logic

prompt() for user input

alert() for output

trim() + toLowerCase() for clean comparison

Conditionals for checking answers

Score variable to track performance

 Optional Improvements

You can upgrade this project with:

Multiple-choice options

Timer for each question

High-score system using localStorage

Restart quiz button

Random question order
