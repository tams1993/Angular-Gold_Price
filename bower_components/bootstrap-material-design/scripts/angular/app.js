var app = angular.module('App', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://currencyrate.firebaseio.com/');

app.run(['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {

        if (error == "AUTH_REQUIRED") {


            $rootScope.loginmessage = "ຂໍໂທດ, ເຈົ້າຕ້ອງລົງຊື່ເຂົ້າໃຊ້ກ່ອນ"

            $location.path('/');
        }// Auth Required

    });// event info

}]);// run

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/', {

            templateUrl: 'views/show-rate.html',
            controller: 'MainController'

        }).when('/login', {

            templateUrl: 'views/login.html',
            controller: 'LoginController'


        }).when('/add', {


            templateUrl: 'views/add-rate.html',
            controller: 'LoginController',
            resolve: {

                currentAuth: function (Authentication) {

                    return Authentication.requireAuth();

                }

            }


        })


        .otherwise({redirectTo: '/'});


}]);

