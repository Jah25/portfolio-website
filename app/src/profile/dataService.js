/**
 * Created by kitsunechrome on 11/2/15.
 */
(function(){
    angular
        .module('portfolioApp.services', [])
        .factory('dataService', dataService);

    function dataService($http){
        var service = {
            getJobs: getJobs
        }

        return service;

        function getJobs(){
            return $http.get('./src/profile/data/jobs.json')
        }
    }
})();