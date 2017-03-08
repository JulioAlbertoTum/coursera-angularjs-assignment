(function(){
"use strict";

angular.module('common')
.service("UserService",UserService);

function UserService(){
	var service = this;
	service.userData = null
	service.setUserData = function(userData){
		service.userData = userData;
	}

	service.getUserData  = function(){
		return service.userData;
	}

	service.cleanData = function(){
		service.userData = null
	}
}

})();