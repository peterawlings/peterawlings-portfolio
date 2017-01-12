portfolio.waypoints = (function () {
  'use strict';

  // variables
  var $topBar = $('.c-top-bar');

  var initialize = function() {
    var waypoints = $('[data-js="waypoint"]').waypoint(function(direction) {
      $(this.element).addClass('is-shown');
    },{
      offset: '80%'
    })
  };

  return {
    init: initialize
  };
}());
