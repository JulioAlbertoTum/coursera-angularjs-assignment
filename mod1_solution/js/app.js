(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  // $scope.message ="";
  $scope.stateMessage = "s-default"
  $scope.count = 0;
    function countItems () {
      var listItems = [];
      if($scope.items != undefined && $scope.items != ""){
        listItems = $scope.items.split(',').map(function(item){
          return item.trim();
        }).filter(function(v){
          return v !== ''
        });
      }
      // console.log(listItems);
      return listItems.length;
    };

  $scope.showMessage = function(){
    $scope.count = countItems();
    if ( $scope.count == 0){
      $scope.message = "Please enter data first";
      $scope.stateMessage = "s-default";
    }else if($scope.count!=0 && $scope.count <= 3){
      $scope.message = "Enjoy!";
      $scope.stateMessage = "s-success";
    }else if($scope.count > 3){
      $scope.message = "Too much!";
      $scope.stateMessage = "s-danger";
    }
  };


}

})();
