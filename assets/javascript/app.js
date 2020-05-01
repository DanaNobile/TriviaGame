
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


//user clicks true or false
// value is stored
// if value === correct then correctAns ++
// if value === incorrect then incorrectAns ++

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
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)

    }

});

$('#false1').one("click", function () {
    radioValue = $("input[name='choice1']:checked").val();

    if (radioValue === 'falseA') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});

// Question 2 Logic (answer false)
$('#true2').one("click", function () {
    radioValue = $("input[name='choice2']:checked").val();

    if (radioValue === 'true') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false2').one("click", function () {
    radioValue = $("input[name='choice2']:checked").val();

    if (radioValue === 'false') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }
});


// Question 3 Logic (answer true)
$('#true3').one("click", function () {
    radioValue = $("input[name='choice3']:checked").val();

    if (radioValue === 'true') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false3').one("click", function () {
    radioValue = $("input[name='choice3']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});


// Question 4 Logic (answer is false)
$('#true4').one("click", function () {
    radioValue = $("input[name='choice4']:checked").val();

    if (radioValue === 'true') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false4').one("click", function () {
    radioValue = $("input[name='choice4']:checked").val();

    if (radioValue === 'false') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }
});


// Question 5 Logic (answer true)
$('#true5').one("click", function () {
    radioValue = $("input[name='choice5']:checked").val();

    if (radioValue === 'true') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false5').one("click", function () {
    radioValue = $("input[name='choice5']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});

// Question 6 Logic (answer is false)
$('#true6').one("click", function () {
    radioValue = $("input[name='choice6']:checked").val();

    if (radioValue === 'true') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }

});

$('#false6').one("click", function () {
    radioValue = $("input[name='choice6']:checked").val();

    if (radioValue === 'false') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }
});

// Question 7 Logic (answer is true)
$('#true7').one("click", function () {
    radioValue = $("input[name='choice7']:checked").val();

    if (radioValue === 'true') {
        correctAns++
        console.log("true");
        $('.correct').html("Correct:  " + correctAns)
    }

});

$('#false7').one("click", function () {
    radioValue = $("input[name='choice7']:checked").val();

    if (radioValue === 'false') {
        incorrectAns++
        console.log("true");
        $('.incorrect').html("Incorrect:  " + incorrectAns)
    }
});


// });


// thisk ind of worked but not right

// $(document).ready(function () {
//     $('#true1').click(function () {
//         radioValue = $("input[name='choice1']:checked").val();

//         if (radioValue === 'trueA') {
//             correctAns++
//             console.log("true");
//             $('.correct').html("Correct:  " + correctAns)
//         }

//     });

//     $('#false1').click(function () {
//         radioValue = $("input[name='choice1']:checked").val();

//         if (radioValue === 'falseA')
//             incorrectAns++
//         console.log("false");
//         $('.incorrect').html("Incorrect:  " + incorrectAns)
//     });
// });



//also not right 
// $(document).ready(function () {
//     $('#q1').one("click", function () {
//         radioValue = $("input[name='choice1']:checked").val();

//         if (radioValue === 'trueA') {
//             correctAns++
//             console.log("true");
//             $('.correct').html("Correct:  " + correctAns)
//         }
//         if (radioValue === 'falseA') {
//             incorrectAns++
//             console.log("true");
//             $('.incorrect').html("Incorrect:  " + incorrectAns)
//         }

//     });

    // $('#false1').one("click", function () {
    //     radioValue = $("input[name='choice1']:checked").val();

    //     if (radioValue === 'falseA') {
    //         incorrectAns++
    //         console.log("true");
    //         $('.incorrect').html("Incorrect:  " + incorrectAns)
    //     }
    // });


// });





// function newGame(){

// 	$('.correct').empty();
// 	$('.incorrect').empty();
// 	$('#unanswered').empty();

// 	currentQuestion = 0;
// 	correctAnswer = 0;
// 	incorrectAnswer = 0;
// 	unanswered = 0;

// }