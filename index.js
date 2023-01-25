var colOptions = ["red", "blue", "green", "yellow"];
var pattern = [];
var userPattern = [];
var level = 1;
var started = false;
var count = 0;
document.addEventListener('keydown', function (event) {
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".btn").click(function (event) {
    if (started) {
        var userColor = $(this).attr("id");
        $("#" + userColor).fadeOut(100).fadeIn(100);
        userPattern.push(userColor);
        flashColor(userColor);
        playSound(userColor);
        if (userPattern[userPattern.length - 1] == pattern[userPattern.length - 1]) {
            if (userPattern.length == level-1){
                setTimeout(function () { nextSequence(); }, 1000);
                userPattern=[];
            }
        }
        else {
            level = 1;
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("h1").html("Game Over, Press Any Key to Restart");
            started = false;
            pattern = [];
            userPattern=[];
        }
    }
});
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function flashColor(name) {
    $('#' + name).addClass("pressed");
    setTimeout(function () {
        $('#' + name).removeClass("pressed");
    }, 100);
}

function checkPattern() {

}

function nextSequence() {
    document.querySelector("h1").innerHTML = "Level " + level;
    ++level;
    //Random number and color chose
    curr = colOptions[Math.floor(Math.random() * 4)];
    pattern.push(curr);

    //flash screen for random button
    $("#" + curr).fadeOut(100).fadeIn(100);

    //Play audio for random color button
    playSound(curr);

    //user clicked button detection

}
