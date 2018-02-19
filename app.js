var app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

app.controller("pageController", function($rootScope, $scope, $timeout){

  var username = "EISAWESOME";


  $scope.init = function(){
    $scope.catchPhrase = "<clement-s/>";
    $scope.avatarUrl = "https://github.com/EISAWESOME.png";

    VanillaTilt.init(document.querySelector(".mainCard"), {
      max: 0,
      glare: true,
      "max-glare": 0.4,
      scale: 1.1,
    });




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
