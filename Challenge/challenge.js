var clickAnswerCorrect= false;
var clickAnswerOne= false;
var clickAnswerTwo= false;
var clickAnswerThree= false;

class Quiz {
    question;
    answer1;
    answer2;
    answer3;
    correctAnswer;

    constructor(question, answer1, answer2, answer3, correctAnswer) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.correctAnswer = correctAnswer;
    }
}

var quizArray = [];
var i = 0;

function save() {
    var question = document.getElementById("question").value;
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;
    var correctAnswer = document.getElementById("correctAnswer").value;

    if (question != "" && answer1 != "" && answer2 != "" && answer3 != "" && correctAnswer != "") {
        var quiz = new Quiz(question, answer1, answer2, answer3, correctAnswer);
        quizArray[i] = quiz;
        i++;
        alert("Your Question has been saved!")
    } else {
        alert("Please fill in all the input fields!")
    }

}



function showQuestion() {
    var j = Math.floor(Math.random() * quizArray.length);
    console.log(j);
    var k = 0;
    console.table(quizArray);

    document.getElementById("questionId").innerHTML = quizArray[j].question;
    k++;
    document.getElementById('spanAnswer1').innerHTML = quizArray[j].answer1;
    k++;
    document.getElementById('spanAnswer2').innerHTML = quizArray[j].answer2;
    k++;
    document.getElementById('spanAnswer3').innerHTML = quizArray[j].answer3;
    k++;
    document.getElementById('spanCorrectAnswer').innerHTML = quizArray[j].correctAnswer;

    document.getElementById("questionForm").style.display = "block";
}

function clickAnswerCorr () {
	clickAnswerCorrect =! clickAnswerCorrect;
}

function clickAnswer1 () {
	clickAnswerOne =! clickAnswerOne;
}


function clickAnswer2 () {
	clickAnswerTwo =! clickAnswerTwo;
}


function clickAnswer3 () {
	clickAnswerThree =! clickAnswerThree;
}


function fuckit() {
	 
	 var twoAnswer = document.getElementById("answer2Id").value;
	 var threeAnswer = document.getElementById("answer3Id").value;
	 var answerCorrect = document.getElementById("correctAnswerId").value;
	 if (clickAnswerOne == true || clickAnswerTwo == true || clickAnswerThree == true) {
	 	alert("You lose!");
	 } else if (clickAnswerCorrect == true) {
	 	alert("You win!")
	 }
}

document.getElementById("correctAnswerId").addEventListener("change", clickAnswerCorr, false);
document.getElementById("answer1Id").addEventListener("change", clickAnswer1, false);
document.getElementById("answer2Id").addEventListener("change", clickAnswer2, false);
document.getElementById("answer3Id").addEventListener("change", clickAnswer3, false);

document.getElementById("saveQuestion").addEventListener("click", save, false);

document.getElementById("startQuiz").addEventListener("click", showQuestion, false);

document.getElementById("submitAnswer").addEventListener("click", fuckit, false);