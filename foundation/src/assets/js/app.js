// $(document).foundation();
//
// var portfolio = portfolio || {};
//
// $(function() {
//   portfolio.form.init();
//   portfolio.nav.init();
// });
//
// portfolio.form = (function () {
//   'use strict';
//
//   // variables
//   var $formInput = $('[data-js="formInput"]');
//
//   var initialize = function() {
//     $formInput.on('focus blur', toggleFocus);
//     function toggleFocus(e){
//       var $this = $(this);
//       if (e.type == 'focus' || $this.val()){
//         $this.prev().addClass('is-focused');
//       }
//       else {
//         $this.prev().removeClass('is-focused');
//       }
//     }
//   };
//   return {
//     init: initialize
//   };
// }());
//
// portfolio.nav = (function () {
//   'use strict';
//
//   // variables
//   var $navMenu   = $('[data-js="nav-menu"]');
//   var $navToggle = $navMenu.find('.nav-icon');
//
//   var initialize = function() {
//     $navToggle.on('click', function(){
//       $navMenu.toggleClass('is-open');
//     });
//   };
//
//   return {
//     init: initialize
//   };
// }());
