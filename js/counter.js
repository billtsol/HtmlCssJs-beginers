function plus(){
    x = parseInt(document.getElementById('text').innerText)+1;
    document.getElementById('text').innerText = String(x)
}
function minus(){
    x = parseInt(document.getElementById('text').innerText)-1;
    document.getElementById('text').innerText = String(x)
}

div = document.createElement('div');
div.id = "container";
div.className = "container";
document.body.appendChild(div);

count = document.createElement('div');
count.id = "text";
document.getElementById('container').appendChild(count);

button = document.createElement('button');
button.id = "plus";
button.className = "btn";
document.getElementById('container').appendChild(button);

button = document.createElement('button');
button.id = "minus";
button.className = "btn";
document.getElementById('container').appendChild(button);

itag = document.createElement('i');
itag.className = "bi bi-plus-lg";
document.getElementById('plus').appendChild(itag);

itag = document.createElement('i');
itag.className = "bi bi-dash-lg";
document.getElementById('minus').appendChild(itag);

text = document.getElementById('text').innerText = "0";

document.getElementById("plus").onclick = function(){plus()};
document.getElementById("minus").onclick = function(){minus()};