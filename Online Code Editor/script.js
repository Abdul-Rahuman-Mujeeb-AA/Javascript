const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const previewFrame = document.getElementById("previewFrame");
const themeToggle = document.getElementById("themeToggle");
const resetBtn = document.getElementById("resetBtn");

// Default Code
const defaultHTML = `<h1>Hello World</h1>`;
const defaultCSS = `body { font-family: Arial; text-align: center; }`;
const defaultJS = `console.log("Hello from JS");`;

// Set default content
htmlCode.value = defaultHTML;
cssCode.value = defaultCSS;
jsCode.value = defaultJS;

// Update Preview
function updatePreview() {
    const content = `
        <html>
        <head>
            <style>${cssCode.value}</style>
        </head>
        <body>
            ${htmlCode.value}
            <script>${jsCode.value}<\/script>
        </body>
        </html>
    `;
    previewFrame.srcdoc = content;
}

// Live update
htmlCode.addEventListener("input", updatePreview);
cssCode.addEventListener("input", updatePreview);
jsCode.addEventListener("input", updatePreview);

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Light Mode";
    } else {
    themeToggle.textContent = "Dark Mode";
    }
});

// Reset Button
resetBtn.addEventListener("click", () => {
    htmlCode.value = defaultHTML;
    cssCode.value = defaultCSS;
    jsCode.value = defaultJS;
    updatePreview();
});

// Initial load
updatePreview();
