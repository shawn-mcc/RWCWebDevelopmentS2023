var score = 0;
var clicked = false;
var currentCard;
var allCards = [];
var timeout = false;
function startGame(difficulty){
    let gameWindow = document.getElementById("game");
    var num;
    document.getElementById("difficulty").hidden = true;
    gameWindow.hidden = false;
    switch(difficulty){
        case 1: //easy
            num = 4;
            break;
        case 2: //medium
            num = 6;
            break;
        case 3: //hard
            num = 8;
            break;
    }
    createBoard(num);

}
function createBoard(num){
    gameWindow = document.getElementById("game");
    var title = document.createElement("div");
    title.className = "row d-flex justify-content-center align-items-center";
    title.id = "title";
    switch (num){
        case 4:
            title.innerHTML = "Memory Game - Easy";
            break;
        case 6:
            title.innerHTML = "Memory Game - Medium";
            break;
        case 8:
            title.innerHTML = "Memory Game - Hard";
            break;
    }
    gameWindow.appendChild(title);
    var score = document.createElement("div");
    score.className = "row d-flex justify-content-center align-items-center";
    score.id = "score";
    score.innerHTML = "Game Begins in 5...";
    gameWindow.appendChild(score);
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
    var colorArray = [];
    for (var i = 0; i < (num**2/2); i++){
        var rand = Math.floor(Math.random() * colors.length);
        colorArray.push(colors[rand]);
        colorArray.push(colors[rand]);
        colors.splice(rand, 1);
    }
    console.log(colorArray);

    for (var i = 0; i < num; i++){
        var row = document.createElement("div");
        row.className = "row d-flex justify-content-center align-items-center";
        row.id="row"+i;
        for (var j = 0; j < num; j++){
            var card = document.createElement("div");
            var rand = Math.floor(Math.random() * colorArray.length);
            card.className = "card" + " " + colorArray[rand];
            colorArray.splice(rand, 1);
            card.id = "card"+i+"-"+j;
            card.onclick = function(){cardClick(this.id)};
            allCards.push(card);
            row.appendChild(card);
        }
        gameWindow.appendChild(row);
    }
startPeak();
}


function cardClick(card){
    var card = document.getElementById(card);
    if (timeout == true){
        return;
    }else{
    card.style.backgroundColor = card.className.split(" ")[1];
    if (clicked == false){
        clicked = true;
        currentCard = card;
    }else{
        timeout = true;
        checkMatch(card);
    }
    }
}

function checkMatch(card){
    if (card.className.split(" ")[1] == currentCard.className.split(" ")[1]){
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        if (score == allCards.length/2){
            document.getElementById("score").innerHTML = "You Win! <button class='button-btn' onclick='location.reload()'>Play Again?</button>";
        }
        clicked = false;
        timeout = false;
    }else{
        setTimeout(function(){
            card.style.backgroundColor = "#1c283a";
            currentCard.style.backgroundColor = "#1c283a";
            clicked = false;
            timeout = false;
        }, 1000);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}