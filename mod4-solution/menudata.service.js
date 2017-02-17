(function(){
'use strict';
angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http','$q'];
function MenuDataService($http){
    var service = this
    service.categories = undefined;
    
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
        // pendiente de resolver
    }
}
})();