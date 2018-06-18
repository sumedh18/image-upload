'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      $stateProvider
      .state('ulpoad1', {
        url: '/upload1',
        templateUrl: 'auth/upload1.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html'
      })
      .state('img', {
        url: '/img',
        
        templateUrl: 'auth/img.html'
      })
      
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/registerbackup.html'
      });
      

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://chatapp-35578.firebaseio.com/');
   
   var config = {
    apiKey: "AIzaSyAlY1JvY3dQtHORR2zfRRFmbcq5GHt8XOs",
    authDomain: "chatapp-35578.firebaseapp.com",
    databaseURL: "https://chatapp-35578.firebaseio.com",
    projectId: "chatapp-35578",
    storageBucket: "chatapp-35578.appspot.com",
    messagingSenderId: "73207957480"
  };
  firebase.initializeApp(config);