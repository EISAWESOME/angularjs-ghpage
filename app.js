var app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

app.controller("pageController", function($rootScope, $scope, $timeout){

  var username = "EISAWESOME";


  $scope.init = function(){
    $scope.catchPhrase = "<clement-s/>";
    $scope.avatarUrl = "https://github.com/EISAWESOME.png";




  };

  var tetris = new Konami(function(){
    $scope.cardHide = true;
    //Do the unlock animation
    $timeout(function(){
      $scope.tetrisShow = true;

      $timeout(function(){
        $('.game').blockrain({theme: "candy"});
      },1001)


    }, 1001);
    $scope.$apply()


    //Hide maincard class

    //Create the button to go back

    //Create tetris div


  })

});
