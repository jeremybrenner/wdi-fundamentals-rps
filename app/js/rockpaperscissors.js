////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
      if ( playerMove === computerMove) {
            winner = 'tie'
        } else if ((playerMove === 'rock') && (computerMove === 'paper')) {
            winner = 'computer';
        } else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
            winner = 'player';
        } else if ((playerMove === 'paper') && (computerMove === 'rock')) {
            winner = 'player';
        } else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
            winner = 'computer';
        } else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
            winner = 'computer';
        } else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
            winner = 'player';
        }    

        ////////////////////////////////////////////////////////////////////////////////////////////////
        /* Repl.it test for function getWinner(playerMove,computerMove), built parallel to test specs */
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        //console.log(getWinner('rock','rock'));
        //console.log(getWinner('rock','paper'));
        //console.log(getWinner('rock','scissors'));

        //console.log(getWinner('paper','rock'));
        //console.log(getWinner('paper','paper'));
        //console.log(getWinner('paper','scissors'));

        //console.log(getWinner('scissors','rock'));
        //console.log(getWinner('scissors','paper'));
        //console.log(getWinner('scissors','scissors'));

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if ( winner === 'player') {
            console.log ('Player chose ' + playerMove + ', and Computer chose ' + computerMove);
            console.log ('Player Wins!');
            playerWins +=1;
            }
        else if ( winner === 'computer'){
            console.log ('Computer chose ' + computerMove + ', and Player chose ' + playerMove);
            console.log ('Computer Wins!')
            computerWins +=1;
            }
        else {
            console.log ('Its a tie, no winner!')
        }
        console.log ('');
        console.log ('<<< Scoreboard >>>');
        console.log ( 'Player: ' + playerWins);
        console.log ( 'Computer: ' + computerWins); 
        console.log ('');
    }
    (playerWins === 5)? console.log("You win the game!"):console.log("Computer wins the game!");
    return [playerWins, computerWins];
}
playToFive();

///////////////////////////////////////////////
/*function to allow play to 'x' instead of 5 */
///////////////////////////////////////////////

/*function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if ( winner === 'player') {
            console.log ('Player chose ' + playerMove + ', and Computer chose ' + computerMove);
            console.log ('Player Wins!');
            playerWins +=1;
            }
        else if ( winner === 'computer'){
            console.log ('Computer chose ' + computerMove + ', and Player chose ' + playerMove);
            console.log ('Computer Wins!');
            computerWins +=1;
            }
        else {
            console.log ('Its a tie, no winner!');
        }
        console.log ('');
        console.log ('<<< Scoreboard >>>');
        console.log ( 'Player: ' + playerWins);
        console.log ( 'Computer: ' + computerWins); 
        console.log ('');
    }
    (playerWins === x)? console.log("You win the game!"):console.log("Computer wins the game!");
    return [playerWins, computerWins];
}
playTo();*/