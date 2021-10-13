/*These are two examples of using a for loop to output even numbers
for (let i=0; i<=11;i+=2){
    alert(i);
}
for (let j=0;j<=10;j++){
    if(j%2 == 0){
        alert(j)
    }
}*/

/* This is  while loop in JS
let i=0;
while (i<=3){
    alert(`number ${i}!`);
    i++;
}*/


let num;
do{
    num =prompt("Enter a number greater than 100",0);
}
while(num<=100 && num);
alert("finished")