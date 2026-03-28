const password = document.getElementById("password");
const show = document.getElementById("show");
const strengthBar = document.getElementById("strengthBar");
const submitBtn = document.getElementById("submitBtn");

/* Show / Hide Password */
show.addEventListener("change", () => {
    password.type = show.checked ? "text" : "password";
});

/* Password Input Listener */
password.addEventListener("input", () => {
    const value = password.value;

    const checks = {
    length: value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[@#$%^&+=]/.test(value),
    };

    let score = 0;

    Object.keys(checks).forEach((key) => {
    updateUI(key, checks[key]);
    if (checks[key]) score++;
    });

    updateStrength(score);

    const isValid = score === 5;
    submitBtn.disabled = !isValid;
    submitBtn.classList.toggle("active", isValid);
});

/* Update Rule UI */
function updateUI(id, condition) {
    const el = document.getElementById(id);
    el.classList.toggle("valid", condition);
    el.classList.toggle("invalid", !condition);
}

/* Strength Bar Logic */
function updateStrength(score) {
  const width = score * 20;
    strengthBar.style.width = width + "%";

    if (score <= 2) {
    strengthBar.style.background = "#ff4d4d"; // weak
    } else if (score <= 4) {
    strengthBar.style.background = "#ffa500"; // medium
    } else {
      strengthBar.style.background = "#28a745"; // strong
    }
}

/* Optional: Button Click */
submitBtn.addEventListener("click", () => {
    alert("Password is valid and ready to submit!");
});
