var numberRounds = prompt("How many rounds do you wanna play?")
var num1 = parseInt(numberRounds);
var globalTies = 0
var globalWins = 0
var globalLosses = 0

for (let i = 0; i < num1; i++) {
    var numberRPS = Math.floor(Math.random() * 2);
    if (numberRPS === 0) {
        var computerRPS = "r"
    }
    if (numberRPS === 1) {
        var computerRPS = "p"
    }
    if (numberRPS === 2) {
        var computerRPS = "s"
    }
    var userRPS = prompt("Type 'r', 'p', or 's'.")
    if (userRPS === "r" && computerRPS === "s") {
        alert("You won this round!")
        globalWins++;
    }
    else if (userRPS === "p" && computerRPS === "r") {
        alert("You won this round!")
        globalWins++;
    }
    else if (userRPS === "s" && computerRPS === "p") {
        alert("You won this round!")
        globalWins++;
    }
    else if (userRPS === computerRPS) {
        alert("You tied this round!")
        globalTies++; 
    } else {
        alert("You lost this round!")
        globalLosses++;
    }
}

alert(`You won ${globalWins} times!`)
alert(`You tied ${globalTies} times!`)
alert(`You lost ${globalLosses} times!`)
