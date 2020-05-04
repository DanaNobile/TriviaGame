




$(document).ready(function () {

    // GLOBAL VARIABLES

    // Track what question we're on
    var counter = 0;

    // Timer Start Number
    var countStartNumber = 15;

    // Count correct guesses
    var correctAns = 0;

    // Count incorrect 
    var incorrectAns = 0;

    // This is an array of GAME QUESTIONS
    var questions = [{
        question: "The word 'yoga' is derived from a Sanskrit word that means 'union'.",
        answers: ["True", "False"],
        correctAnswer: "True",
        image: "<img src='assets/images/1union.jpg' class='image'>"
    }, {
        question: "Yoga originates from Thailand.",
        answers: ["True", "False"],
        correctAnswer: "False",
        image: "<img src='assets/images/2india.jpg' class= 'image'>"
    }, {
        question: "There are 26 postures in the Bikram Yoga series.",
        answers: ["True", "False"],
        correctAnswer: "True",
        image: "<img src='assets/images/3bikram.jpg' class='image'>"
    }, {
        question: "The 5th chakra signifies the process of enlightenment.",
        answers: ["True", "False"],
        correctAnswer: "False",
        image: "<img src='assets/images/4chakra.jpg' class='image'>"
    }, {
        question: "The Yamas represent moral and ethical rules.",
        answers: ["True", "False"],
        correctAnswer: "True",
        image: "<img src='assets/images/5yamas.jpg' class='image'>"
    }, {
        question: "Pranayama refers to how far the spine will bend.",
        answers: ["True", "False"],
        correctAnswer: "False",
        image: "<img src='assets/images/6breathing.jpg' class='image'>"
    }, {
        question: "There are eight limbs in the practice of Ashtanga yoga.",
        answers: ["True", "False"],
        correctAnswer: "True",
        image: "<img src='assets/images/7ashtanga.jpg' class='image'>"
    }]

    function questionContent() {
        $(".game").append("<p><strong>" +
            questions[counter].question +
            "</p><p class='answers'>" +
            questions[counter].answers[0] +
            "</p><p class='answers'>" +
            questions[counter].answers[1] +
            "</strong></p>");
    }

    // If the user guesses correctly
    function answeredCorrectly() {
        $(".game").html("<p class='correct'>Correct!!</p>");
        correctAns++;
        var correctAnswer = questions[counter].correctAnswer;
        $(".game").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
            questions[counter].image);
        setTimeout(nextQuestion, 3000);
        counter++;
    }

    // If the user guesses incorrectly
    function answeredIncorrectly() {
        $(".game").html("<p class='incorrect'>Incorrect.</p>");
        incorrectAns++;
        var correctAnswer = questions[counter].correctAnswer;
        $(".game").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
            questions[counter].image);
        setTimeout(nextQuestion, 3000);
        counter++;
    }

    // If the timer runs out...
    function timeUp() {
        if (time === 0) {
            $(".game").html("<p class='timeUp'>Time's Up!</p>");
            incorrectAns++;
            var correctAnswer = questions[counter].correctAnswer;
            $(".game").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
                questions[counter].image);
            setTimeout(nextQuestion, 3000);
            counter++;
        }
    }


    // RESULTS SCREEN
    function results() {
        if (correctAns === questions.length) {
            var endMessage = "You scored 100%!";
            var bottomText = "Great job!"
        }
        else if (correctAns > incorrectAns) {
            var endMessage = "Good job!";
            var bottomText = "Not too bad, yogi!"
        }
        else {
            var endMessage = "Keep practicing..";
            var bottomText = "Yoga is a practice, take time to learn!"
        }

        $(".game").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" +
            correctAns + "</strong> right.</p>" + "<p>You got <strong>" +
            incorrectAns + "</strong> wrong.</p>");

        $(".game").append("<h1 class='startBtn'>Start Over?</h1>");

        $("#bottomText").html(bottomText);
        gameReset();
        $(".startBtn").click(nextQuestion);

    }



    // Sets game timer to 15 seconds
    function timer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                timeUp();
            }
            if (time > 0) {
                time--;
            }
            $("#timer").html("<strong>" + time + "</strong>");
        }
    }



    function nextQuestion() {
        if (counter < questions.length) {
            time = 15;
            $(".game").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
            questionContent();
            timer();
            timeUp();
        }
        else {
            results();
        }
    }

    // Reset score upon game restart

    function gameReset() {
        counter = 0;
        correctAns = 0;
        incorrectAns = 0;
        // Timer Start Number
        // var countStartNumber = 15;
    }


    function startGame() {
        $(".game").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
        $(".startBtn").hide();
        questionContent();
        timer();
        timeUp();
    }

    $(".startBtn").click(nextQuestion);



    $(".game").on("click", ".answers", (function () {
        var userGuess = $(this).text();
        if (userGuess === questions[counter].correctAnswer) {
            clearInterval(clock);
            answeredCorrectly();
        }
        else {
            clearInterval(clock);
            answeredIncorrectly();
        }
    }))
});