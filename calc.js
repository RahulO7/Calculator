let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");

let screenvalue = '';

for (item of buttons) {
    item.addEventListener("click" ,(e) => {
        buttonText = e.target.innerText;
        console.log("button text is", buttonText);

        if(buttonText == "X") {
            buttonText = "*";
            screenvalue += buttonText;
            screen.value = screenvalue;

        }
        else if(buttonText == 'AC'){
            screenvalue = " ";
            screen.value = screenvalue;


        }
        else if(buttonText == "=" ){
            screen.value = eval(screenvalue)
        }
        else if(buttonText == "C"){
            screenvalue = "0";
            screen.value = screenvalue
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}


let toggle = document.getElementById("toggle")
let body = document.querySelector("body")
let indi = document.getElementById("toggle")
let dinput = document.getElementById("screen")
let cal = document.getElementById("calu")
// let dbtn = document.querySelectorAll("button")

 
toggle.onclick = function(){
    // toggle.classList.toggle("active")
    body.classList.toggle("active");
    // dbtn.classList.remove("cbtn")
    // cal.classList.remove("calculator") 
    cal.classList.toggle("dcalc") ;
    dinput.classList.toggle("dipt");
    // dbtn.classList.toggle("dbt")
    



}