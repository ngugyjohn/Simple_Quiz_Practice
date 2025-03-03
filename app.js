document.addEventListener("DOMContentLoaded", function(){

    function checkAnswer() {
        const correctAnswer = "4";
        const selectedOption = document.querySelector("input[name'quiz']:checked");
        const feedbackElement = document.querySelector("#feedback");

        if(selectedOption){
            const userAnswer = selectedOption.value;

            if(userAnswer === correctAnswer){
                feedbackElement.textContent = "Correct! Well done.";
                feedbackElement.style.color = "blue";
            } else{
                feedbackElement.textContent = "That's incorrect. Try again!";
                feedbackElement.style.color = "purple";
            }
        } else {
            feedbackElement.textContent = "Please select an answer!";
            feedbackElement.style.color = "tomato";
        }
    }
    document.querySelector("submit-answer").addEventListener("click", checkAnswer);






















})