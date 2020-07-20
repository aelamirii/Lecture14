(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterCOntroller', CounterCOntroller);

CounterCOntroller.$inject = ['$scope'];

function CounterCOntroller($scope) {

  $scope.onjceCounter = 0;
  $scope.counter = 0;

$scope.showNumberOfWatchers = function () {
  console.log("# of watchers" , $scope.$$watchersCount);
};

$scope.countOnce = function () {
  $scope.onjceCounter = 1;
};


$scope.upCounter = function () {
    $scope.counter++;

};


$scope.$watch('onjceCounter', function (newValue, oldValue) {
  console.log("onjceCounter Old value: ", oldValue);
  console.log("onjceCounter New value: ", newValue);
});


$scope.$watch('counter', function (newValue, oldValue) {
  console.log("Counter Old value: ", oldValue);
  console.log("Counter New value: ", newValue);
});


}



})();
