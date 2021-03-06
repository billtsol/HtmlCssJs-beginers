function changeColor(){
    const r = document.getElementById('r').value;
    const g = document.getElementById('g').value;
    const b = document.getElementById('b').value;
    document.body.style.backgroundColor =`rgb(${r},${g},${b})`;
    green = parseInt(g)
    if(green>150){document.getElementById('container').style.color = "black";}
    else{document.getElementById('container').style.color = "white";}
}
// Style
document.body.style.margin="0";
document.body.style.fontFamily= "Arial, Courier";

div1 = document.createElement('div');
div1.id = "container";
div1.className = "container";
document.body.appendChild(div1);

for (let i=1;i<=3;i++){
    div = document.createElement('div');
    id = "box-"+String(i);
    div.id = id;
    div.className = "box";
    document.getElementById('container').appendChild(div);

    p = document.createElement('p');
    document.getElementById(id).appendChild(p);

    input = document.createElement('input');input.type="range";input.min="0";input.max="255";input.value= "0";input.onchange = function() {changeColor()};
    if(i==1){
        input.id ="r";
        p.innerText = "Red";
    }else if(i==2){
        input.id = "g";
        p.innerText = "Green";
    }else if (i==3){
        input.id = "b";
        p.innerText = "Blue";
    }
    document.getElementById(id).appendChild(input);
}
document.body.style.backgroundColor = 'black';