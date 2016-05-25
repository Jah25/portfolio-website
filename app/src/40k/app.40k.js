/**
 * Created by kitsunechrome on 5/14/16.
 */
(function(){
    angular
        .module('portfolioApp.40k',['ui.router'])
        .config(['$stateProvider','$urlRouterProvider',configSetup])

    function configSetup($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('40k',{
                url:'/40k',
                templateUrl:'src/40k/40kTemplate.html',
                controller:'40kCtrl',
                controllerAs:'40kHome'
            })

        $urlRouterProvider
            .when('/40k','40k')
    }
})();