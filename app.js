(function () {
    const app = angular.module("pageModule", ['ngMaterial', 'ngAnimate']);

    app.controller("pageController", function ($rootScope, $scope, $timeout) {

        const username = "EISAWESOME";

        $scope.init = function () {
            $scope.catchPhrase = "<clement-s/>";
            $scope.avatarUrl = "https://github.com/" + username + ".png";
        };


        //Triggers when konami code is detected
        new Konami(function () {
            $scope.achivementTriggered = true;

            $scope.cardHide = true;

            $timeout(function () {
                $scope.tetrisShow = true;

                $timeout(function () {
                    $('.game').blockrain({
                        theme: 'candy',
                        playText: 'Use arrow keys to play',
                        playButtonText: 'Understood !',
                    });

                    const tetrisTheme = new Howl({
                        src: ['resources/sounds/Tetris_theme.ogg', 'resources/sounds/Tetris_theme.mp3'],
                        loop: true,
                        volume: 0.5
                    });

                    tetrisTheme.play();

                }, 1001)


            }, 1001);
            $scope.$apply()
        })

    });
})();
