function getComputerChoice()
{
    const ans = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];

    return choices[ans];
}

function getHumanChoice()
{
    const userInput = prompt("Rock, Paper, or Scissors? ");
    let ans = "";

    if (userInput.toLowerCase() == "rock")
    {
        ans += "Rock";
    }
    else if (userInput.toLowerCase() == "paper")
    {
        ans += "Paper";
    }
    else if (userInput.toLowerCase() == "scissors")
    {
        ans += "Scissors";
    }
    else
    {
        ans += "Invalid choice. Plese try again.";
    }

    return ans;
}

function playRound(humanChoice, computerChoice, currentGames)
{
    let humanScore = 0, computerScore = 0;

    if (humanChoice.toLowerCase() == computerChoice.toLowerCase())
    {
        console.log("It's a tie! No one gets a point.");
    }
    else if (humanChoice.toLowerCase() == "rock" 
    && computerChoice.toLowerCase() == "scissors")
    {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" 
    && computerChoice.toLowerCase() == "rock")
    {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" 
    && computerChoice.toLowerCase() == "paper")
    {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    if (currentGames == 4)
    {
        if (humanScore > computerScore)
            {
                console.log(`The human wins the entire game!!! 
                    Total points: ${humanScore}`);
            }
            else if (humanScore < computerScore)
            {
                console.log(`The computer wins the entire game!!! Next time you will win...`);        
            }
            else
            {
                console.log(`It's a tie for the whole game! You both did good....`);
            }
    }
}

function playGame()
{
    let gamesPlayed = 0;

    while (gamesPlayed < 5)
    {
        let humanSelects = getHumanChoice();
        let compSelects = getComputerChoice();
        playRound(humanSelects, compSelects, gamesPlayed);
        gamesPlayed++;
    }
}

playGame();