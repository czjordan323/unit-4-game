var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};


var yourScore = 0;
var scoreGoal = 0;

var winCount = 0;
var lossCount = 0;

// gets random numbers

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var gameStart = function () {

    yourScore = 0;

    scoreGoal = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    $("#your-score").text(yourScore);
    $("#cpu-score").text(scoreGoal);


    // Tester
    // console.log("-----------------------------------");
    // console.log("Target Score: " + scoreGoal);
    // console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    //     " | Yellow: " + crystal.yellow.value);
    // console.log("-----------------------------------");

}
// win or lose reset

var checkWin = function () {

    // if current score is higher then add a loss to counter
    if (yourScore > scoreGoal) {
        alert("You lost!");
        console.log("You lost");

        lossCount++;

        $("#losses").text(lossCount);

        gameStart();

    }

    else if (yourScore === scoreGoal) {
        alert("You Won!");
        console.log("You Won!");

        winCount++;

        $("#wins").text(winCount);

        gameStart();
    }
    
};
// clicks for crystals

var addValues = function (clickedCrystal) {

    yourScore += clickedCrystal.value;

    $("#your-score").text(yourScore);

    checkWin();

    console.log("Your Score " + yourScore);
};

// Start Game



gameStart();
$("#blue").click(function () {
    addValues(crystal.blue);

});
$("#red").click(function () {
    addValues(crystal.red);

});

$("#green").click(function () {
    addValues(crystal.green);

});

$("#yellow").click(function () {
    addValues(crystal.yellow);

});




