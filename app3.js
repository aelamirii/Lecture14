(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController );

CounterController.$inject = ['$scope'];


function CounterController($scope) {

  $scope.onceCount = 0;
  $scope.count = 0;


  $scope.showNumberOfWatchers = function () {
    console.log("Watchers count :", $scope.$$watchersCount);
  };

  $scope.CountOnce = function () {
    $scope.onceCount = 1;
  };

  $scope.UpCount = function () {
    $scope.count++;
  }




  $scope.$watch('onceCount', function (NewValue, OldValue) {
    console.log("onceCount Old Value :", OldValue);
    console.log("onceCount New Value :", NewValue);

  });


  $scope.$watch('count', function (New_Value, Old_Value) {
      console.log("\n count Old Value :", Old_Value );
      console.log("count New Value :", New_Value );
  });




}

})();
