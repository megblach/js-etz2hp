const timer = document.getElementById("timer");

const minutesInput = timer.querySelector("#minutes");
const secondsInput = timer.querySelector("#seconds");

const startButton = timer.querySelector("button");

// callback
function startTimer() {
  minutesInput.setAttribute("disabled", true);
  secondsInput.setAttribute("disabled", true);
  startButton.setAttribute("disabled", true);

  const minutes = minutesInput.value;
  const seconds = secondsInput.value;

  let totalSeconds = minutes * 60 + seconds;

  const intervalRef = setInterval(function() {
    if (totalSeconds === 0) {
      clearInterval(intervalRef);
    }

    totalSeconds -= 1;

  
    
  }, 1000);
}

// obsluga zdarzenia click
startButton.addEventListener("click", startTimer);


