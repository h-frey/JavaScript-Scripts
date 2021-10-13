//storing the desired colour for future reference
function changeColor(color) {
    document.body.style.background = color;
}
function changeFontColor(inverse_color, colour_three){
    document.getElementById("head").style.color = inverse_color;
    document.getElementById("gfg_up").style.color = colour_three;
     document.getElementById("btn").style.background = inverse_color;
}

function gfg_Run(){
    
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    let a = Math.floor(Math.random() *100);

    let colour = `rgba(${r},${g},${b},${a})`;
    let inverse_colour = `rgb(${r},${255-g},${255-b})`;
    let colour_3 = `rgb(${55-r},${g},${155-b})`;
    
    changeColor(colour);
    changeFontColor(inverse_colour,colour_3);
}

