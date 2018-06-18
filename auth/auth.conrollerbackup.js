angular.module('angularfireSlackApp')
    .controller( 'AuthCtrl', function(Auth, $state,$firebaseObject){

         var authCtrl = this;

         authCtrl.user = {
              email: '',
              password: '',
              uid:'',
              fname:'',
              lname:'',
              img:''
             
             
     }
    
    authCtrl.login = function(){
        Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
             $state.go('home');

        }, function (error){
            console.log('error hai re bava');
            authCtrl.error = error;
        });

    };

    authCtrl.register = function() {
        console.log('Here i am');

        console.log(authCtrl.user.email);
        console.log(authCtrl.user.password);
        console.log(authCtrl.user.fname);
        console.log(authCtrl.user.lname);
        console.log(authCtrl.user.uid);

        Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (user){

            console.log('Here i am inside');
                
             var ref = new Firebase("https://chatapp-35578.firebaseio.com/");
       
             ref.child("users").child(authCtrl.user.fname).set({
     
                           id: authCtrl.user.uid,
                            firstname: authCtrl.user.fname,
                           lastname: authCtrl.user.lname,
                         mail: authCtrl.user.email,
                         
                         
                        
                            });
     var refImg = new Firebase("https://chatapp-35578.firebaseio.com/images/" + authCtrl.user.uid);
    var ImgObj = $firebaseObject(refImg);     
 function saveimage(e1) {
        var filename = e1.target.files[0];
        var fr = new FileReader();
        fr.onload = function (res) {
            authCtrl.user.image = res.target.result;
            ImgObj.image = res.target.result;
            ImgObj.$save().then(function (val) {
            }, function (error) {
                console.log("ERROR", error);
            })
        };
        fr.readAsDataURL(filename);
    }

    document.getElementById("file-upload").addEventListener('change', saveimage, false);

    this.loadimage = function () {
        ImgObj.$loaded().then(function (obj) {
            authCtrl.user.profileImage = obj.image;
            console.log("loaded", authCtrl.user.profileImage);
            document.getElementById("profileImage").src = obj.image;
        }, function (error) {
            console.log("ERROR", error);
        });
    };
    this.loadimage();
        
                authCtrl.login();
                



        }, function(error){
            authCtrl.error = error;
            });
    };

    });