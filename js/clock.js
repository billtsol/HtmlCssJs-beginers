function addZero(i){
    if (i < 10) {i ="0"+i;}
    return i;
}
function clock(){
    requestAnimationFrame(clock);
    document.getElementById('sec-10').style.animation="";
    document.getElementById('min').style.animation="";
    document.getElementById('min-10').style.animation="";
    document.getElementById('hour').style.animation="";
    document.getElementById('hour-10').style.animation="";
     

    var d = new Date();
    var hour = String(addZero(d.getHours()));
    var min = String(addZero(d.getMinutes()));
    var sec = String(addZero(d.getSeconds()));
    
    document.getElementById('hour-10').innerText = hour[0]
    document.getElementById('hour').innerText = hour[1]
    document.getElementById('min-10').innerText = min[0]
    document.getElementById('min').innerText= min[1]
    document.getElementById('sec-10').innerText = sec[0]
    document.getElementById('sec').innerText = sec[1]


    if(sec[1]==="0"){document.getElementById('sec-10').style.animation="flip 1s 1";}
    if(sec[0]==="0"){document.getElementById('min').style.animation="flip 1s 1";}
    if(min[1]==="0"){document.getElementById('min-10').style.animation="flip 1s 1";}
    if(min[1]==="0" && min[0]==="0"){document.getElementById('hour').style.animation="flip 1s 1";}
    if(min[0]==="0" && min[1]==="0" && sec[0]==="0" && hour[1]==="0"){document.getElementById('hour-10').style.animation="flip 1s 1";}
}
clock();
