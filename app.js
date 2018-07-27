(function () {
'use strict';

const NO_DATA = "Please, enter data first.";
const OK_ENJOY = "Enjoy!";
const OK_TOOMUCH = "Too much!";

angular.module('LunchCheck', [])

.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope){

  $scope.breakfastList = '';
  $scope.message = '';
  $scope.color = '';

  $scope.checkTooMuchLunch = function(){
    if ($scope.breakfastList == ''){
        $scope.message = 'Please, enter data first.';
        $scope.color = 'red';

    }else{
      $scope.message = getStringSplitted($scope.breakfastList);
      if($scope.message == NO_DATA){
          $scope.color = 'red';
      }else{
          $scope.color = 'green';
      }


    }

  };


  //gets a string splitted in an array
  //and returns a message
  function getStringSplitted(stringToSplit){

    var separator = ",";
    var arrayOfItems = stringToSplit.split(separator);
    var finalLength = 0; //stores the number of items without empty spaces

    //not taking into consideration empty items
    var totalItemsEmpty = 0;
    var counter;
    for (counter = 0; counter < arrayOfItems.length; counter++){
      if (arrayOfItems[counter].trim() == ''){
        totalItemsEmpty++;
      }
    }
    finalLength = arrayOfItems.length - totalItemsEmpty;

    if(finalLength == 0){
      return NO_DATA;
    }
    if (finalLength <= 3){
      return OK_ENJOY;
    }

    return OK_TOOMUCH;
  }
}

})();
