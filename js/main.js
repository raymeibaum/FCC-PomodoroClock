$(function() {

  var sessions = 0;

  var startTime;
  var pauseTime;
  var endTime;
  var timeRemaining;
  var intervalID;
  var progressPercent;


  // Dom elements
  var $startButton = $('#start-button');
  var $checkContainer = $('#check-container');
  var $progressBar = $('#progress-bar');

  $startButton.click(startPomodoro);

  function startPomodoro() {
    setTimer(10);
    if (!intervalID) {
      $startButton.text('Pause');
      intervalID = window.setInterval(update, 500);
    } else {
      window.clearInterval(intervalID);
      intervalID = null;
      pauseTimer();
      $startButton.text('Resume');
    }
  }

  function setTimer(minutes) {
    startTime = Date.now();
    endTime = startTime + minutes * 60000;
  }

  function update() {
    timeRemaining = new Date(endTime - Date.now());
    progressPercent = Math.floor((Date.now() - startTime) / (endTime - startTime) * 100);
    $progressBar.attr('style', `width: ${progressPercent}%`);
  }

  function pauseTimer() {
    pauseTime = timeRemaining;
  }































})
