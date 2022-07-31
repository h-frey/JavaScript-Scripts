"Use Strict"
//this looks at working with object methods and using this 
let calculator = {
    read() {
        this.num1 = +prompt("Enter a number");
        this.num2 = +prompt("Enter another number");
    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    }
}
calculator.read();
alert( calculator.sum())
alert(calculator.mul());