(function(){
'use strict';

angular.module('MenuApp',['data','ui.router'])
.config(RoutesConfig)
.controller('MenuAppController', MenuAppController);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url: '/',
		templateUrl:'home.html'
	})
	.state('categories',{
		url: '/categories',
		templateUrl:'categoriesView.html',
		controller:'CategoriesController as $ctrl'
		// component: 'categories'
	})
	.state('items',{
		url: '/items',
		template:'<div>Vista de los items</div>'
	});
}

MenuAppController.$inject = ['$q','MenuDataService'];
function MenuAppController($q, MenuDataService){
	var menu = this;
	MenuDataService.getAllCategories()
	.then(function(result){
		menu.categories = result;
	}, function(error){
		console.log(error);
	});

	MenuDataService.getItemsForCategory('A').
	then(function(result){
		menu.items = result;
	}, function(error){
		console.log(error);
	});
}

})();