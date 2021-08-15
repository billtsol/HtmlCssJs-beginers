function count(chars){
    c = []
    n = ["/",'|',"?",":","1","2","3","4","5","6","7","8","9","0",";","'",".","[","]","{","}","-","=","+","_","!","@","#","$","%","^","&","*","(",")","<",">",","," "]
    char =""
    for(i=0;i<chars.length;i++){
        if(!n.includes(chars[i])){
            char= char+chars[i]
        }else if(char!="" ){
            c.push(char);
            char="";
        }
    }
    if(char!=""){c.push(char);}
    return c.length;
}

window.setInterval(function(){
    text = document.getElementById('text').value;
    var word;
    var char = text.length;
   
    word = count(text);
    document.getElementById('word').innerText= word;
    document.getElementById('char').innerText= char;

},1000);