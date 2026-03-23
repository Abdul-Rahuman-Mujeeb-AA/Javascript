let metricBtn = document.getElementById("metricBtn");
let imperialBtn = document.getElementById("imperialBtn");

let metricInputs = document.getElementById("metricInputs");
let imperialInputs = document.getElementById("imperialInputs");

metricBtn.onclick = () => {
    metricInputs.style.display = "block";
    imperialInputs.style.display = "none";

    metricBtn.classList.add("active");
    imperialBtn.classList.remove("active");
};

imperialBtn.onclick = () => {
    metricInputs.style.display = "none";
    imperialInputs.style.display = "block";

    imperialBtn.classList.add("active");
    metricBtn.classList.remove("active");
};

function calculateBMI() {
    let bmi;

    if (metricInputs.style.display !== "none") {
    let height = document.getElementById("heightCm").value / 100;
    let weight = document.getElementById("weightKg").value;

    bmi = weight / (height * height);
    } else {
    let height = document.getElementById("heightIn").value;
    let weight = document.getElementById("weightLb").value;

    bmi = (703 * weight) / (height * height);
    }

    bmi = bmi.toFixed(2);

    document.getElementById("bmiValue").innerText = "BMI: " + bmi;

    let category = "";
    let color = "";
    let width = 0;

    if (bmi < 18.5) {
    category = "Underweight";
    color = "bg-info";
    width = 25;
    } else if (bmi < 25) {
    category = "Normal Weight";
    color = "bg-success";
    width = 50;
    } else if (bmi < 30) {
    category = "Overweight";
    color = "bg-warning";
    width = 75;
    } else {
    category = "Obese";
    color = "bg-danger";
    width = 100;
    }

    document.getElementById("bmiCategory").innerText = category;

    let bar = document.getElementById("bmiBar");

    bar.style.width = width + "%";
    bar.className = "progress-bar " + color;
    bar.innerText = category;
}
