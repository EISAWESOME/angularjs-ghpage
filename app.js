(function(){
  var app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

  app.controller("pageController", function($rootScope, $scope, $timeout){

    var username = "EISAWESOME";


    $scope.init = function(){
      $scope.catchPhrase = "<clement-s/>";
      $scope.avatarUrl = "https://github.com/EISAWESOME.png";
    };

    new Konami(function(){
      //Do the unlock animation
      $scope.achivementTriggered = true;

      //Hide maincard class
      $scope.cardHide = true;

      $timeout(function(){
        //Show tetris div
        $scope.tetrisShow = true;

        //Create the button to go back

        $timeout(function(){
          $('.game').blockrain({theme: "candy", playText: 'IT\'S A SECRET TO EVERYBODY',});

          var tetrisTheme = new Audio('resources/Tetris_theme.ogg');
          if (typeof tetrisTheme.loop == 'boolean')
          {
              tetrisTheme.loop = true;
          }
          else
          {
              tetrisTheme.addEventListener('ended', function() {
                  this.currentTime = 0;
                  this.play();
              }, false);
          }
          tetrisTheme.play();

        },1001)


      }, 1001);
      $scope.$apply()
    })

  });
})();
