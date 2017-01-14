portfolio.form = (function () {
  'use strict';

  // variables
  var $formInput = $('[data-js="formInput"]');

  var initialize = function() {
    $formInput.on('focus blur', toggleFocus);
    function toggleFocus(e){
      var $this = $(this);
      if (e.type == 'focus' || $this.val()){
        $this.prev().addClass('is-focused');
      }
      else {
        $this.prev().removeClass('is-focused');
      }
    }
  };
  return {
    init: initialize
  };
}());
