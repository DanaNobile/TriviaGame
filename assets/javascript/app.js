
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

// This function brings you to the score when done with the test and hides the game
$('.doneBtn').click(function () {
    $('.game').hide();
    $('.scoreInfo').show();
});

//  This is the timer function: Set to 100 seconds.
var number = 50;
var intervalId;
// This starts the timer upon click of Start button
$(".startBtn").on("click", run);

//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function
function decrement() {
    //  Decrease number by one
    number--;
    //  Show the number in the #show-number tag
    $("#timer").html("Time remaining:  " + number);

    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Show score and hide game when time is up
        $('.scoreInfo').show();
        $('.game').hide();

    }
}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

run();

// This starts the scoring of answers

// These are global variables 
var correctAns = 0;
var incorrectAns = 0;
var unAns = 0;


// Question 1 Logic (answer true)
$('#true1').one("click", function () {
    radioValue = $("input[name='choice1']:checked").val();
    if (radioValue === 'trueA') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false1').one("click", function () {
    radioValue = $("input[name='choice1']:checked").val();
    if (radioValue === 'falseA') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});

// Question 2 Logic (answer false)
$('#true2').one("click", function () {
    radioValue = $("input[name='choice2']:checked").val();
    if (radioValue === 'trueB') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false2').one("click", function () {
    radioValue = $("input[name='choice2']:checked").val();
    if (radioValue === 'falseB') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }
});


// Question 3 Logic (answer true)
$('#true3').one("click", function () {
    radioValue = $("input[name='choice3']:checked").val();
    if (radioValue === 'true') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false3').one("click", function () {
    radioValue = $("input[name='choice3']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});


// Question 4 Logic (answer is false)
$('#true4').one("click", function () {
    radioValue = $("input[name='choice4']:checked").val();

    if (radioValue === 'true') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false4').one("click", function () {
    radioValue = $("input[name='choice4']:checked").val();

    if (radioValue === 'false') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }
});


// Question 5 Logic (answer true)
$('#true5').one("click", function () {
    radioValue = $("input[name='choice5']:checked").val();

    if (radioValue === 'true') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false5').one("click", function () {
    radioValue = $("input[name='choice5']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});

// Question 6 Logic (answer is false)
$('#true6').one("click", function () {
    radioValue = $("input[name='choice6']:checked").val();

    if (radioValue === 'true') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false6').one("click", function () {
    radioValue = $("input[name='choice6']:checked").val();

    if (radioValue === 'false') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }
});

// Question 7 Logic (answer is true)
$('#true7').one("click", function () {
    radioValue = $("input[name='choice7']:checked").val();

    if (radioValue === 'true') {
        correctAns++
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false7').one("click", function () {
    radioValue = $("input[name='choice7']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});




