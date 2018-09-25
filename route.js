(function(){
    'use strict';

    angular.module('myApp')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider)
    {
        $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'index.html'
        })
        .state('list',{
            url:'/list',
            templateUrl:"list.html"
        });
    }
})();