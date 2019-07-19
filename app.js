(function () {
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController',MsgController) ;
MsgController.$inject=['$scope'];

  function MsgController($scope) {
    $scope.name = "Dee";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      return "Dee eat Good";
    };
    $scope.feedDee = function () {
      $scope.stateOfBeing = "fed";
    }
  }

})();
