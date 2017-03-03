$(function() {

  var clock = {
    checks: 0,
    refresh: function() {
      return this.timer.timeRemaining();
    },
    timer: {
      start: null,
      end: null,
      set: function(minutes) {
        this.start = Date.now();
        this.end = this.start + minutes * 60000;
      },
      timeRemaining: function() {
        return new Date(this.end - Date.now());
      },
      timeRemainingInMs: function() {
        return this.end - Date.now();
      }
    },
    progress: {
      getPercentage: function() {
        return Math.floor((Date.now() - clock.timer.start) / (clock.timer.end - clock.timer.start) * 100);
      }
    }
  };

  var controller = {
    init: function() {
      view.init();
    },
    start: function() {
      clock.timer.set(1);
      window.setInterval(view.update, 100);
    },
    getClockObject: function() {
      return clock;
    },
    didFinish: function() {
      return clock.timer.timeRemainingInMs() <= 0;
    }
  };

  var view = {
    init: function() {
      this.$startButton = $('#start-button');
      this.$startButton.click(function() {
        controller.start();
        $(this).fadeOut();
      });
      this.$progressBar = $('#progress-bar');
      this.$checkContainer = $('#check-container');
      this.$timer = $('#timer');

    },
    displayChecks: function(numberOfChecks) {
      this.$checkContainer.empty();
      for (var i = 0; i < numberOfChecks; i++) {
        this.$checkContainer.append('<i class="fa fa-2x fa-check animated fadeIn" aria-hidden="true"></i>');
      }
    },
    update: function() {
      if (!controller.didFinish()) {
        view.updateTimer(controller.getClockObject());
        view.updateProgressBar(controller.getClockObject());
      }
    },
    updateTimer: function(clockObject) {
      var date = clockObject.timer.timeRemaining()
      var minutes = view.formatTime(date.getMinutes());
      var seconds = view.formatTime(date.getSeconds())
      this.$timer.text(`${minutes}:${seconds}`);
    },
    updateProgressBar: function(clockObject) {
      this.$progressBar[0].style.width = clockObject.progress.getPercentage() + '%';
    },
    formatTime: function(time) {
      return time < 10 ? '0' + time : time;
    }
  };

  controller.init();
});
