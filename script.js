const sart=document.querySelector('.start');
const stp=document.querySelector('.stop');
const reset=document.querySelector('.reset');
let h=m=s=ms=0,strtimer;
sart.addEventListener('click',function() {
    sart.classList.add("start-active");
    stp.classList.remove("stop-active");
     strtimer=setInterval(function(){
        ms++;
        if(ms==100){
           s++;
           ms=0
        }
        if(s==60){
           m++;
           s=0
        }
        if(m==60){
           h++;
           m=0
        }
        updatedi();
    },10)
    
});

stp.addEventListener('click',function() {
    clearInterval(strtimer)
    sart.classList.remove("start-active");
    stp.classList.add("stop-active");
});

reset.addEventListener('click',function(){
    h=m=s=ms=0;
    updatedi()
    clearInterval(strtimer)
    sart.classList.remove("start-active");
    stp.classList.remove("stop-active");
})
function updatedi(){
    ph=h<10?'0'+h:h;
    pm=m<10?'0'+m:m;
    ps=s<10?'0'+s:s;
    pms=ms<10?'0'+ms:ms;
    document.querySelector('.hrs').innerHTML=ph;
    document.querySelector('.min').innerHTML=pm;
    document.querySelector('.sec').innerHTML=ps;
    document.querySelector('.msec').innerHTML=pms;
}

