// mood-tracker.js

const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();

// Function to record mood
function recordMood() {
  console.log("Recording mood...");
  const mood = prompt("How are you feeling today? ");
  console.log("Received mood:", mood);

  const currentDate = new Date().toISOString().split("T")[0];
  const logFilePath = path.join(__dirname, "mood.log");

  const logEntry = `${currentDate}: ${mood}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error recording mood:", err);
    } else {
      console.log("Mood recorded successfully.");
    }
  });
}

// Export the recordMood function
module.exports = {
  recordMood,
};
