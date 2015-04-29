// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {
  };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
(function ($) {

  /**
   * The array with all video element configurations which should be watched.
   * @type {Array}
   */
  var configurations = [];

  /**
   * Config object with the default values.
   * @type {{}}
   */
  var defaultConfig = {
    getVolume: function (top) {
      var volume = Math.min(Math.abs(top - this.element.offset().top), 400);
      return 1 - (volume / 400);
    }
  };

  $(window).scroll(function () {
    for (var i = 0; i < configurations.length; i++) {
      configurations[i].element.animate({volume: configurations[i].getVolume($(window).scrollTop())}, 10);
    }
  });


  $.fn.scrollVideo = function (config) {
    config = config || {};
    config.element = $(this);
    $.extend(config, defaultConfig);
    configurations.push(config);
    $(window).trigger('scroll');
    return this;
  };

}(jQuery));
