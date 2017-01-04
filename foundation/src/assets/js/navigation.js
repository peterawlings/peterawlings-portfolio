portfolio.navigation = (function () {
  'use strict';

  // variables
  var $navMenu   = $('[data-js="nav-menu"]');
  var $navToggle = $navMenu.find('.nav-icon');

  var initialize = function() {
    $navToggle.on('click', function(){
      $navMenu.toggleClass('is-open');
    });
  };

  return {
    init: initialize
  };
}());
