const form = document.getElementById("form");
const tablebody = document.querySelector("tbody");


let userList = [];
let usernames = [];
let usertimes = [];
let userweights = [];
let userheights = [];
let userBMIs = [];
let BMIverdict = [];

class Person {
    constructor(name, time, weight, height) {
        this.name = name;
        this.time = time;
        this.weight = weight;
        this.height = height;
    }
    bmi() {
        let metre_height = this.height / 100;
        return +(this.weight / (metre_height ** 2)).toFixed(2);
    }
    bmImp() {
        if (this.bmi() < 18.5) {
            return ("Underweight");
        } else if (this.bmi() < 25) {
            return ("Healthy");
        } else if (this.bmi() < 30) {
            return ("Overweight");
        } else {
            return ("Obese");
        }
    }

}


form.addEventListener("submit", loguser);



function loguser(e) {

    e.preventDefault();

    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let name = document.querySelector("#username").value;

    let curr = new Date;
    let time = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();

    let user = new Person(name, time, weight, height);

    userList.push(user);
    usertimes.push(user.time);
    userweights.push(user.weight);
    usernames.push(user.name);
    userheights.push(user.height);
    userBMIs.push(user.bmi());
    BMIverdict.push(user.bmImp());



    showChanges();

    form.reset();

}

function showChanges() {


    let tablerow = document.createElement("tr");
    let tableusername = document.createElement("td");
    let tabletime = document.createElement("td");
    let tableweight = document.createElement("td");
    let tableheight = document.createElement("td");
    let tableBMI = document.createElement("td");
    let tableBMIverdict = document.createElement("td");



    for (let i = 0; i < userList.length; i++) {
        tableusername.innerHTML = usernames[i];
        tabletime.innerHTML = usertimes[i];
        tableweight.innerHTML = userweights[i];
        tableheight.innerHTML = userheights[i];
        tableBMI.innerHTML = userBMIs[i];
        tableBMIverdict.innerHTML = BMIverdict[i];
    }



   


    tablerow.appendChild(tableusername);
    tablerow.appendChild(tabletime);
    tablerow.appendChild(tableweight);
    tablerow.appendChild(tableheight);
    tablerow.appendChild(tableBMI);
    tablerow.appendChild(tableBMIverdict);
    tablebody.appendChild(tablerow);

    let myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: usernames,
            datasets: [{
                backgroundColor: "rgba(0,0,0,0.2)",
                borderColor: "rgba(0,0,0,0.1)",
                data: userBMIs
            }]
        }
    })
}