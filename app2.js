(function () {
'use strict';

angular.module('CounterApp' , [] )
.controller('CounterController' , CounterController);

CounterController.$inject = ['$scope'];

function CounterController($scope) {

  $scope.onceCount = 0;
  $scope.count = 0;

  $scope.showNumberOfWatchers = function () {
    console.log("Watchers count :",$scope.$$watchersCount);
  };

  $scope.CountOnce = function () {
    $scope.onceCount = 1;
  };


  $scope.UpCount = function () {
    $scope.count++;
  };


  $scope.$watch('onceCount', function (NewValue, OldValue) {
      console.log("onceCount Old value :",OldValue );
      console.log("onceCount New value :",NewValue );
  });

  $scope.$watch('count', function (New_Value, Old_Value) {
      console.log("Count Old Value :", Old_Value);
      console.log("Count New Value :", New_Value);
  })


}

})();
