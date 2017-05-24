
(function () {
    'use strict';

   angular.module('app',['ngRoute'])
         .config(config)
         .run(run);

 })();

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'regController',
            templateUrl: 'registration/registration.html',
            controllerAs: 'vm'
     })

    console.log('config..');
}

function run(){
     console.log('running..');
}