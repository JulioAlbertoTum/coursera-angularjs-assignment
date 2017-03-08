(function(){
"use strict";

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['MenuService','UserService'];
function SignUpController(MenuService,UserService){
	var $ctrl = this;
	$ctrl.notExist = false;
	$ctrl.saveSuccess = false;
	$ctrl.save = function(){
		$ctrl.notExist = false;
		var promise  = MenuService.getMenuItemData($ctrl.short_name);
		promise.then(function(response){
			$ctrl.saveSuccess = true;
			$ctrl.saveUserData(response.data);
			// console.log(response.data);
		})
		.catch(function(error){
			$ctrl.notExist = true;
			// $ctrl.cleanForm();
			UserService.cleanData();
			// console.log(error);
			
		})
		console.log(UserService.getUserData());
	}

	$ctrl.hideMessage = function(){
		$ctrl.notExist = false;
		$ctrl.saveSuccess = false;
	}

	$ctrl.saveUserData = function(favLunch){
		var userData = {
			"first_name": $ctrl.first_name,
			"last_name" : $ctrl.last_name,
			"email" : $ctrl.email,
			"phone" : $ctrl.phone,
			"fav_lunch" : favLunch
		}

		UserService.setUserData(userData);

		console.log(UserService.getUserData());
	}

	$ctrl.cleanForm = function(){
		$ctrl.first_name = "";
		$ctrl.last_name = "";
		$ctrl.email = "";
		$ctrl.phone = "";
		$ctrl.short_name ="";
	}
}
})();