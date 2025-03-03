function check() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare answers and display feedback
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", check);
