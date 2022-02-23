window.onload = function(){
    
let seconds = 0;
let tens = 0;



let buttonstart = document.querySelector('#button-start');
let buttonstop = document.querySelector('#button-stop');
let buttonreset = document.querySelector('#button-reset');


let appendseconds = document.querySelector('#seconds');
let appendtens = document.querySelector('#tens');
let interval;

buttonstart.onclick=() =>{
    this.clearInterval(interval);
    interval = setInterval(startTimer,10);

}
buttonreset.onclick=() =>{
    this.clearInterval(interval);
    tens ="00";
    seconds = "00";
    appendseconds.innerHTML = seconds;
    appendtens.innerHTML = tens;

    

}
buttonstop.onclick=() =>{
    this.clearInterval(interval);
}
function startTimer(){
            tens++;
            tens < 9 ? appendtens.innerHTML = '0' + tens : appendtens.innerHTML = tens;
            if(tens>99){
                seconds++;
                appendseconds.innerHTML = '0' + seconds;
                tens = 0;
                appendtens.innerHTML = '0';
            }
            if(seconds>9){
                appendseconds.innerHTML = seconds;
            }
}
}