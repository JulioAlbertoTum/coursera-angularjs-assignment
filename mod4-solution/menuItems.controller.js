(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController',MenuItemsController);

MenuItemsController.$inject = ['items'];
function MenuItemsController(items){
	var $ctrl = this;
	$ctrl.items = items;
	
}

})();