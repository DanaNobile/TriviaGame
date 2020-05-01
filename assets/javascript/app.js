
// This function hides the game and score upon page load

$(function () {
    $('.game').hide();
    $('.scoreInfo').hide();
});

// This button shows the game once the start button is clicked and hides the start button
$('.startBtn').click(function () {
    $('.game').show();
    $('.startBtn').hide();

});




//  This is the timer function: Set to 100 seconds.
var number = 100;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

$(".startBtn").on("click", run);

//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#timer").html("Time remaining:  " + number);

    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

run();


var correctAns = 0;
var incorrectAns = 0;
var unAns = 0;