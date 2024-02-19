const randomNumberFeedback = document.querySelector("#randomNumber");
const generateRandomBtn = document.querySelector("#generateRandomBtn");

generateRandomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; //Add 1 to the result to make sure that we dot get 0

    const feedbackMessage = `Random Number: ${randomNumber}`;
    console.log(feedbackMessage);
    
    randomNumberFeedback.innerHTML = feedbackMessage;
});