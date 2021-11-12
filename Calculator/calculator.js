let numericalBtns = document.getElementsByClassName("numericalBtns");
let screenText = document.getElementById("screen");
let operationBtns = document.getElementsByClassName("operationBtns");
let num1 = "";
let num2 = "";
let operand;


function getFirstValue() {
    for (let i = 0; i < numericalBtns.length; i++) {
        numericalBtns[i].addEventListener("click", getValue);

        function getValue() {
            let num = numericalBtns[i].textContent;
            num1 += num;
            screenText.textContent = num1;
            return num1;
        }
    }
}

function getSecondValue() {
    for (let j = 0; j < numericalBtns.length; j++) {
        numericalBtns[j].addEventListener("click", function() {
            let num_ = numericalBtns[j].textContent;
            num2 += num_;
            screenText.textContent = num2;
            return num2;
        });
    }
}

function getOperand() {
    for (let i = 0; i < operationBtns.length; i++) {
        operationBtns[i].addEventListener("click", function() {
            operand = operationBtns[i].textContent;
            screenText.textContent = num2;
            return operand;

        })
    }
}



