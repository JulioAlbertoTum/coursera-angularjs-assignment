(function(){
'use strict';
angular.module('MenuApp')
.component('categories', {
    templateUrl: 'categories.html',
    controller: CategoriesController,
    bindings:{
        categories : '<'
    }
});

// CategoriesController.$inject = ['$q','MenuDataService']
function CategoriesController(){
    var $ctrl = this;


}

})();