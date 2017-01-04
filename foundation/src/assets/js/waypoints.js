portfolio.waypoints = (function () {
  'use strict';

  // variables
  var $topBar = $('.c-top-bar');

  var initialize = function() {
    // var waypoint = new Waypoint({
    //   element: document.getElementById('waypoint'),
    //   handler: function(direction) {
    //     console.log('Scrolled to waypoint!')
    //   }
    // })
    // var waypoints = $('.c-tagline').waypoint({
    //   handler: function(direction) {
    //     // notify(this.element.id + ' hit')
    //   }, {
    //     offset: '1%'
    // })
    // var waypoints = $('.c-top-bar').waypoint(function(direction) {
    //   console.log('scroll');
    //   $topBar.toggleClass('is-fixed');
    // })
    // var waypoints = $('main').waypoint(function(direction) {
    //   console.log('scroll');
    //   $topBar.toggleClass('has-alt');
    // })
  };

  return {
    init: initialize
  };
}());
