portfolio.loading = (function() {
  "use strict";

  var initialize = function() {
    $(window).load(function(){
        $('body').addClass('loaded');
    })
  };

  return {
    init: initialize
  };
})();
