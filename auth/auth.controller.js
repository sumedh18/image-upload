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
      
        
                authCtrl.login();
                



        }, function(error){
            authCtrl.error = error;
            });
    };

    authCtrl.upload= function (){
              console.log("Hello");
             

                 console.log("Initialized");


              console.log("idhar aya");
              const storageService = firebase.storage();
              const storageRef = storageService.ref();

            document.querySelector(".file-select").addEventListener('change', handleFileUploadChange);

            document.querySelector(".file-submit").addEventListener('click', handleFileUploadSubmit);
            console.log(" ab idhar aya");

            var selectedFile;

            function handleFileUploadChange(e) {
               selectedFile = e.target.files[0];
               console.log(selectedFile);
            };

            function handleFileUploadSubmit() {

              const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
            console.log("abhi idhar aya");
              uploadTask.on('state_changed', (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              }, (error) => {
                // Handle unsuccessful uploads
                console.log(error);
              }, () => {
                 // Do something once upload is complete
                 console.log('success');
              });
            };
            authCtrl.register();    
            }

    });