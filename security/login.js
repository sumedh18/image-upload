angular.module('app').component('login', {
	templateUrl: '/security/login.html',
	controller: function(auth, $location) {
console.log('kahe nai hu');

		this.anoLogin = function() {
				console.log('login me nai hu');
			auth.$signInAnonymously().then(function() {
				console.log('login me hu');
			}).catch((function(err)
			{
				console.log('error me hu');
				this.errorMessage = err.code;
			}).bind(this))
		}

		fbLogin = function() {

			var provider = new firebase.auth.FacebookAuthProvider();
				console.log('login me nai hu');
			auth.signInWithPopup(provider).then(function() {
				console.log('login me hu');
			}).catch((function(err)
			{
				console.log('error me hu');
				this.errorMessage = err.code;
			}).bind(this))
		}
	}
})