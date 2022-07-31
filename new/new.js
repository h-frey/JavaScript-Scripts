let p = document.querySelector("p");
let name1 = document.querySelector("#name");
let submit = document.querySelector("#submit");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let non = document.querySelector("#non");
let div = document.querySelector("#div1");

submit.addEventListener("click", function() {
    let nameStored = name1.value;
    if (nameStored !== "") {
        let newP = document.createElement("p");
        if (male.checked === true) {
            newP.textContent = "Ki ekiriwo " + nameStored + " ,welcome back to programming.";
        } else if (female.checked === true) {
            newP.textContent = "Hello dear, " + nameStored + " is such a beautiful name.";
        } else if (non.checked === true) {
            newP.textContent = "Hey, dont worry. We still welcome you regardless.";
        } else {
            alert("Please select a gender");
        }
        div.appendChild(newP);
    } else {
        alert("Enter a name please");
    }

})