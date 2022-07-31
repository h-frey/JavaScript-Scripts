let start_size;
let end_size;
let years;

function calc(start_size,end_size,years=0){
    while (start_size < end_size){
        start_size = (start_size + (start_size/3) - (start_size/4));
        years ++;
        continue
    }
    return years;
}

while (true) {
    start_size = +(prompt("Start size: "));
    end_size = +(prompt("End size: "));

    if ((start_size < 9) || (end_size < start_size)){
        continue;
    }

    else{
        alert(`Years: ${calc(start_size, end_size)}`);
        break
    }
}