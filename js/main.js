$(function() {

  var clock = {
    checks: 0,
    progress: {
      value: 0,
      color: null,
      setColor: function(color) {

      }
    },
    timer: {
      start: null,
      end: null,
      set: function(minutes) {
        this.start = Date.now();
        this.end = Date.now() + minutes * 60000;
        console.log(this);
      },
      timeRemaining: function() {
        return this.end - Date.now();
      },
      refresh: function() {
        console.log()
      }
    }
  }
  var controller = {
    init: function() {
      view.init();
    },
    start: function() {
      clock.timer.set(25);
      // window.setInterval(, 1000);
    }
  }

  var view = {
    init: function() {
      this.$startButton = $('#start-button');
      this.$startButton.click(controller.start);

      this.$progressBar = $('#progress-bar');
      this.$checkContainer = $('#check-container');

    },
    displayChecks: function(numberOfChecks) {
      this.$checkContainer.empty();
      for (var i = 0; i < numberOfChecks; i++) {
        this.$checkContainer.append('<i class="fa fa-2x fa-check animated fadeIn" aria-hidden="true"></i>');
      }
    },
    update: function(timerObject) {

    }
  }
  controller.init();
});
