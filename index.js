const fs = require("fs");
const path = require("path");

const indexContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My S3 Node App</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <img src="images/logo.png" alt="Logo" class="logo">
        <h1>Welcome to My S3 Node Web App</h1>
        <p>Deployed with GitHub Actions and AWS S3</p>
    </header>
    <main>
        <button onclick="greetUser()">Click Me!</button>
        <p id="message"></p>
    </main>
    <footer>
        <p>&copy; 2025 Mohammed Farhan</p>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>
`;

// Write to build folder
const buildDir = path.join(__dirname, "build");
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

fs.writeFileSync(path.join(buildDir, "index.html"), indexContent);

console.log("index.html created in build folder!");
