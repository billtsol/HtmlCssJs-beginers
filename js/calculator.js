function clean(){document.getElementById('result').innerText=0;}

function results(){
    text = document.getElementById('result').innerText;
    let len = text.length;
    let last =text[len-1];
    if(last==")"){
        symbol('+');
        let text = document.getElementById('result').innerText;
        document.getElementById('result').innerText = text.slice(0,text.length-1);
    }else{
        let res = maths(text);
        document.getElementById('result').innerText = res;
    }
}
function numbers(number){
    result = document.getElementById('result').innerText;
    last = result[result.length-1];
    if (result=="0"){
        document.getElementById('result').innerText = number;
    }
    else if(last==")"){
        document.getElementById('result').innerText = document.getElementById('result').innerText;
    }else {
        document.getElementById('result').innerText+= number;
    }
}

function backSpace(){
    text = document.getElementById('result').innerText;
    if(text.length===1){
        document.getElementById('result').innerText="0"
    }else{
        document.getElementById('result').innerText= text.slice(0,text.length-1)
    }
}

function symbol(sym){
    let len, last,first,pos,res,m=false;
    text = document.getElementById('result').innerText;
    len = text.length;
    last = text[len-1];
    if(text[0]=="-"){m=true;}
    if(last=="+" || last=="-" || last=="/" || last=="*"){
        document.getElementById('result').innerText = text.slice(0,len-1)+sym;
    }else if(last=="("){
        document.getElementById('result').innerText= document.getElementById('result').innerText; 
    }
    else if (!text.includes("(")){
        if(text.includes("+")){
            pos = text.indexOf("+");
            first = parseFloat(text.slice(0,pos));
            last = parseFloat(text.slice(pos+1,len));
            document.getElementById('result').innerText= String(first+last) + sym;
        }
        else if (text.includes("-")){
            pos = text.indexOf("-");
            if(m){text2 = text.slice(1,len)
                pos = text2.indexOf("-")+1;}
            first = parseFloat(text.slice(0,pos));
            last = parseFloat(text.slice(pos+1,len));
            document.getElementById('result').innerText= String(first-last) + sym;
        }
        else if(text.includes("/")){
            pos = text.indexOf("/");
            first =parseFloat(text.slice(0,pos));
            last = parseFloat(text.slice(pos+1,len));
            document.getElementById('result').innerText= String((first/last).toFixed(2)) + sym;
        }
        else if(text.includes("*")){
            pos = text.indexOf("*");
            first = parseFloat(text.slice(0,pos));
            last = parseFloat(text.slice(pos+1,len));
            document.getElementById('result').innerText= String(first*last) + sym;
        }
        else{document.getElementById('result').innerText+=sym;}
    }
    else{
        if(last==")"){
            pos1 = text.indexOf("(");
            math = text.slice(pos1+1,len-1);
            first = text.slice(0,pos1);
            res = String(maths(math));
            math = first + res;
            res = String(maths(math));
            document.getElementById('result').innerText = res + sym;
        }else{document.getElementById('result').innerText+=sym;}
    }
}

function par(p){
    text = document.getElementById('result').innerText;
    len = text.length
    last =text[len-1]
    if(p=="("){
        if((last=="+" || last=="-" || last=="/" || last=="*") && !text.includes("(")){
            document.getElementById('result').innerText+=p
        }
    }
    else{
        if(last!="+" && last!="-" && last!="/" && last!="*" && last!="(" && last!=")" && text.includes("(")){
            document.getElementById('result').innerText+=p
        }
    }
}

function maths(math){
    let first,mathList,p,num,last;
    mathList = []
    p=0;
    num=''
    while(p<math.length){
        if(math[p]!="+" && math[p]!="-" && math[p]!="/" && math[p]!="*"){
            num+=math[p]
        }else{
            mathList.push(num);
            num='';
            mathList.push(math[p]);
        }
        p++
    }
    mathList.push(num);

    if(mathList.includes("*")){
        for(i=0; i<mathList.length;i++){
            if(mathList[i]==="*"){
                last = parseFloat(mathList[i+1])
                last.toFixed(2);
                delete mathList[i+1]
                delete mathList[i];
                first = parseFloat(mathList[i-1])
                first.toFixed(2);
                mathList[i-1]= first *last;
                mathList = mathList.flat();
            }
        }
    }
    if(mathList.includes("/")){
        for(i=1; i<mathList.length-1;i++){
            if(mathList[i]=="/"){
                last = parseFloat(mathList[i+1])
                last.toFixed(2);
                delete mathList[i+1]
                delete mathList[i];
                first = parseFloat(mathList[i-1])
                first.toFixed(2);
                mathList[i-1]= first/last;
                mathList = mathList.flat();
            }
        }
    }
    if(mathList.includes("+")){
        for(i=1; i<mathList.length-1;i++){
            if(mathList[i]=="+"){
                last = parseFloat(mathList[i+1])
                last.toFixed(2);
                delete mathList[i+1]
                delete mathList[i];
                first = parseFloat(mathList[i-1])
                first.toFixed(2);
                mathList[i-1]= first+last;
                mathList = mathList.flat();
            }

        }
    }
    if(mathList.includes("-")){
        for(i=1; i<mathList.length-1;i++){
            if(mathList[i]=="-"){
                last = parseFloat(mathList[i+1])
                last.toFixed(2);
                delete mathList[i+1]
                delete mathList[i];
                first = parseFloat(mathList[i-1])
                first.toFixed(2);
                mathList[i-1]= first-last;
                mathList = mathList.flat();
            }
        }
    }
    return mathList[0].toFixed(2);
}