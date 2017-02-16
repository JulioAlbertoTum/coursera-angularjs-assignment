( function(){
'use strict'
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath',  'https://davids-restaurant.herokuapp.com');


function FoundItemsDirective(){
    var ddo = {
        
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
        return list.items.length == 0;
    }
}

NarrowItDownController.$inject = ['MenuSearchService','$filter'];
function NarrowItDownController(MenuSearchService,$filter){
    var menu = this;
    menu.searchTerm = '';
    menu.foundItems = [];
    menu.notFound = false;

    menu.filterMenuItems = function(){

        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response){

            if (menu.searchTerm != ''){
                menu.foundItems = $filter('filter')(response.data.menu_items, {description: menu.searchTerm}); 
                if (menu.foundItems.length == 0){
                    menu.notFound = true;
                }else{
                    menu.notFound = false;
                }   
            }else{
                menu.foundItems = [];
                menu.notFound = true
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    menu.removeItem = function(index){
        menu.foundItems.splice(index,1);
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