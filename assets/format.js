// variables for the functions go here
var strtquiz = document.querySelector('#button');
var  quiztimer = document.getElementById('#countdown');

// Need to make an button event to start the quiz
strtquiz.addEventListener("click", function() {
    alert("It Works!");
});

function beginquiz() {
    
}

// Need to make a timer
function countdown() {
    var timeLeft = 200;
    quiztimer.textContent = timeLeft;
    var timer = setInterval(function() {
        timeLeft--;
        quiztimer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);

}

function timeUp() {
    quiztimer.textContent = "Sorry your out of time";
}
countdown();
