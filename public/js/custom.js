angular.element(document).bind('scroll', function() {
   if (document.body.scrollTop > 200) {
       angular.element(document.querySelector('.navbar')).addClass('navbar-shrink'); 
    } else {
        angular.element(document.querySelector('.navbar')).removeClass('navbar-shrink'); 
    }
});