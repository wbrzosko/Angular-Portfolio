angular.element(document).bind('scroll', function() {
   if (document.body.scrollTop < 200) {
       angular.element(document.querySelector('.navbar')).addClass('navbar-top'); 
    } else {
        angular.element(document.querySelector('.navbar')).removeClass('navbar-top'); 
    }
});