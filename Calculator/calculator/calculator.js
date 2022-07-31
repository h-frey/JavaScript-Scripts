const numericalBtns = document.getElementsByClassName("numericalBtns");
const displayScreenText = document.getElementById("screen1");
const inputScreenText = document.getElementById("screen2");
const operationBtns = document.getElementsByClassName("operationBtns");
const clearBtn = document.getElementById("clearBtn");
const evaluateBtn = document.getElementById("evaluateBtn");

let num1 = "";
let num2 = "";
let result;
let operand;

//display screen text issue with the operand not showing 
//when num2 is added onto the screen 
//possible fix is substring but in vain 

// also the percentage function is not functioning 
displayScreenText.textContent = 0;
inputScreenText.textContent = 0;


for (let i = 0; i < numericalBtns.length; i++) {
    numericalBtns[i].addEventListener("click", function() {
        let num = numericalBtns[i].textContent;
        num1 += num;
        inputScreenText.textContent = num1;
        displayScreenText.textContent = num1;
        return num1;
    })
}

for (let i = 0; i < operationBtns.length; i++) {
    operationBtns[i].addEventListener("click", function() {
        operand = operationBtns[i].textContent;
        inputScreenText.textContent = "";
        for (let j = 0; j < numericalBtns.length; j++) {
            numericalBtns[j].addEventListener("click", function() {
                let num_ = numericalBtns[j].textContent;
                num2 += num_;
                displayScreenText.textContent += operand;
                // displayScreenText.textContent += num2;
                inputScreenText.textContent = num2;
                return num2;
            });
        }
        displayScreenText.textContent += operand;

        return operand;
    })
}



evaluateBtn.onclick = function() {
    num1 = num1.replace(num2, " ");
    result = eval(num1 + operand + num2);
    inputScreenText.textContent = result;

}


clearBtn.onclick = function() {
    inputScreenText.textContent = 0;
    displayScreenText.textContent = 0;
    num1 = "";
    num2 = "";
    result = "";
    operand = "";
    window.location.reload();
}

percentBtn.onclick = function() {
    displayScreenText.textContent += "%";
    inputScreenText.textContent = num1 / 100;

}
deleteBtn.onclick = function() {
    inputScreenText.textContent = inputScreenText.textContent.slice(0, -1);
}