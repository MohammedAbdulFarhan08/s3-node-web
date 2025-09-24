const fs = require("fs-extra");
const path = require("path");

const buildDir = path.join(__dirname, "build");
fs.ensureDirSync(buildDir);

const publicDir = path.join(__dirname, "public");
if (fs.existsSync(publicDir)) {
  fs.copySync(publicDir, buildDir);
  console.log("Public files copied to build folder.");
}

console.log("Build complete! Ready to deploy to S3.");
