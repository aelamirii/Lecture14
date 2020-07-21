(function () {
'use strict';

angular.module('CounterApp', [] )
.controller('CounterController', CounterController );

CounterController.$inject = ['$scope'];

function CounterController($scope) {

$scope.onceCount = 0;
$scope.Count = 0;

$scope.name = "Abdelhay";


$scope.showNumberOfWatchers = function () {
    console.log("Watchers count :",$scope.$$watchersCount);

};

$scope.CountOnce = function () {
  $scope.onceCount = 1;
};


$scope.UpCount = function () {
  $scope.Count++;
};


$scope.$watch(function () {
  console.log("Digest Loop Fired!");
});

// $scope.$watch('onceCount', function (NewValue, OldValue) {
//   console.log("onceCount Old Value :" +  OldValue);
//   console.log("onceCount New Value :" +  NewValue);
//
// });
//
//
// $scope.$watch('Count', function (New_Value, Old_Value) {
//   console.log("\n Count Old Value :", Old_Value);
//   console.log(" Count New Value :", New_Value);
//
// });


}



})();
