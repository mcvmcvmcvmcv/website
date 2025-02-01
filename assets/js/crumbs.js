

$(document).ready(function() {
   
      $('.crumbs-container').isotope({
        itemSelector: '.crumb',
        masonry: {
        columnWidth: '.item-sizer',
        gutter: '.gutter-sizer'
        }
}); 


      // layout Isotope after each image loads
      $('.crumbs-container').imagesLoaded().progress( function() {
        $('.crumbs-container').isotope('layout');
      });

});
