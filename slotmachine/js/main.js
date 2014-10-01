/// <reference path="jquery.js" />
var playerMoney = 1000;
var jackPot = 500;
var turn = 0;
var bet = 0;
var previousBet = 0;
var winNumber = 0;
var lossNumber = 0;

function showPlayerStats()
{
    var winRatio = winNumber / turn;
    $("#playerTurn").text("Turn: " + turn);
    $("#playerWins").text("Wins: " + winNumber);
    $("#playerLosses").text("Losses: " + lossNumber);
    $("#playerWinRatio").text("Win Ration: " + (winRatio * 100).toFixed(2) + "%");
}

function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {

        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        if ((outCome[spin] >= 1) && (outCome[spin] <= 26)) {
            betLine[spin] = "blank";
        }
        else if ((outCome[spin] >= 27) && (outCome[spin] <= 36)) {
            betLine[spin] = "Grapes";
        }
        else if ((outCome[spin] >= 37) && (outCome[spin] <= 45)) {
            betLine[spin] = "Banana";
        }
        else if ((outCome[spin] >= 46) && (outCome[spin] <= 53)) {
            betLine[spin] = "Orange";
        }
        else if ((outCome[spin] >= 54) && (outCome[spin] <= 58)) {
            betLine[spin] = "Cherry";
        }
        else if ((outCome[spin] >= 59) && (outCome[spin] <= 61)) {
            betLine[spin] = "Bar";
        }
        else if ((outCome[spin] >= 62) && (outCome[spin] <= 63)) {
            betLine[spin] = "Bell";
        }
        else if (outCome[spin] >= 64) {
            betLine[spin] = "Seven";
        }
    }
    return betLine;
}


$("#spinButton").click(function () {
    var spinResult = Reels();
    var fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    $("div#result>p").text(fruits);
    turn++;
    winNumber++;
    showPlayerStats();
});
