(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url: '/',
		templateUrl:'templates/home.html'
	})

	.state('categories', {
		url:'/categories',
		templateUrl:'templates/menuCategories.html',
		controller:'MenuCategoriesController',
		controllerAs: 'categoryCtrl',
		resolve: {
			categories: ['MenuDataService', function(MenuDataService){
				return MenuDataService.getAllCategories().
					then(function(categories){
						return categories;
					});
			}]
		}
	})
	.state('items', {
		url:'/items/{category}',
		templateUrl:'templates/menuItems.html',
		controller: 'MenuItemsController',
		controllerAs: 'itemsCtrl',
		resolve:{
			items:  ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.category).
				then(function(items){
					return items;
				});
			
			}]
		}
	});	
}

})();