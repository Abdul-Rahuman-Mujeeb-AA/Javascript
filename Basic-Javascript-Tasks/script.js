// Hello World
function helloWorld() {
    console.log("Hello, World!");
    alert("Hello, World!");
}

// Add Two Numbers
function addNumbers() {
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    document.getElementById("sumResult").innerText = "Sum: " + (a + b);
}

// Even or Odd
function checkEvenOdd() {
    let n = document.getElementById("evenOddInput").value;
    let result = n % 2 == 0 ? "Even" : "Odd";
    document.getElementById("evenOddResult").innerText = result;
}

// Positive or Negative
function checkPosNeg() {
    let n = document.getElementById("posNegInput").value;
    let result = n >= 0 ? "Positive" : "Negative";
    document.getElementById("posNegResult").innerText = result;
}

// Compare A > B > C
function compareABC() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;

    let result = a > b && b > c ? "A > B > C" : "Condition not satisfied";
    document.getElementById("compareResult").innerText = result;
}

// Voter Eligibility
function checkVoter() {
    let age = document.getElementById("age").value;
    let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";
    document.getElementById("voterResult").innerText = result;
}

// Reverse String
function reverseString() {
    let str = document.getElementById("stringInput").value;
    let reversed = str.split("").reverse().join("");
    document.getElementById("reverseResult").innerText = reversed;
}

// Calculator
function calculate() {
    let a = +document.getElementById("calc1").value;
    let b = +document.getElementById("calc2").value;
    let op = document.getElementById("operator").value;
    let result;

    if (op == "+") result = a + b;
    else if (op == "-") result = a - b;
    else if (op == "*") result = a * b;
    else if (op == "/") result = b !== 0 ? a / b : "Cannot divide by zero";

    document.getElementById("calcResult").innerText = result;
}

// Character Count
function countChars() {
    let str = document.getElementById("charInput").value;
    document.getElementById("charResult").innerText = "Length: " + str.length;
}

// Change Background Color
function changeColor() {
    document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Date & Time
function showDate() {
    document.getElementById("dateResult").innerText = new Date();
}

// Guess Number Game
let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    let guess = +document.getElementById("guessInput").value;
    let result;

    if (guess === randomNumber) {
    result = "Correct!";
    } else {
    result = "Try Again!";
    }

    document.getElementById("guessResult").innerText = result;
}

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
    this.remove();
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
