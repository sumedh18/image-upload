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
               console.log('file slected');
            };
            function handleFileUploadSubmit(e) {

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
            }