(function(){
'use strict';
angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath',  'https://davids-restaurant.herokuapp.com');
MenuDataService.$inject = ['$http','$q','ApiBasePath'];

function MenuDataService($http, $q, ApiBasePath){
    var service = this
    var categories = undefined;
    var items = undefined;

    service.getAllCategories = function(){
       
            var deferred = $q.defer();
            $http.get(ApiBasePath+"/categories.json")
            .then(function(result){
                categories = result.data;
                deferred.resolve(categories);
            },function(error){
                categories = error;
                deferred.reject(error);
            });
            categories = deferred.promise;
       
        return categories
       
    }

    service.getItemsForCategory = function(categoryShortName){
      
            var deferred = $q.defer();
            $http.get(ApiBasePath+"/menu_items.json?category="+categoryShortName).
            then(function(result){
                items = result.data.menu_items;
                deferred.resolve(items);
            }, function(error){
                items = error;
                deferred.reject(error);
            });
            items = deferred.promise;

        return items;
      
    }
}
})();