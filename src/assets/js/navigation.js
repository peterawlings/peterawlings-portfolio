portfolio.navigation = (function () {
  'use strict';

  // variables
  var $navMenu   = $('[data-js="nav-menu"]');
  var $navToggle = $navMenu.find('.nav-icon');
  var $body      = $('body');
  var $navLink  = $('.c-nav-list').find('a');

  var initialize = function() {
    $navToggle.on('click', function(){
      $navMenu.toggleClass('is-open');
      $body.toggleClass('nav-active');
    });
    $navLink.click(function(){
      $navMenu.removeClass('is-open');
      $body.removeClass('nav-active');
    });
  };

  return {
    init: initialize
  };
}());
