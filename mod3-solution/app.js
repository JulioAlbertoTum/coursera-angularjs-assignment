( function(){
'use strict'
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath',  'https://davids-restaurant.herokuapp.com');


function FoundItemsDirective(){
    var ddo = {
        // template: '<ol><li ng-repeat="item in list.items">{{item.name}} {{item.short_name}} {{item.description}}<button class="btn btn-danger" ng-click="list.onRemove({index:$index});">Dont want this one!</button></li></ol>',
        templateUrl: 'foundItems.html',
        scope:{
            items:'<',
            onRemove:'&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs:'list',
        bindToController: true
    };
    return ddo;
}

function FoundItemsDirectiveController(){
    var list = this;

    list.listIsEmpty = function(){
        return list.found.length == 0;
    }
}

NarrowItDownController.$inject = ['MenuSearchService','$filter'];
function NarrowItDownController(MenuSearchService,$filter){
    var menu = this;
    menu.searchTerm = '';
    menu.found = [];
    menu.filterMenuItems = function(){
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response){
        // menu.found = response.data.menu_items;
        // menu.found = [];
        menu.found = $filter('filter')(response.data.menu_items, {name: menu.searchTerm});
        // console.log(response.data.menu_items);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    menu.removeItem = function(index){
        menu.found.splice(index,1);
    }
}

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
    var service = this;
    
    service.getMatchedMenuItems = function(){
    var menuItems=[];
        var response = $http({
            method: "GET",
            url:(ApiBasePath + "/menu_items.json")
        });

        return response;
    }
}

})();