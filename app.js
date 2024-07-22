(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
})();

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.list="";
  $scope.message;

  $scope.checkList= function(){
    console.log($scope.list)
    if($scope.list==""){
      $scope.message="Please enter data first";
    }else if($scope.list.split(",").length>3){
      $scope.message="Too much";
    }else if($scope.list.split(",").length<=3){
      $scope.message="Enjoy!";
    }
  }
}
