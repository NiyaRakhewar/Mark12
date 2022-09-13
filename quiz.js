const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-ans-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90","right"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score ++;
        }
        index ++;
    }
    console.log(score);
    output.innerText = "your score is " + score;
    
}

submitAnswerBtn.addEventListener('click', calculateScore);