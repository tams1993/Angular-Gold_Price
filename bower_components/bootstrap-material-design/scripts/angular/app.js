var app = angular.module('App', ['ngRoute','firebase'])
    .constant('FIREBASE_URL','https://currencyrate.firebaseio.com/');

app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/', {

            templateUrl: 'views/show-rate.html',
            controller: 'MainController'

        }).when('/login',{

            templateUrl: 'views/login.html',
            controller: 'LoginController'


    }).when('/add',{


            templateUrl: 'views/add-rate.html',
            controller: 'LoginController'



        })



        .otherwise({redirectTo: '/'});


}]);

