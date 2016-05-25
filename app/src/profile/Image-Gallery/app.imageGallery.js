/**
 * Created by kitsunechrome on 11/16/15.
 */
(function(){
angular
    .module('portfolioApp.widgets',[])
    .directive('imageGallery', imageGallery);

function imageGallery(){
    var directive = {
        restrict: 'EA',
        scope: {
            galleryId: '='
        },
        link: link,
        controller:controller,
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'src/profile/Image-Gallery/image-gallery.html'
    };

    return directive;

    function controller (){
        var vm = this;
        var index = [11,11,12];

        vm.img = 0;
        vm.isOpen = false;
        vm.toggle = toggle;
        vm.next = next;
        vm.prev = prev;
        vm.gallerySize = index[vm.galleryId];
        console.log('galleryId:', vm.galleryId);
        console.log('gallerySize: ',vm.gallerySize);

        function toggle(){
            console.log('MODAL SHOULD BE TOGGLING!');
            vm.isOpen = !vm.isOpen;
        }
        function next(clickEvent){

            clickEvent.stopPropagation();
            vm.img++;

            if(vm.img >= vm.gallerySize){
                console.log('next if fired, gallerysize minus 1-1: ', vm.gallerySize - 1);
                vm.img = 0;
            }

            console.log('Next Fired, img number: ', vm.img);
        }
        function prev(clickEvent){
            clickEvent.stopPropagation();
            vm.img--;
            if(vm.img < 0){
                console.log('prev if fired');
                vm.img = vm.gallerySize - 1;
            }
            console.log('Prev Fired, img number: ', vm.img);
        }

    }

    function link (scope, ele, attr, ctrl){



        //console.log('this is the folder id: ', ctrl.galleryId);
        //console.log('this is the gallery id: ', scope.galleryId);
    }


}
})();