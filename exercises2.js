/*
Features:
Accept guesses from the player and provide result : "Too Big," "Too Small," or "You win!"
Player should be able to type "quit" to exit the game.
The game should continue in a loop until the player guesses correctly or chooses to quit

Step 1 Define the function numpicking(guess, answer)
which compares the player's guess with the answer and gives the appropriate result.

Step 2 result
- guess > 5 "Too Big!"
- guess < 5 "Too Small!"
- guess = 5 "You Win!"

Step 3 Function to ask the user for their guess

Step 4 After each incorrect guess, prompt the player to enter another guess until they guess correctly or quit.
User can input "quit" if they want to exit the game.

 */



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function numpicking(guess, answer) {

    if (guess > answer) {
        console.log("Too Big!");
        } else if (guess < answer) {
                console.log("Too Small!");
        } else if (answer === guess){
                console.log("You win!");  
        }        
}

readline.question('What is the correct answer? ', (answerInput) => {
    const answer = Number(answerInput); 

    function StartGame() {
        readline.question('What is your guess? ', (guessInput) => {
            const guess= Number(guessInput);

    
    numpicking(guess, answer);


    if(guessInput === "quit") {
        readline.close();
    } else {
        StartGame();
    }
 });
}
StartGame();
});


//overall looks good! Running! However, consider having an AnswerInput like GuessInput- Sandy