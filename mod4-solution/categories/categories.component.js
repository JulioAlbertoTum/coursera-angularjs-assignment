(function(){
'use strict';
angular.module('MenuApp')
.component('categories', {
    templateUrl: 'categories/categories.html',
    controller: CategoriesController,
    bindings:{
        categories : '<'
    }
});

function CategoriesController(){
    var $ctrl = this;
}

})();