/*app.js for main directive*/
(function(){
    angular
        .module('portfolioApp',[
        'ngResource',
        'ui.router',
        'portfolioApp.services',
        'portfolioApp.widgets',
        'portfolioApp.utility',
        'portfolioApp.40k'
        ])
        .config(['$stateProvider','$urlRouterProvider', configSetup])
        .run(['$anchorScroll', runSetup]);

    function runSetup($anchorScroll){
        $anchorScroll.yOffset = 120;
        console.log('hey offset is set to 120');
    }

    function configSetup($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('profile',{
                url: '/profile',
                templateUrl: 'src/profile/profileTemplate.html',
                controller: 'portfolioCtrl',
                controllerAs: 'portfolio'
            });

        $urlRouterProvider
            .when('/','/profile')
            .otherwise('/');
    }
})();