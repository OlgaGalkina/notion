let timer;
let timerOn = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

function startTimer() {
  timerOn = true;
  timer = setInterval(incrementTimer, 1000);
}

function pauseTimer() {
  timerOn = false;
  clearInterval(timer);
}

function resetTimer() {
  timerOn = false;
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = '00:00:00';
}

function incrementTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

startBtn.addEventListener('click', () => {
  if (!timerOn) {
    startTimer();
  }
});

pauseBtn.addEventListener('click', () => {
  if (timerOn) {
    pauseTimer();
  }
});

resetBtn.addEventListener('click', () => {
  resetTimer();
});

