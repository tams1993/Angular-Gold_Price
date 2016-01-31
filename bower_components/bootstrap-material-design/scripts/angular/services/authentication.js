app.factory('Authentication', ['$rootScope', '$firebaseAuth','$location', '$firebaseObject',
    'FIREBASE_URL', function ($rootScope, $firebaseAuth,$location,$firebaseObject, FIREBASE_URL) {



        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);
        $rootScope.statusmessage = "login";


        auth.$onAuth(function (authUser) {

            if(authUser){

                var userRef = new Firebase(FIREBASE_URL + 'rates/');
                var userObj = $firebaseObject(userRef);
                $rootScope.currentRate = userObj;

            }else{

                $rootScope.currentRate = '';

            }

        });


        return {



            login: function(user){


                auth.$authWithPassword({

                    email: user.email,
                    password: user.password

                }).then(function(regUser){

                    $location.path('/add');
                    $rootScope.user = user.email;
                    $rootScope.statusmessage = "logout";

                    console.log(regUser);



                }).catch(function(error){

                    $rootScope.message = error.message;

                });


            }, // login

            logout: function(){




                 return auth.$unauth();





            }, // logout

            requireAuth: function(){


                return auth.$requireAuth();

            },// requireAuth


            register: function(rate){

                var unix = Math.round(+new Date()/1000);

                auth.$onAuth(function (authUser) {

                    var rateRef = new Firebase(FIREBASE_URL + 'rates')


                        .child(authUser.uid).child(unix).set({


                            thb_kip: rate.thb_kip ,
                            kip_thb: rate.kip_thb ,
                            usd_thb: rate.usd_thb ,
                            thb_usd: rate.thb_usd



                        });// rate

                });





                    $rootScope.message = "Success";







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

