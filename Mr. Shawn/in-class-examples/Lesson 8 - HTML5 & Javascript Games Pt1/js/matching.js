// Variables declared outside of functions are global variables and can be used anywhere in the program
let score = 0;
var lastCard = null; // Start with no card selected as the previous to check against
var timeout = false; // Needed so people can't click too fast while matching
var allCards = [];
function startGame() { // Function called when Play button is clicked
    // Get the game window and menu, then hide the menu and show the game
    var gameWindow = document.getElementById("game_main");
    var gameMenu = document.getElementById("game_menu");
    gameMenu.hidden = true;
    gameWindow.hidden = false;
    // Create the score display
    var score_display = document.createElement("div");
    score_display.className = "row d-flex justify-content-center align-items-center"; // Using bootstrap in our class name for style
    score_display.id = "score"; // So that we can put the data we care about in our ID
    score_display.innerHTML = "Score: " + score;
    gameWindow.appendChild(score_display); // Add the score display to the game window
    // We put every color in the array twice so that we can have a matching pair for each color
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "teal", "red", "blue", "green", "yellow", "orange", "purple", "pink", "teal"];
    for (var i = 0; i < 4; i++) { // We need a 4x4 grid of cards, so we need to make a loop inside of a loop
        var row = document.createElement("div");
        row.className = "row d-flex justify-content-center align-items-center";
        row.id = "row" + i; // Now that a row is made, we use the second loop to create to columns inside of it
        for (var j = 0; j < 4; j++) {
            var card = document.createElement("div");
            // Pick a random color from the array, then remove it so that we don't pick it again (That's why we put 2 of each in the list)
            var rand = Math.floor(Math.random() * colors.length);
            card.className = "card" + " " + colors[rand]; // This makes every card have a classname of "card" and a color i.e "card red"
            colors.splice(rand, 1);
            card.id = "card" + i + "-" + j; // We use the row and column number to make a unique ID for each card, kind of like a grid: 0-0, 0-1, etc up to 3-3 
            card.onclick = function () { cardClick(this.id) }; // Bind an onclick function to the cards for when the player click on it, and pass in the card ID as an argument
            allCards.push(card); // Add the card to the array of all cards
            row.appendChild(card); // Add the card to the row
        }
        gameWindow.appendChild(row); // Once all the cards are added, THEN we can add the row to the game window
    } // Once the row is added, the loop starts again to create the next row of cards
    doPeak(); // Call the doPeak function to show the player the cards to memorize before the game starts
}
function cardClick(id) { // Requires the ID of the card that was clicked as an argument
    if (timeout == true) {
        return; // If the timeout is true, then we don't want to do anything else, so we just return out of the function
    }
    var card = document.getElementById(id);
    color = card.className.split(" ")[1]; // Get the color from the class name by selecting everything after the space
    card.style.backgroundColor = color; // "flip" the card to its real color
    if (lastCard == null) {
        lastCard = card; // If there is no last card, then this is the first card clicked and saves itself as the last card
    } else { // If there is a last card, then we need to check if it matches the current card
        if (lastCard.style.backgroundColor == card.style.backgroundColor) {
            score++; // If the cards match, then we add 1 to the score, update the score display, and set the last card to back to null
            document.getElementById("score").innerHTML = "Score: " + score;
            lastCard = null;
        } else {
            timeout = true; // If the cards don't match, then we set the timeout to true so that the player can't click
            setTimeout(function () {
                lastCard.style.backgroundColor = "#1c283a";
                card.style.backgroundColor = "#1c283a";
                lastCard = null;
                timeout = false;
            }, 1000); // setTimeout is a function that waits a certain amount of time before running the function inside of it
            // In this case, we wait 1 second before running the function inside of it, which is to flip the cards back over and reset the last card
        }
    }
}
async function doPeak() { //Another super common way to do anything with time is to use an async function.
    //Async functions allow you to use the await keyword to call pauses whenever you want, but you have to define the function yourself. See Below

    timeout = true; //Prevent the player from clicking on cards while the game is starting

    //Loop 1: Change all the cards to their "real" color
    for (i = 0; i < allCards.length; i++) {
        allCards[i].style.backgroundColor = allCards[i].className.split(" ")[1];
    }
    //Loop 2: Wait 3 seconds
    for (time = 3; time > 0; time--) {
        document.getElementById("score").innerHTML = "Game Begins in " + time + "...";
        await sleep(1000); //Only passing 1 second delay, because the loop will call the 1 second delay 3 times
    }
    //Loop 3: Change all the cards back to their "flipped" color
    document.getElementById("score").innerHTML = "Score: 0";
    for (i = 0; i < allCards.length; i++) {
        allCards[i].style.backgroundColor = "#1c283a";
    }
    timeout = false; //Allow the player to click on cards again
}

function sleep(ms) { //This is the function that is called by the await keyword in the doPeak function
    return new Promise(resolve => setTimeout(resolve, ms)); // It uses what's called a promise to wait a certain amount of time before resolving
    // The techinical details are outside the scope of this course, but all we need to know is we can now pause out code by using the sleep function and passing in ms as an argument
}