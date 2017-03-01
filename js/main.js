$(function() {

  var model = {
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

      },
      start: function() {

      }
    }
  }
  var controller = {
    init: function() {
      view.init();
    },
    start: function() {

    }
  }

  var view = {
    init: function() {
      this.startButton = $('#start-button');
      this.startButton.click(controller.start);

      this.progressBar = $('#progress-bar');
      this.timer = $('#timer');


      this.render()
    },
    render: function() {

    }
  }
  controller.init();
});
