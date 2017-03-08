(function(){
'use strict';

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject = ['UserService','ApiPath'];
function MyInfoController(UserService, ApiPath){
	var $ctrl = this;
	$ctrl.basePath = ApiPath;
	$ctrl.userData = UserService.getUserData();

	$ctrl.notUserRegister = true;
	if($ctrl.userData != null){
		$ctrl.notUserRegister = false;
	}
}
})();