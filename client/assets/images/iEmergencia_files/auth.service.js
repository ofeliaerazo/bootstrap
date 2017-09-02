'use strict';

function authService($auth, $state) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var Auth = {
		login: login,
		logout: logout,
		isAdmin: isAdmin,
		isUser: isUser,
		isAuthenticated: isAuthenticated,
		userlog: userlog,
		alluser: alluser,
		idUsuario: idUsuario
	};

	function login(user, collback) {
		$auth.login(user).then(function (response) {
			console.log('Login ok', response);
			$state.go('contactUs');
		}).catch(function (err) {
			console.log('Error de login', err);
			$state.go('login');
		});
	}

	function idUsuario() {
		if (Auth.isAuthenticated()) {
			return $auth.getPayload().sub;
		} else {
			return null;
		}
	}

	function alluser() {
		if (Auth.isAdmin() || Auth.isUser()) {
			return true;
		} else {
			return false;
		}
	}
	function logout() {
		if ($auth.isAuthenticated()) {
			$auth.logout().then(function (respose) {
				$state.go('main');
			});
		}
	}

	function userlog() {

		return $auth.getPayload().user;
	}

	function isAdmin() {
		if (Auth.isAuthenticated()) {
			//console.log($auth.getPayload().roles);
			if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
				return true;
			} else {
				return false;
				console.log("no es admin");
			}
		} else {
			return false;
			console.log("no esta");
		}
	}

	function isUser() {
		if (Auth.isAuthenticated()) {

			if ($auth.getPayload().roles.indexOf("USER") !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	function isAuthenticated() {
		if ($auth.isAuthenticated()) {
			return true;
		} else {
			return false;
		}
	}

	return Auth;
}

authService.$inject = ['$auth', '$state'];
angular.module('startUpApp').factory('authService', authService);
//# sourceMappingURL=auth.service.js.map
