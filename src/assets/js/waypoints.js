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

    // $topBar.waypoint(function(direction){
    //   if (direction === 'up') {
    //     console.log('up')
    //     $topBar.toggleClass('is-fixed');
    //   }
    // })
    // var waypoints = $('.c-top-bar').waypoint(function(direction) {
    //   // console.log('scroll');
    //   if (direction === 'up') {
    //     $topBar.toggleClass('is-fixed');
    //   }
    // })
    // var waypoints = $('main').waypoint(function(direction) {
    //   // console.log('scroll');
    //   if (direction === 'up') {
    //     if ($('body').hasClass('page-home')) {
    //       $topBar.toggleClass('has-alt');
    //     }
    //   }
    // })
  };

  return {
    init: initialize
  };
}());
