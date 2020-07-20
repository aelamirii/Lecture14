(function () {
'use strict';

angular.module('CounterApp' , [] )
.controller('CounterController', CounterController );

CounterController.$inject = ['$scope'];

function CounterController($scope) {

  $scope.onceCounter = 0;
  $scope.count = 0;


  $scope.showNumberOfWatchers = function () {
    console.log("Watchers count :", $scope.$$watchersCount);
  };

  $scope.CountOnce = function () {
  $scope.onceCounter = 1;
  };

  $scope.UpCount = function () {
    $scope.count++;
  }


  $scope.$watch('onceCounter', function (NewValue, OldValue) {
      console.log("onceCounter Old Value :", OldValue);
      console.log("onceCounter New Value :", NewValue);

  });

  $scope.$watch('count', function (New_Value, Old_Value) {
      console.log("count Old Value :", Old_Value);
      console.log("count New Value :", New_Value);
  });


}



})();
