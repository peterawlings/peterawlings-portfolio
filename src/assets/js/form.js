portfolio.form = (function () {
  'use strict';

  // variables
  var $formContainer    = $('.c-form-container');
  var $form             = $formContainer.find('form');
  var $formThanks       = $formContainer.find('.c-form-thanks');
  var $formInput        = $formContainer.find('[data-js="formInput"]');

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

    $form
    .on("formvalid.zf.abide", function(ev,frm) {
      $.ajax({
        type: 'POST',
        data: $(form).serialize(),
        url: 'http://pete-rawlings.com/cgi-bin/mail.pl',
        success: function(){
          ev.preventDefault();
          $form.fadeOut(300).delay(2600).fadeIn(300);
          $formThanks.delay(310).fadeIn(300).delay(2000).fadeOut(300);
          $formInput.val("");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          ev.preventDefault();
        }
      });
    })
    .on("submit", function(ev) {
      ev.preventDefault();
    });
  };
  return {
    init: initialize
  };
}());
