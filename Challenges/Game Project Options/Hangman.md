# Project Name: Hangman

## Github Link: 

## Website Link:

## Your Name: 

<!-- Dont Modify Below This Line -->
### Intructions
1. Pick one project type
2. Copy and paste this md file into your Project directory and fill in the required information above
### Hangman Requirements
1. System contains a dictionary file containing key-value pairs of words or phrases and their related categories
2. On game launch, the system chooses a random word from the dictionary, and displays an appropriate number of blank spaces for the number of letters in the word or phrase, as well as the related hint.
3. User able to input single letters as guesses
   - Only single letter inputs accepted (if using text for input)
   - Correct guesses fill in *each* blank space with the guessed letter.
        - "bees" should have both "e"'s revealed when guessed
   - Incorrect letters remove a "life" from the player, and prevent the letter from being guessed a second time
4. System has a "hangman" interface to show the players how many lives they have left.
5. System handles end-game
  - User recieves "You Win" message, showing how many lives were remaining upon completeion of the puzzle
  - User recieves "You Loose" message on last life being lost, along with the correct answer
  - In either a win or loose case, a "Play Again" button will restart the game.

### Recomended Reading
[String Manipulation](https://www.w3schools.com/js/js_string_methods.asp)
[Random](https://www.w3schools.com/js/js_random.asp)
[Objects](https://www.w3schools.com/jsref/jsref_obj_object.asp)