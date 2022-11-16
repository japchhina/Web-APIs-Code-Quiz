var currentQuestionIndex= 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var initialsEl = document.getElementById('initials');
var startBtn = document.getElementById('start');

function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');

    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class');

    timerInterval = setInterval(clockTick, 1000);

    timerEl.textContent = timer;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
 
    for (var i = 0; i < currentQuestion.choices.length; i++) {  
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        choicesEl.appendChild(choiceNode);
    }
}

function questionClick(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches('choice')) {
        return;
    }
}

