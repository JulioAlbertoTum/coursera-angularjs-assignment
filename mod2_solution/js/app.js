(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
  toBuy.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();

}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyList = [
    { name: "potatoes", quantity: 5 },
    { name: "bread", quantity: 10 },
    { name: "ice cream", quantity: 2 },
    { name: "beer", quantity: 8 },
    { name: "cookies", quantity: 10 }
  ];

  var alreadyBoughtList = [
    { name: "bootle wine", quantity: 2 },
    { name: "cake", quantity: 1 }
  ];

  service.getItemsToBuy = function(){
    return toBuyList;
  }

  service.getItemsAlreadyBought = function(){
    return alreadyBoughtList;
  }
}

})();
