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
        return this.end - Date.now();
      }
    }
  };

  var controller = {
    init: function() {
      view.init();
    },
    start: function() {
      clock.timer.set(25);
      window.setInterval(view.update, 1000);
    },
    getClockObject: function() {
      return clock;
    }
  };

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
    update: function() {
      currentClock = controller.getClockObject()
      console.log(currentClock.timer.timeRemaining());
    }
  };

  controller.init();
});
