(function(){
'use strict';
angular.module('MenuApp')
.component('categories', {
    template: '<div class="categories"></div>',
    controller: CategoriesController,
    bindings:{
        categories : '<'
    }
});

CategoriesController.$inject = ['$q','MenuDataService']
function CategoriesController($q, MenuDataService){
    var ctrl = this;
}

})();