/**
 * Created by kitsunechrome on 12/8/15.
 */
(function(){
    angular
        .module("portfolioApp.utility", [])
        .directive("scrollPosition", scrollPosition);

    function scrollPosition($window) {
        var directive = {
            restrict: "EA",

            link: link
        }


        return directive;

        function link(scope, ele, attr) {

            angular.element($window).bind("scroll", findPosition);

            function findPosition() {
                console.log('SCROLL POSITION HAS BEEN CALLED: ', this);
                console.log('hey-o this should be scope.fixPosition: ', scope.portfolio.fixPosition);
                 if(this.pageYOffset > 384){
                     scope.portfolio.fixPosition = true;
                     console.log('THIS IS THE CHANGED fixPosition: ', scope.portfolio.fixPosition);
                 }
                 else{
                     scope.portfolio.fixPosition = false;
                     console.log('THIS IS THE CHANGED fixPosition: ', scope.portfolio.fixPosition);
                 }
                scope.$apply();
            }
        }
    }
})();