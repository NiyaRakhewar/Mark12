const inputs = document.querySelectorAll(".input");

const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function AreaOfTriangle(base, height){
    const area = (base * height)/2;
    return area;
}

function calAreaOfTriangle(){
    const area = AreaOfTriangle(Number(inputs[0].value),Number(inputs[1].value));
    output.innerText = "The area of the triangle is " + area + " cm²";

}

btn.addEventListener('click', calAreaOfTriangle);