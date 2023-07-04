const btnstart = document.querySelector('.start');
const btnstop = document.querySelector('.stop');
const btnreset = document.querySelector('.reset');

let hrs=min=sec=ms=0 , stratTimer;

btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active');
    btnstop.classList.remove("stop-active");
 stratTimer = setInterval(()=>{
    ms++;
    if (ms==100) {
        sec++;
        ms=0;
    }

    if (sec==60) {
        min++;
        sec=0;
    }

    if (min==60) {
        hrs++;
        min=0;
    }
    updateDisplay();
 },10)
});

btnstop.addEventListener('click',()=>{
clearInterval(stratTimer);
btnstart.classList.remove('start-active');
btnstop.classList.add("stop-active");
});

btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    btnstart.classList.remove('start-active');
    btnstop.classList.remove("stop-active");
    updateDisplay();
});

function updateDisplay(){
    phrs = hrs<10 ? "0"+ hrs : hrs;
    pmin = min<10 ? "0"+ min : min;
    psec = sec<10 ? "0"+ sec : sec;
    pms  = ms <10 ? "0"+ ms  : ms;

    document.querySelector('.hrs').innerText = phrs;
    document.querySelector('.min').innerText = pmin;
    document.querySelector('.sec').innerText = psec;
    document.querySelector('.ms').innerText = pms;

}