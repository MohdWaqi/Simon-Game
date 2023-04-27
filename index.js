var colours = ["green", "red", "yellow", "blue"];
var computerPattern = [];
var playerPattern =[];
var started = false;
var level = 0;
console.log($(window).width());
if ($(window).width() <= 768 ) {
    $("h1").text("Touch to start")
    $("h1").click(function (event) {
        if (!started) {
            gameStart();
            started = true;
        }
    })
} else {
    $(document).keypress(function (event) {
        if (!started) {
            gameStart();
            started = true;
        }
    })
}



$(".btn").click(function () {
    var buttonColor = $(this).attr("id");
    playerPattern.push(buttonColor);
    animation(buttonColor);
    checkAnswer(buttonColor);
})

function gameStart() {
    playerPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomChoice = colours[Math.floor(Math.random() * 4)];
    $("#" + randomChoice).fadeOut(100).fadeIn(100);
    soundPlay(randomChoice);
    computerPattern.push(randomChoice);
}
function gameOver(user) {
    $("h1").text("Game Over!, Press Any key to Restart.");
    $("body").addClass("incorrectbg");
    setTimeout(() => {
        $("body").removeClass("incorrectbg");
    }, 200);
    $("." + user).addClass("incorrect");
    setTimeout(() => {
        $("." + user).removeClass("incorrect");
    }, 200);
    var sound = new Audio("assets/sounds/wrong.mp3");
    sound.play();
}
function animation(button) {
    $("#" + button).addClass("correct");
    setTimeout(() => {
        $("#" + button).removeClass("correct");
    }, 100);
    soundPlay(button);
}
function checkAnswer(button) {
    if (computerPattern[playerPattern.length - 1] === playerPattern[playerPattern.length-1]) {
        if (computerPattern.length === playerPattern.length) {
            
            setTimeout(() => {
                gameStart();  
            }, 1000);
        }
    }else {
        gameOver(button);
        startAgain()
    }
    }
function soundPlay(button) {
    var sound = new Audio("assets/sounds/" + button + ".mp3");
    sound.play();
}
function startAgain() {
    level = 0;
    started = false;
    computerPattern = [];

}

