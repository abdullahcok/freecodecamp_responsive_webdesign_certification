$(document).ready(function () {
      $('.port-item').click(function(){
        $('.collapse').collapse('hide');
      });

      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
          event.preventDefault();
          $(this).ekkoLightbox();
      });


    //magnific popups
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',

      gallery: {
          enabled: true
      }
        // other options
    });

});
