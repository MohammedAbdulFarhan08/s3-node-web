🌐 S3 Node.js Web App with CI/CD & Modern UI
Overview

This project is a Node.js static web application deployed on AWS S3 using GitHub Actions for CI/CD.

The workflow automatically:

Builds the app

Runs tests

Deploys all static files (index.html, CSS, JS, images)

Whenever there is a push to the main branch.

✅ The UI has been upgraded with a modern, responsive design and interactive elements.

Features

Automatic Build & Deployment: GitHub Actions triggers deployment on every push to main.

Project Structure
s3-node-webapp/
├─ package.json
├─ index.js
├─ build.js            # Generates index.html + copies static assets
├─ public/
│   ├─ css/
│   │   └─ style.css   # Modern, responsive styling
│   ├─ js/
│   │   └─ script.js   # Interactive example
│   └─ images/
│       └─ logo.png
└─ README.md


->build.js generates index.html and copies all files from public/ to the build/ folder.

->The build/ folder is synced to S3 during deployment.

Modern Responsive UI: Clean design with gradients, cards, and buttons.

Interactive Elements: Example button triggers a greeting using JavaScript.

Static Website Hosting: Fully compatible with AWS S3.

CI/CD Showcase: Demonstrates professional end-to-end workflow.
