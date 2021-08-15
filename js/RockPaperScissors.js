function computer(){
    let ch =  Math.floor((Math.random() * 3) + 1); 
    ch =  Math.floor((Math.random() * 3) + 1);
    
    let play;
    if(ch===1){
        play = "rock";
    }else if(ch===2){
        play = "paper";
    }else{
        play = "scissors";
    }

    document.getElementById('rockC').style.display="none";
    document.getElementById('paperC').style.display="none";
    document.getElementById('scissorsC').style.display="none";

    return play;
}

function play(choice){
    document.getElementById('rockP').style.display="none";
    document.getElementById('paperP').style.display="none";
    document.getElementById('scissorsP').style.display="none";

    if(choice==="rock"){
        document.getElementById('rockP').style.display = "block";
    }else if(choice==="paper"){
        document.getElementById('paperP').style.display = "block";
    }else if(choice==="scissors"){
        document.getElementById('scissorsP').style.display = "block";
    }

    var choice2 = computer();

    if(choice2==="rock"){
        document.getElementById('rockC').style.display = "block";
    }else if(choice2==="paper"){
        document.getElementById('paperC').style.display = "block";
    }else if(choice2==="scissors"){
        document.getElementById('scissorsC').style.display = "block";
    }

    if(
        (choice==="rock" && choice2==="paper") ||
        (choice==="paper" && choice2==="scissors") ||
        (choice==="scissors" && choice2==="rock" )
    ){
        scoreC = parseInt(document.getElementById('scoreC').innerText)+1;
        document.getElementById('scoreC').innerText=String(scoreC);
    }else if(
        (choice==="rock" && choice2==="scissors") ||
        (choice==="paper" && choice2==="rock") ||
        (choice==="scissors" && choice2==="paper" )
    ){
        scoreP = parseInt(document.getElementById('scoreP').innerText)+1;
        document.getElementById('scoreP').innerText=String(scoreP);
    }

}