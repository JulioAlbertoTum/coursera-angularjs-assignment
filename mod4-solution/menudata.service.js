(function(){
'use strict';
angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http','$q'];
function MenuDataService($http,$q){
    var service = this
    var categories = undefined;
    var items = undefined;

    service.getAllCategories = function(){
        if(!categories){
            var deferred = $q.defer();
            $http.get("https://davids-restaurant.herokuapp.com/categories.json")
            .then(function(result){
                categories = result.data;
                deferred.resolve(categories);
            },function(error){
                categories = error;
                deferred.reject(error);
            });
            categories = deferred.promise;
        }
        return $q.when(categories);
    }

    service.getItemsForCategory = function(categoryShortName){
        if(!items){
            var deferred = $q.defer();
            $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName).
            then(function(result){
                items = result.data.menu_items;
                deferred.resolve(items);
            }, function(error){
                items = error;
                deferred.reject(error);
            });
            items = deferred.promise;
        }
        return $q.when(items);
    }
}
})();