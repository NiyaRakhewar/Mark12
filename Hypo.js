const sides = document.querySelectorAll(".side-input");
const btn = document.querySelector("#hypo-btn");
const output = document.querySelector("#output");

function calculateSumOfSqr(a, b){
    const sumOfSqrs = a*a + b*b;
    return sumOfSqrs;
}

function calculateHypo(){
    const sumOfSqrs =calculateSumOfSqr(Number(sides[0].value),Number(sides[1].value));
    const lenOfHypo = Math.sqrt(sumOfSqrs);
    output.innerText = "The length of hypotenuse is " + lenOfHypo;
}

btn.addEventListener('click',calculateHypo);