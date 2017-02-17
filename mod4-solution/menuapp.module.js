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

	.state('categories', {
		url:'/categories',
		template:'<h1> Vista de las categorias </h1>'
	})
	.state('items', {
		url:'/items',
		template:'<h1> Vista de los Items </h1>'
	})
	.state('categories1',{
		url: '/categories1',
		templateUrl:'categoriesView.html',
		controller:'CategoriesController as $ctrl'
		// component: 'categories'
	})
	.state('items1',{
		url: '/items1',
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