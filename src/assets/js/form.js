portfolio.form = (function () {
  'use strict';

  // variables
  var $form      = $('#form');
  var $formInput = $form.find('[data-js="formInput"]');

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
  // field element is invalid
  .on("invalid.zf.abide", function(ev,elem) {
    console.log("Field id "+ev.target.id+" is invalid");
  })
  // field element is valid
  .on("valid.zf.abide", function(ev,elem) {
    console.log("Field name "+elem.attr('name')+" is valid");
  })
  // form validation failed
  .on("forminvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+ev.target.id+" is invalid");
  })
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+frm.attr('id')+" is valid");
    $.ajax({
      type: 'POST',
      data: $(form).serialize(), // $(form) is ok here
      url: 'http://stage.pete-rawlings.com/cgi-bin/mail.pl',
      success: function(){
        ev.preventDefault();
        console.log('yes');
        $form.fadeOut(1000);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        ev.preventDefault();
        console.log('no');
      }
    });
  })
  // to prevent form from submitting upon successful validation
  .on("submit", function(ev) {
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
  });

  };
  return {
    init: initialize
  };
}());
