app.factory('Authentication', ['$rootScope', '$firebaseAuth',
    'FIREBASE_URL', function ($rootScope, $firebaseAuth, FIREBASE_URL) {



        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);


        return {


            login: function(user){


                $rootscope.message = "Welcome " + $scope.user.email;

            }, // login


            register: function(rate){



                var rateRef = new Firebase(FIREBASE_URL + 'rates')


                    .child('currency').set({


                        thb_kip: '1' ,
                        kip_thb: '2' ,
                        usd_thb: '3' ,
                        thb_usd: '4'


                    });// rate



                //auth.$createUser({
                //
                //    email: rate.thb_kip,
                //    password: rate.thb_kip
                //
                //
                //}).then(function(regUser){
                //
                //
                //    var rateRef = new Firebase(FIREBASE_URL + 'rates')
                //
                //
                //        .child(Firebase.ServerValue.TIMESTMP).set({
                //
                //
                //            thb_kip: rate.thb_kip ,
                //            kip_thb: rate.kip_thb ,
                //            usd_thb: rate.usd_thb ,
                //            thb_usd: rate.thb_usd
                //
                //
                //        });// rate
                //
                //
                //    $rootSope.message = "Welcome " + rate.thb_kip;
                //
                //
                //}).catch
                //(function () {
                //
                //    $rootScope.message = error.message;
                //
                //});// create


            }// register


        };

    }]);// factory

