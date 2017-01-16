portfolio.browsehappy = (function () {
  'use strict';

  // variables
  var $trigger   = $('[data-js="browsehappy-close"]');
  var $overlay   = $('[data-js="browsehappy-close"]').closest('.browser-msg');

  var initialize = function() {
    $trigger.click(function(){
      console.log($(this));
      $overlay.hide();
    });
  };

  return {
    init: initialize
  };
}());
