(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController) ;
LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.text = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function () {
      if ($scope.text == ""){
          $scope.message = "Please enter data first";
        return $scope.message;
      }
      else{
      var words =   $scope.text.split(',');
      console.log(words);
      var len = words.length;
      console.log(len);
      if(len>=1 && len<=3)
      {
        $scope.message = "Enjoy!";
        return $scope.message;
      }
      else{
          $scope.message = "Too much!";
          return $scope.message;
      }
    }
    };

  }

})();
