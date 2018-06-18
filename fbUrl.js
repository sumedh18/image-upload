angular.module('angularfireSlackApp').constant('FirebaseUrl', 'https://chatapp-35578.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);