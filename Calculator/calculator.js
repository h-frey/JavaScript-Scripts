const numericalBtns = document.getElementsByClassName("numericalBtns");
const screenText = document.getElementById("screen");
const operationBtns = document.getElementsByClassName("operationBtns");
const clearBtn = document.getElementById("clearBtn");
const evaluateBtn = document.getElementById("evaluateBtn");

let num1 = "";
let num2 = "";
let result;
let operand;


screenText.textContent = 0;


for (let i = 0; i < numericalBtns.length; i++) {
    numericalBtns[i].addEventListener("click", function() {
        let num = numericalBtns[i].textContent;
        num1 += num;
        screenText.textContent = num1;
        return num1;
    })
}

for (let i = 0; i < operationBtns.length; i++) {
    operationBtns[i].addEventListener("click", function() {
        operand = operationBtns[i].textContent;
        screenText.textContent = "";
        for (let j = 0; j < numericalBtns.length; j++) {
            numericalBtns[j].addEventListener("click", function() {
                let num_ = numericalBtns[j].textContent;
                num2 += num_;
                screenText.textContent = num2;
                return num2;
            });
        }
        return operand;
    })
}



evaluateBtn.onclick = function() {
    num1 = num1.replace(num2, " ");
    result = eval(num1 + operand + num2);
    screenText.textContent = result;

}


clearBtn.onclick = function() {
    screenText.textContent = 0;
    num1 = "";
    num2 = "";
    result = "";
    operand = "";
    window.location.reload();
}

percentBtn.onclick = function() {

   

}
deleteBtn.onclick =function() {
    screenText.textContent = screenText.textContent.slice(0,-1);
}