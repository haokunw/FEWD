
// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

var humanScore = 0;
var computerScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Inside the function:

function play(humanPlay, computerPlay) {
  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  console.log ("You played " + humanPlay + ". The bot played " + computerPlay + ".");

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
    if (humanPlay === computerPlay) {
      console.log ("You tied.");
    }
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
    else if (humanPlay === "paper" && computerPlay === "rock"
            || humanPlay === "scissors" && computerPlay === "paper") {
      humanScore +=1;
      console.log ("You win! Your total score is " + humanScore + ". The bot's total score is " + computerScore + ".");
    }

  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )
    else {
      computerScore +=1;
      console.log ("You lose! :( Your total score is " + humanScore + ". The bot's total score is " + computerScore + ".");
    }

    if (humanScore>=2 || computerScore>=2 && humanScore!==computerScore) {
      return;
      console.log ("Game over. Your total score is " + humanScore + ". The bot's total score is " + computerScore + ".");
    }
}

  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"
  // console.log ("You have " + humanScore + " points.");
  // console.log ("The bot has " + computerScore + " points.");

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.

play("paper", "rock");
play("paper", "scissors");
play("rock", "scissors");
play("scissors", "paper");
play("scissors", "rock");
play("rock", "rock");

// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
