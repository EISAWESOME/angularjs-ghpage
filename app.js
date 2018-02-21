(function(){
  let app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

  app.controller("pageController", function($rootScope, $scope, $timeout){

    let username = "EISAWESOME";

    $scope.init = function(){
      $scope.catchPhrase = "<clement-s/>";
      $scope.avatarUrl = "https://github.com/"+ username +".png";
    };

    new Konami(function(){
      $scope.achivementTriggered = true;

      $scope.cardHide = true;

      $timeout(function(){
        $scope.tetrisShow = true;

        $timeout(function(){
          $('.game').blockrain({theme: "candy", playText: 'Use arrow keys to play', playButtonText: 'Understood !',});

          let tetrisTheme = new Audio('resources/Tetris_theme.ogg');
          tetrisTheme.volume = 0.05;
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
