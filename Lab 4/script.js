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

// 2. Function to Run the Quiz 
function runQuiz() {
    // 3. Score Initialization [cite: 33]
    let score = 0;
    const totalQuestions = quizQuestions.length;

    // 4. Loop Through Questions [cite: 35]
    for (let i = 0; i < totalQuestions; i++) {
        // Get the current question and correct answer
        const currentQuestion = quizQuestions[i];

        // 5. Prompt for User Input [cite: 37]
        // Get the user's answer using the prompt() function
        const userAnswer = prompt(currentQuestion.question);

        // Check if the user pressed 'Cancel' or entered nothing
        if (userAnswer === null || userAnswer.trim() === "") {
            alert("Skipped or no answer provided. Moving to the next question.");
            continue; // Skip to the next iteration of the loop
        }

        // 6. Normalize the Input [cite: 9, 39]
        // Convert both the user's answer and the correct answer to lowercase and trim spaces
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().trim();

        // 7. Check the Answer [cite: 41]
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            // Correct Answer
            // 8. Provide Immediate Feedback (Correct) [cite: 44]
            alert("Correct!");
            // Update the score [cite: 42]
            score++;
        } else {
            // Incorrect Answer
            // 8. Provide Immediate Feedback (Incorrect) [cite: 45]
            alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
        }
    }

    // 9. Display the Final Score [cite: 46]
    alert(`Quiz Over! Your final score is ${score} out of ${totalQuestions}!`);
}

// Start the quiz by calling the function [cite: 48]
// To run the quiz, paste the entire code into the browser console and type runQuiz()
// or just include the function call like below.
runQuiz();