const questions = ["1) The type of JavaScript language is ___",
"2) Which one of the following also known as Conditional Expression:",
"3) In JavaScript, what is a block of statement?",
"4) When interpreter encounters an empty statements, what it will do:",
"5) The function and  var are known as:"];
const options = [["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
["Keywords", "Data types", "Declaration statements", "Prototypes"]];
const answer = ["Object-Based", 
"immediate if", 
"block that combines a number of statements into a single compound statement",
"Ignores the statements",
"Declaration statements"];

let i = 0;
let score = 0;
function displayQuestions() {
    updateScore();
    const buttonElement = document.getElementById("nextButton");
    const mainContent = document.getElementById("main-content");
    const textContent = document.getElementById("ques1");
    const totalScore = document.getElementById("total-score");
    const result = document.getElementById("final-result");

    totalScore.style.visibility = "hidden";
    totalScore.innerHTML = "";
    result.style.visibility = "hidden";
    result.innerHTML = "";
    mainContent.style.backgroundColor = "rgb(247, 246, 193)";
    textContent.style.visibility = "visible";
    
    //quiz end
    if(i == 5) {
        textContent.style.visibility = "hidden";
        
        totalScore.style.visibility = "visible";
        result.style.visibility = "visible";
        totalScore.innerHTML = "<h2>Your Score is:"+score+"</h2>";
        if(score >= 4)
            result.innerHTML = "<h2>Result: Yes</h2>";
        else if(score >= 2 && score <= 3)
            result.innerHTML = "<h2>Result: Maybe</h2>";
        else if(score <= 1)
            result.innerHTML = "<h2>Result: No</h2>";
        //retake quiz
        buttonElement.innerHTML = "Retake Quiz";
        i = 0;
        score = 0;
        return;
    }

    //display questions
    const question1 = document.getElementById("questionText1");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");
    const label4 = document.getElementById("label4");

    question1.innerHTML = questions[i];
    label1.innerHTML = options[i][0];
    label2.innerHTML = options[i][1];
    label3.innerHTML = options[i][2];
    label4.innerHTML = options[i][3];
    uncheckAllRadioButtons();
    i++;
    
    //updateScore
    
    //change button text
    if(i<5)
        buttonElement.innerHTML = "Next";
    if(i == 5) {
        buttonElement.innerHTML = "Submit";
    }  
    
  
}

function updateScore() {
    const optionRadio1 = document.getElementById("Radio1");
    const optionRadio2 = document.getElementById("Radio2");
    const optionRadio3 = document.getElementById("Radio3");
    const optionRadio4 = document.getElementById("Radio4");
   
    if(optionRadio1.checked == true) {
        const answered = document.querySelector("[for='Radio1']");
        if(answered.innerHTML == answer[i-1]) {
            score++;
        }
    }
    else if(optionRadio2.checked == true) {
        const answered = document.querySelector("[for='Radio2']");
        if(answered.innerHTML == answer[i-1]) {
            score++;
        }
    }
    else if(optionRadio3.checked == true) {
        const answered = document.querySelector("[for='Radio3']");
        if(answered.innerHTML == answer[i-1]) {
            score++;
        }
    }
    else if(optionRadio4.checked == true) {
        const answered = document.querySelector("[for='Radio4']");
        if(answered.innerHTML == answer[i-1]) {
            score++;
        }
    }
}

function uncheckAllRadioButtons() {
    const radio1 = document.getElementById("Radio1");
    const radio2 = document.getElementById("Radio2");
    const radio3 = document.getElementById("Radio3");
    const radio4 = document.getElementById("Radio4");
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
}
