

app.controller('LoginController',['$scope','Authentication', function ($scope,Authentication) {



    $scope.login = function(){

        Authentication.login($scope.user);
    };
    $scope.logout = function () {

        Authentication.logout();
    };// logout

    $scope.register = function() {

        Authentication.register($scope.rate);


    };// register





}]);