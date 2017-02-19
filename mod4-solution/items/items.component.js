(function(){
"use strict";
angular.module('MenuApp')
.component('items',{
	templateUrl: 'items/items.html',
	controller: ItemsController,
	bindings:{
		items : '<'
	}
});

function ItemsController(){
	var $ctrl = this;
}

})();