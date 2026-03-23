function calculateGrade() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);
    let s5 = parseFloat(document.getElementById("s5").value);
    let s6 = parseFloat(document.getElementById("s6").value);

    let marks = [s1, s2, s3, s4, s5, s6];

    for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
        document.getElementById("result").innerHTML =
        "Enter valid marks between 0 and 100";
        return;
    }
    }

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    }

    let average = total / marks.length;

    let grade;

    if (average >= 90) {
    grade = "A";
    } else if (average >= 75) {
    grade = "B";
    } else if (average >= 60) {
    grade = "C";
    } else if (average >= 40) {
    grade = "D";
    } else {
    grade = "Fail";
    }

    document.getElementById("result").innerHTML =
    "Total Marks: " +
    total +
    "<br>Average: " +
    average.toFixed(2) +
    "<br>Grade: " +
    grade;
}

function eraseMarks() {
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("s4").value = "";
    document.getElementById("s5").value = "";
    document.getElementById("s6").value = "";

    document.getElementById("result").innerHTML = "";
}