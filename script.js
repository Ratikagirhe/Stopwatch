const display = document.getElementById("display");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let isRunning = false;
let startTime;
let elapsedTime = 0;
let interval;

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 100); // Update every 100 milliseconds (0.1 seconds)
        isRunning = true;
    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = "00:00:000";
    isRunning = false;
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
