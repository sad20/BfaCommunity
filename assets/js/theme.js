(function ($) {
  "use strict";

  $(document).ready(function () {

    //smooth scroll
    $('#navbarSupportedContent a').click(function (e) {

      var link = this.hash;
      var position = $(link).offset().top;
      $('html').animate({
        scrollTop: position
      }, 1000);
    })


  }); // ready() END



})(jQuery);