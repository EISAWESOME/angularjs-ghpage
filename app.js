(function(){
  var app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

  app.controller("pageController", function($rootScope, $scope, $timeout){

    var username = "EISAWESOME";


    $scope.init = function(){
      $scope.catchPhrase = "<clement-s/>";
      $scope.avatarUrl = "https://github.com/EISAWESOME.png";
    };

    $scope.goBack = function(){
    }

    var tetris = new Konami(function(){
      //Do the unlock animation
      //Hide maincard class
      $scope.cardHide = true;

      $timeout(function(){
        //Show tetris div
        $scope.tetrisShow = true;

        //Create the button to go back

        $timeout(function(){
          $('.game').blockrain({theme: "candy", playText: 'IT\'S A SECRET TO EVERYBODY',});
        },1001)


      }, 1001);
      $scope.$apply()
    })

  });
})();
